import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, BookOpen, Code, User, Building2, Calendar, ArrowRight } from 'lucide-react';
import Fuse from 'fuse.js';
import { blogPosts, BlogPost } from '../data/blogPosts';

interface SearchResult {
  type: 'publication' | 'project' | 'testimonial';
  title: string;
  description: string;
  link?: string;
  date?: string;
  authors?: string[];
  tags?: string[];
}

// Projects data
const projectsData = [
  {
    title: "Footprint Manager",
    description: "UK Privacy Audit platform ensuring GDPR compliance with automated data flow mapping and risk assessment.",
    tags: ["Privacy", "GDPR", "Compliance"],
    url: "https://footprint-manager-delta.vercel.app/",
    type: "project"
  },
  {
    title: "CyberGuard",
    description: "Proactive Security & Threat Detection system leveraging ML for real-time vulnerability assessment.",
    tags: ["Security", "ML", "Threat Detection"],
    url: "https://cyberguard-kappa.vercel.app/",
    type: "project"
  },
  {
    title: "Billy AI - CyberBullying Support",
    description: "AI-powered compassionate support platform for cyberbullying victims.",
    tags: ["AI", "Mental Health", "Support System"],
    url: "https://cyberbulling-gamma.vercel.app/",
    type: "project"
  },
  {
    title: "MediFlow",
    description: "AI-Driven Clinical Triage system optimizing patient flow with stochastic modeling.",
    tags: ["Healthcare", "AI", "Triage"],
    url: "https://mediflow-4zvx.onrender.com/",
    type: "project"
  }
];

// Testimonials data
const testimonialsData = [
  {
    name: "Dr. Mai Marta Ajayi",
    role: "Former Dean, SAMSS",
    content: "Christopher is a rare gem in academia. His ability to translate complex mathematical concepts into engaging lectures is exceptional.",
    institution: "Skyline University Nigeria"
  },
  {
    name: "Prof. Bashir M. Yakasai",
    role: "PhD Supervisor",
    content: "Mr. Dondo demonstrates outstanding research capacity in Applied Stochastic Processes. His work on Renewal Reward Theory shows exceptional mathematical maturity.",
    institution: "Bayero University Kano"
  }
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Prepare searchable data
  const searchableData: SearchResult[] = [
    // Publications
    ...blogPosts.map(post => ({
      type: 'publication' as const,
      title: post.title,
      description: post.excerpt,
      link: `#blog`,
      date: post.date,
      authors: post.authors,
      tags: post.tags,
    })),
    // Projects
    ...projectsData.map(project => ({
      type: 'project' as const,
      title: project.title,
      description: project.description,
      link: project.url,
      tags: project.tags,
    })),
    // Testimonials
    ...testimonialsData.map(testimonial => ({
      type: 'testimonial' as const,
      title: testimonial.name,
      description: testimonial.content.substring(0, 150) + '...',
      authors: [testimonial.role],
      tags: [testimonial.institution],
    })),
  ];

  // Configure Fuse.js for fuzzy search
  const fuse = new Fuse(searchableData, {
    keys: ['title', 'description', 'tags', 'authors'],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  });

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = fuse.search(query);
      setResults(searchResults.map(result => result.item));
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'publication': return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'project': return <Code className="w-4 h-4 text-blue-400" />;
      case 'testimonial': return <User className="w-4 h-4 text-purple-400" />;
      default: return <FileText className="w-4 h-4 text-slate-400" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'publication': return 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20';
      case 'project': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'testimonial': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md"
            onClick={onClose}
            aria-label="Close search"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[71] w-full max-w-2xl"
            role="dialog"
            aria-label="Search modal"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
              {/* Search Header */}
              <div className="relative border-b border-slate-700">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search publications, projects, or people... (⌘K / Ctrl+K)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-12 pr-12 py-4 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
                  aria-label="Search input"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close search modal"
                  title="Close (ESC)"
                >
                  <X className="w-5 h-5 text-slate-400" aria-hidden="true" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto custom-scroll">
                {query.length >= 2 ? (
                  results.length > 0 ? (
                    <div className="divide-y divide-slate-800">
                      {results.map((result, index) => (
                        <motion.a
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          href={result.link || '#'}
                          target={result.link?.startsWith('http') ? '_blank' : undefined}
                          rel={result.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={onClose}
                          className="block p-4 hover:bg-slate-800/50 transition-colors cursor-pointer group"
                          aria-label={`View ${result.title} - ${result.type}`}
                          title={`Click to view ${result.title}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${getTypeColor(result.type)} border`} aria-hidden="true">
                              {getTypeIcon(result.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                                <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                                  {result.title}
                                </h4>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(result.type)} border capitalize`}>
                                  {result.type}
                                </span>
                              </div>
                              <p className="text-sm text-slate-400 line-clamp-2">{result.description}</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {result.tags?.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-xs text-slate-500">#{tag}</span>
                                ))}
                                {result.date && (
                                  <div className="flex items-center gap-1 text-xs text-slate-500">
                                    <Calendar className="w-3 h-3" aria-hidden="true" />
                                    {result.date}
                                  </div>
                                )}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" aria-hidden="true" />
                      <p className="text-slate-400">No results found for "{query}"</p>
                      <p className="text-sm text-slate-500 mt-1">Try searching for papers, projects, or people</p>
                    </div>
                  )
                ) : (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" aria-hidden="true" />
                    <p className="text-slate-400">Start typing to search...</p>
                    <p className="text-xs text-slate-500 mt-2">Search publications, projects, collaborators, and more</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-700 px-4 py-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span>⌘K / Ctrl+K to search</span>
                    <span>ESC to close</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span>Publications</span>
                    <span className="w-2 h-2 rounded-full bg-blue-400" aria-hidden="true" />
                    <span>Projects</span>
                    <span className="w-2 h-2 rounded-full bg-purple-400" aria-hidden="true" />
                    <span>People</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}