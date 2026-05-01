import { motion, AnimatePresence } from "motion/react";
import { Download, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCVDropdown, setShowCVDropdown] = useState(false);

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

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center transition-transform hover:scale-105 duration-300">
                <span className="text-slate-950 font-mono font-bold">LCD</span>
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium">Loho Christopher Dondo</div>
                <div className="text-xs text-slate-400 font-mono">Lecturer | Systems Architect | Cybersecurity Researcher</div>
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
                    className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                      isActive
                        ? "text-emerald-400 bg-emerald-400/10 cursor-default"
                        : "text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Status badge */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs text-emerald-200 font-medium">Innovator</span>
              </div>

              {/* CV Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setShowCVDropdown(!showCVDropdown)}
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all duration-300 font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm">CV</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showCVDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showCVDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-lg overflow-hidden shadow-xl min-w-[220px]"
                  >
                    <a
                      href="/cv/Academic_CV.pdf"
                      download="Loho_Christopher_Academic_CV.pdf"
                      className="cursor-pointer w-full px-4 py-3 text-left hover:bg-emerald-400/10 transition-colors flex items-center gap-2 group text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <div className="font-medium">Academic CV</div>
                        <div className="text-xs text-slate-500">Mathematics & Research Focus</div>
                      </div>
                    </a>
                    <a
                      href="/cv/Tech_Resume.pdf"
                      download="Loho_Christopher_Tech_Resume.pdf"
                      className="cursor-pointer w-full px-4 py-3 text-left hover:bg-blue-500/10 transition-colors flex items-center gap-2 group text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <div className="font-medium">Technical Resume</div>
                        <div className="text-xs text-slate-500">Software & Cybersecurity Focus</div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 z-40 lg:hidden"
          >
            <div className="p-6 pt-24">
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                        isActive
                          ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20"
                          : "text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 space-y-3">
                {/* Mobile status badge */}
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-400 font-medium">PhD Candidate | Researcher</span>
                </div>

                {/* Mobile CV buttons - Enhanced */}
                <a
                  href="/cv/Academic_CV.pdf"
                  download="Loho_Christopher_Academic_CV.pdf"
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all font-medium group"
                >
                  <Download className="w-4 h-4" />
                  <div className="flex-1">
                    <div>Academic CV</div>
                    <div className="text-xs opacity-80">Mathematics & Research</div>
                  </div>
                </a>

                <a
                  href="/cv/Tech_Resume.pdf"
                  download="Loho_Christopher_Tech_Resume.pdf"
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-all font-medium group"
                >
                  <Download className="w-4 h-4" />
                  <div className="flex-1">
                    <div>Technical Resume</div>
                    <div className="text-xs opacity-80">Software & Security</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}