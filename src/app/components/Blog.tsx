import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, Search, X, User, Building2, FileText, Menu, XCircle } from "lucide-react";
import { blogPosts, BlogPost } from "../data/blogPosts";
import 'katex/dist/katex.min.css';

// KaTeX for LaTeX rendering
const katex = (window as any).katex;

// Function to render LaTeX inline
const renderLatex = (text: string): string => {
  if (!text) return text;
  
  let processedText = text;
  const inlineMatches = text.match(/\$([^\$]+)\$/g);
  if (inlineMatches) {
    inlineMatches.forEach(match => {
      const latex = match.slice(1, -1);
      try {
        if (katex) {
          const rendered = katex.renderToString(latex, {
            throwOnError: false,
            displayMode: false
          });
          processedText = processedText.replace(match, rendered);
        } else {
          processedText = processedText.replace(match, `<code class="inline-math">${latex}</code>`);
        }
      } catch (e) {
        processedText = processedText.replace(match, `<code class="inline-math">${latex}</code>`);
      }
    });
  }
  
  return processedText;
};

// Function to render display math $$...$$
const renderDisplayLatex = (text: string): React.ReactNode[] | null => {
  if (!text) return null;
  
  const displayMatches = text.match(/\$\$([^\$]+)\$\$/g);
  if (displayMatches) {
    return displayMatches.map((match, idx) => {
      const latex = match.slice(2, -2);
      try {
        if (katex) {
          const rendered = katex.renderToString(latex, {
            throwOnError: false,
            displayMode: true
          });
          return <div key={idx} className="my-6 overflow-x-auto" dangerouslySetInnerHTML={{ __html: rendered }} />;
        } else {
          return <pre key={idx} className="bg-slate-800 p-4 rounded-lg my-4 overflow-x-auto text-slate-300"><code>{latex}</code></pre>;
        }
      } catch (e) {
        return <pre key={idx} className="bg-slate-800 p-4 rounded-lg my-4 overflow-x-auto text-slate-300"><code>{latex}</code></pre>;
      }
    });
  }
  return null;
};

