import { motion } from "motion/react";
import { Shield, Zap, Award, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-400 font-mono">Lighthouse: 100/100</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-blue-400 font-mono">Zero-Trust Verified</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-purple-400 font-mono">WCAG 2.1 AA</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="text-xs text-amber-400 font-mono">Privacy-First Design</span>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <a
                href="mailto:lohodondo@example.com"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Email
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                GitHub
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <a
                href="#home"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Back to Top
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <span>© {new Date().getFullYear()} Loho Christopher Dondo.</span>
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React, Tailwind CSS & Framer Motion</span>
            </div>

            <div className="text-xs text-slate-600">
              <span className="font-mono">
                Deployed with CI/CD | Monitored 24/7 | Open Source Advocate
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-6 border-t border-slate-800"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
            <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
              React 18.3
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
              TypeScript 5.0
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
              Tailwind v4
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
              Framer Motion
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
              Vite 6.0
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
