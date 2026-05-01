import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_50%,rgba(52,211,153,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.05),transparent_50%)]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-6 md:space-y-8">
        
        <div className="space-y-3 md:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] md:leading-[1.15]"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Mathematics
            </span>
            <br />
            Certainty into{" "}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Digital Resilience.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Researcher in Applied Stochastic Processes and Systems Architect. I integrate advanced Renewal Theory with AI-driven security to build high-integrity, privacy-first infrastructure.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-xl bg-emerald-400 text-slate-950 font-bold hover:bg-emerald-300 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-xl shadow-emerald-500/10 text-sm md:text-base"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-300 font-medium hover:border-emerald-400 hover:text-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-sm text-sm md:text-base"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Status Pill */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 mt-8 md:mt-10"
      >
        <div className="inline-flex items-center gap-3 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-slate-800 bg-slate-900/30 font-mono text-xs text-slate-500 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          System Status: Operational | Open to Collaboration
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-800 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-slate-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}