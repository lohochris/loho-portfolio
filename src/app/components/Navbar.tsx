import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ChevronDown, Search as SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { SearchModal } from "./SearchModal";
import { useAnalytics } from "../components/Analytics";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { trackCVDownload } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut for search (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCVDownload = (cvType: 'Academic' | 'Technical') => {
    trackCVDownload(cvType);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 md:gap-3 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center transition-transform hover:scale-105 duration-300">
                <span className="text-slate-950 font-mono font-bold text-xs md:text-base">LCD</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs md:text-sm font-medium text-white">Loho Christopher Dondo</div>
                <div className="text-[10px] md:text-xs text-slate-300 font-mono">Lecturer | Systems Architect | Cybersecurity Researcher</div>
              </div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                      isActive
                        ? "text-emerald-400 bg-emerald-400/10 cursor-default"
                        : "text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="cursor-pointer p-2 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Search"
                title="Search (⌘K)"
              >
                <SearchIcon className="w-4 h-4 md:w-5 md:h-5 text-slate-300" />
              </button>

              {/* CV Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setShowCVDropdown(!showCVDropdown)}
                  className="cursor-pointer flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all duration-300 font-medium text-sm"
                >
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">CV</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showCVDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showCVDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 bg-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-lg overflow-hidden shadow-xl min-w-[200px] md:min-w-[220px] z-50"
                  >
                    <a
                      href="/cv/Academic_CV.pdf"
                      download="Loho_Christopher_Academic_CV.pdf"
                      onClick={() => handleCVDownload('Academic')}
                      className="cursor-pointer w-full px-4 py-3 text-left hover:bg-emerald-400/10 transition-colors flex items-center gap-2 group text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <div className="font-medium text-white">Academic CV</div>
                        <div className="text-xs text-slate-400">Mathematics & Research Focus</div>
                      </div>
                    </a>
                    <a
                      href="/cv/Tech_Resume.pdf"
                      download="Loho_Christopher_Tech_Resume.pdf"
                      onClick={() => handleCVDownload('Technical')}
                      className="cursor-pointer w-full px-4 py-3 text-left hover:bg-blue-500/10 transition-colors flex items-center gap-2 group text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <div className="font-medium text-white">Technical Resume</div>
                        <div className="text-xs text-slate-400">Software & Cybersecurity Focus</div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900/98 backdrop-blur-xl border-l border-slate-800 z-40 lg:hidden"
          >
            <div className="p-5 pt-20">
              {/* Mobile Search Option */}
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 mb-4 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <SearchIcon className="w-4 h-4" />
                <span className="text-sm">Search...</span>
                <span className="ml-auto text-xs text-slate-500">⌘K</span>
              </button>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                        isActive
                          ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20"
                          : "text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 space-y-3">
                {/* Mobile CV buttons with tracking */}
                <a
                  href="/cv/Academic_CV.pdf"
                  download="Loho_Christopher_Academic_CV.pdf"
                  onClick={() => handleCVDownload('Academic')}
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all font-medium group"
                >
                  <Download className="w-4 h-4" />
                  <div className="flex-1">
                    <div className="text-sm">Academic CV</div>
                    <div className="text-xs opacity-80">Mathematics & Research</div>
                  </div>
                </a>

                <a
                  href="/cv/Tech_Resume.pdf"
                  download="Loho_Christopher_Tech_Resume.pdf"
                  onClick={() => handleCVDownload('Technical')}
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all font-medium group"
                >
                  <Download className="w-4 h-4" />
                  <div className="flex-1">
                    <div className="text-sm">Technical Resume</div>
                    <div className="text-xs opacity-80">Software & Security</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}