// Type for list items
interface ListItem {
  type: 'numbered' | 'bullet';
  content: string;
}

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Function to render content with LaTeX support
  const renderContent = (content: string): React.ReactNode[] => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableHeaders: string[] = [];
    let tableRows: string[][] = [];
    let currentList: ListItem[] = [];
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('$$')) {
        const displayMath = renderDisplayLatex(line);
        if (displayMath) {
          elements.push(...displayMath);
          continue;
        }
      }
      
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableHeaders = [];
          tableRows = [];
        }
        const cells = line.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim());
        
        if (cells.every(cell => /^[-:]+$/.test(cell))) {
          continue;
        }
        
        if (tableHeaders.length === 0) {
          tableHeaders = cells;
        } else {
          tableRows.push(cells);
        }
        continue;
      } else if (inTable) {
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-800/80 border-b border-slate-700">
                  {tableHeaders.map((header, idx) => (
                    <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-emerald-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-3 text-sm text-slate-300">
                        {cell}
                       </td>
                    ))}
                   </tr>
                ))}
              </tbody>
             </table>
          </div>
        );
        inTable = false;
        tableHeaders = [];
        tableRows = [];
        continue;
      }
      
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-emerald-400">
            {line.substring(3)}
          </h2>
        );
        continue;
      }
      
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl font-semibold mt-6 mb-3 text-emerald-300">
            {line.substring(4)}
          </h3>
        );
        continue;
      }
      
      if (line.trim() === '---') {
        elements.push(<hr key={i} className="my-6 border-slate-700" />);
        continue;
      }
      
      if (/^\d+\.\s/.test(line.trim())) {
        const listItem = line.trim().replace(/^\d+\.\s/, '');
        if (!inList) {
          inList = true;
          currentList = [];
        }
        currentList.push({ type: 'numbered', content: listItem });
        continue;
      }
      
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const listItem = line.trim().substring(2);
        if (!inList) {
          inList = true;
          currentList = [];
        }
        currentList.push({ type: 'bullet', content: listItem });
        continue;
      } 
      
      if (inList && currentList.length > 0 && !line.trim()) {
        const isNumbered = currentList[0]?.type === 'numbered';
        const ListTag = isNumbered ? 'ol' : 'ul';
        elements.push(
          <ListTag key={`list-${i}`} className={`${isNumbered ? 'list-decimal' : 'list-disc'} list-inside space-y-2 mb-4 text-slate-200`}>
            {currentList.map((item, idx) => (
              <li key={idx} className="text-slate-200" dangerouslySetInnerHTML={{ __html: renderLatex(item.content) }} />
            ))}
          </ListTag>
        );
        inList = false;
        currentList = [];
        continue;
      } else if (inList && currentList.length > 0 && line.trim()) {
        if (/^\d+\.\s/.test(line.trim())) {
          const listItem = line.trim().replace(/^\d+\.\s/, '');
          currentList.push({ type: 'numbered', content: listItem });
        } else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
          const listItem = line.trim().substring(2);
          currentList.push({ type: 'bullet', content: listItem });
        }
        continue;
      }
      
      if (line.trim() && !line.startsWith('|') && !line.startsWith('##') && !line.startsWith('###')) {
        const hasLatex = line.includes('$');
        if (hasLatex) {
          elements.push(
            <p key={i} className="text-slate-200 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: renderLatex(line) }} />
          );
        } else {
          elements.push(
            <p key={i} className="text-slate-200 leading-relaxed mb-4">
              {line}
            </p>
          );
        }
      } else if (line.trim() === '' && !inList) {
        elements.push(<div key={i} className="h-2" />);
      }
    }
    
    if (inList && currentList.length > 0) {
      const isNumbered = currentList[0]?.type === 'numbered';
      const ListTag = isNumbered ? 'ol' : 'ul';
      elements.push(
        <ListTag key={`list-end`} className={`${isNumbered ? 'list-decimal' : 'list-disc'} list-inside space-y-2 mb-4 text-slate-200`}>
          {currentList.map((item, idx) => (
            <li key={idx} className="text-slate-200" dangerouslySetInnerHTML={{ __html: renderLatex(item.content) }} />
          ))}
        </ListTag>
      );
    }
    
    return elements;
  };

  return (
    <section id="blog" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 text-white">
            Research <span className="text-emerald-400">Publications</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto px-4">
            Exploring the intersection of mathematics, software engineering, and cybersecurity
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 md:mb-12 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-emerald-400/50 focus:outline-none transition-all duration-300 text-white placeholder:text-slate-500"
            />
          </div>

          {/* Category Filters - Desktop */}
          {!isMobile && (
            <div className="hidden md:flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-emerald-400/20 border-emerald-400 text-emerald-400"
                      : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-emerald-400/50"
                  } border`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Category Filters - Mobile Dropdown */}
          {isMobile && (
            <div className="md:hidden">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white"
              >
                <span>Filter: {selectedCategory === "all" ? "All Categories" : selectedCategory}</span>
                <Menu className="w-4 h-4" />
              </button>
              {mobileFiltersOpen && (
                <div className="mt-2 p-2 rounded-xl bg-slate-800/90 border border-slate-700">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setMobileFiltersOpen(false);
                      }}
                      className={`w-full px-4 py-2 rounded-lg text-left capitalize transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-emerald-400/20 text-emerald-400"
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Blog Posts Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 p-4 md:p-6 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex gap-2 flex-wrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    post.status === "Under Review" ? "bg-amber-500/10 text-amber-400" :
                    post.status === "Submitted" ? "bg-emerald-500/10 text-emerald-400" :
                    "bg-blue-500/10 text-blue-400"
                  }`}>
                    {post.status}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs">
                    {post.category}
                  </span>
                </div>
                <FileText className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-base md:text-lg font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors line-clamp-3">
                {post.title}
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              {post.authors && (
                <div className="flex items-center gap-1 text-xs text-slate-400 mb-2">
                  <User className="w-3 h-3 flex-shrink-0" />
                  <span className="line-clamp-1">{post.authors.slice(0, 2).join(", ")}{post.authors.length > 2 && " et al."}</span>
                </div>
              )}

              {post.institution && (
                <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                  <Building2 className="w-3 h-3 flex-shrink-0" />
                  <span className="line-clamp-1">{post.institution}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-3">
                {post.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs text-slate-500">#{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-700/50">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-slate-400 group-hover:text-emerald-400 transition-colors">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal */}
        {selectedPost && (
          <>
            <div 
              className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedPost(null)}
            />
            
            <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 overflow-y-auto">
              <div 
                className="relative max-w-4xl w-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl shadow-2xl border border-slate-700 mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-3 right-3 md:top-4 md:right-4 z-[62] flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-red-600 hover:bg-red-700 border border-red-500 transition-all duration-300 hover:scale-105 cursor-pointer group shadow-lg"
                  aria-label="Close article"
                >
                  <XCircle className="w-4 h-4 text-white" />
                  <span className="text-xs md:text-sm font-medium text-white">Close</span>
                </button>
                
                <div className="p-4 md:p-8 overflow-y-auto max-h-[85vh] custom-scroll">
                  <div className="pr-8 md:pr-28">
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs md:text-sm ${
                        selectedPost.status === "Under Review" ? "bg-amber-500/10 text-amber-400" :
                        selectedPost.status === "Submitted" ? "bg-emerald-500/10 text-emerald-400" :
                        "bg-blue-500/10 text-blue-400"
                      }`}>
                        {selectedPost.status}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs md:text-sm">
                        {selectedPost.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white leading-tight">
                      {selectedPost.title}
                    </h2>
                    
                    {selectedPost.authors && (
                      <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-300 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{selectedPost.authors.join(", ")}</span>
                        </div>
                      </div>
                    )}
                    
                    {selectedPost.institution && (
                      <div className="flex items-center gap-1 text-xs md:text-sm text-slate-400 mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>{selectedPost.institution}</span>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-400 mb-6 pb-4 border-b border-slate-700">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {selectedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        {selectedPost.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose prose-invert max-w-none prose-p:text-slate-200 prose-headings:text-emerald-400">
                    {renderContent(selectedPost.content)}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-700">
                    {selectedPost.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-slate-800/50 text-xs md:text-sm text-slate-300 border border-slate-700 hover:border-emerald-400/50 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No publications found matching your criteria.</p>
          </div>
        )}
      </div>

      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 3px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #34d399;
          border-radius: 3px;
        }
        .inline-math {
          background: #1e293b;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: monospace;
          color: #34d399;
          font-size: 0.9em;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          table {
            font-size: 0.75rem;
          }
          td, th {
            padding: 0.5rem;
          }
        }
        th {
          background: #1e293b;
          font-weight: 600;
          color: #34d399;
        }
        td {
          color: #cbd5e1;
        }
        td, th {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid rgba(51, 65, 85, 0.5);
        }
        tr:hover td {
          background: rgba(30, 41, 59, 0.3);
        }
        .katex {
          font-size: 1.05em;
          color: #34d399;
        }
        .katex-display {
          margin: 1.5em 0;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 0.5rem 0;
        }
        @media (max-width: 768px) {
          .katex-display {
            font-size: 0.85em;
          }
        }
      `}</style>
    </section>
  );
}