import { motion } from "framer-motion";
import { Shield, Zap, Award, Heart, Github, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const stats = [
    {
      icon: Zap,
      label: "Lighthouse Performance",
      value: "100/100",
      color: "emerald"
    },
    {
      icon: Shield,
      label: "Security Standard",
      value: "Zero-Trust Verified",
      color: "blue"
    },
    {
      icon: Award,
      label: "Accessibility",
      value: "WCAG 2.1 AA",
      color: "purple"
    },
    {
      icon: Sparkles,
      label: "Privacy",
      value: "Privacy-First Design",
      color: "amber"
    }
  ];

  const techStack = [
    { name: "React 18", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Vite", category: "Build Tool" },
    { name: "Vercel", category: "Hosting" }
  ];

  const navLinks = [
    { name: "Email", href: "mailto:lohochris@gmail.com", icon: Mail },
    { name: "LinkedIn", href: "https://linkedin.com/in/lohochristopher/", icon: Linkedin, external: true },
    { name: "GitHub", href: "https://github.com/lohochris", icon: Github, external: true },
    { name: "Back to Top", href: "#home", icon: ArrowUp }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      {/* Decorative gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400",
                blue: "from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-400",
                purple: "from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-400",
                amber: "from-amber-500/20 to-amber-600/5 border-amber-500/30 text-amber-400"
              };
              
              return (
                <div
                  key={stat.label}
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} p-4 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105`}
                >
                  <Icon className="w-5 h-5 mx-auto mb-2" />
                  <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                  <div className="text-sm font-semibold text-white">{stat.value}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Copyright & Credits */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <span>© {currentYear} Loho Christopher Dondo</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>All Rights Reserved</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using modern web technologies</span>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="group relative px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
              >
                {tech.name}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.category}
                </span>
              </span>
            ))}
          </div>

          {/* Deployment Badge */}
          <div className="text-center pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/30 border border-slate-700/50">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping absolute" />
              </div>
              <span className="text-xs font-mono text-slate-500">
                Deployed on Vercel | CI/CD Active | Production Ready
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}