import { motion } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";

export function GitHubHeatmap() {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl">GitHub Activity</h3>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
            >
              View Profile →
            </a>
          </div>

          <div className="overflow-x-auto">
            <GitHubCalendar
              username="lohodondo"
              colorScheme="dark"
              blockSize={12}
              fontSize={14}
              theme={{
                dark: ['#1e293b', '#0f4c3a', '#10b981', '#34d399', '#6ee7b7'],
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
            <div className="text-center">
              <div className="text-2xl text-emerald-400 mb-1">500+</div>
              <div className="text-xs text-slate-400">Commits This Year</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-blue-400 mb-1">25+</div>
              <div className="text-xs text-slate-400">Public Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-emerald-400 mb-1">90%</div>
              <div className="text-xs text-slate-400">TypeScript/Python</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
