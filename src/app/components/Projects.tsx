import { motion } from "motion/react";
import { ExternalLink, Shield, Lock, Globe, Activity, Calendar, Sparkles, Clock, Heart, Brain, TrendingUp } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

const projects = [
  {
    id: 1,
    title: "Footprint Manager",
    description: "UK Privacy Audit platform ensuring GDPR compliance with automated data flow mapping and risk assessment.",
    url: "https://footprint-manager-delta.vercel.app/",
    icon: Lock,
    tags: ["Privacy", "GDPR", "Compliance"],
    featured: true,
    aiStrategy: "Claude Sonnet 4.0 for GDPR compliance logic, GPT-4 for data flow diagram generation, Cursor AI for React component scaffolding and TypeScript type safety.",
    hosting: "Vercel",
    stack: ["React", "TypeScript", "Tailwind CSS", "AI"],
  },
  {
    id: 2,
    title: "CyberGuard",
    description: "Proactive Security & Threat Detection system leveraging ML for real-time vulnerability assessment.",
    url: "https://cyberguard-kappa.vercel.app/",
    icon: Shield,
    tags: ["Security", "ML", "Threat Detection"],
    featured: true,
    aiStrategy: "LLM-powered threat pattern detection, automated OWASP Top 10 vulnerability scanning with Claude-assisted security rule generation.",
    hosting: "Vercel",
    stack: ["React", "Vite", "Security APIs"],
  },
  {
    id: 3,
    title: "Cybersafe Nigeria",
    description: "Human-Centered Security UI/UX platform democratizing cybersecurity awareness across Nigeria.",
    url: "https://cybersafe-nigeria.vercel.app/",
    icon: Globe,
    tags: ["UX/UI", "Security Education", "Nigeria"],
    featured: false,
    aiStrategy: "Cursor AI for accessibility-first component design, GPT-4 for culturally-contextualized security content localization.",
    hosting: "Vercel",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 4,
    title: "MediFlow",
    description: "AI-Driven Clinical Triage system optimizing patient flow with stochastic modeling and real-time prioritization.",
    url: "https://mediflow-4zvx.onrender.com/",
    icon: Activity,
    tags: ["Healthcare", "AI", "Triage"],
    featured: false,
    aiStrategy: "Bayesian inference for priority scoring, Claude for queueing theory implementation, Monte Carlo simulations for capacity planning.",
    hosting: "Render",
    stack: ["Node.js", "Express", "PostgreSQL", "AI"],
  },
  {
    id: 5,
    title: "SUNMAC",
    description: "Academic Conference Management platform streamlining paper submissions, reviews, and event coordination.",
    url: "https://sunmac.onrender.com/",
    icon: Calendar,
    tags: ["Academic", "Conference", "Management"],
    featured: false,
    aiStrategy: "LLM-assisted paper abstract analysis, automated review assignment using similarity scoring, Cursor for rapid Django admin customization.",
    hosting: "Render",
    stack: ["Python", "Django", "PostgreSQL", "Redis"],
  },
  {
    id: 6,
    title: "Billy AI - CyberBullying Support",
    description: "AI-powered compassionate support platform for cyberbullying victims, featuring the SHIELD Framework and 24/7 empathetic assistance.",
    url: "https://cyberbulling-gamma.vercel.app/",
    icon: Heart,
    tags: ["AI", "Mental Health", "Support System"],
    featured: true,
    aiStrategy: "Protection Motivation Theory + Theory of Planned Behavior implementation, Claude Sonnet for empathetic response generation, local-first privacy architecture with indexedDB.",
    hosting: "Vercel",
    stack: ["React", "Gemini 1.5", "FastAPI", "IndexedDB"],
    metrics: {
      victimizationRate: "58.2%",
      healthImpact: "45.4%",
      passivityParadox: "69%"
    }
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Lazy load more projects on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500) {
        setVisibleProjects(prev => Math.min(prev + 3, projects.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoize visible projects for performance
  const visibleProjectsList = useMemo(() => 
    projects.slice(0, visibleProjects),
    [visibleProjects]
  );

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Production-grade applications spanning privacy engineering, cybersecurity, healthcare innovation, and digital wellbeing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjectsList.map((project, index) => {
            const Icon = project.icon;
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-full bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-blue-500/0 group-hover:from-emerald-400/5 group-hover:via-blue-500/5 group-hover:to-emerald-400/5 transition-all duration-500" />

                  <div className="relative p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 group-hover:border-emerald-400/50 transition-all duration-300">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="flex gap-2">
                        {isFeatured && (
                          <span className="px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-xs text-emerald-400">
                            Featured
                          </span>
                        )}
                        <div className="relative group/tooltip">
                          <button 
                            className="p-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all cursor-pointer"
                            aria-label="View AI strategy details"
                            title="Click to view AI implementation strategy"
                          >
                            <Sparkles className="w-3 h-3 text-blue-400" />
                          </button>
                          {hoveredProject === project.id && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              className="absolute top-full right-0 mt-2 w-72 p-3 rounded-lg bg-slate-900/95 backdrop-blur-xl border border-blue-500/30 shadow-xl z-50"
                            >
                              <div className="text-xs text-blue-400 mb-1 font-mono">🤖 AI Strategy:</div>
                              <p className="text-xs text-slate-300 leading-relaxed">{project.aiStrategy}</p>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Show metrics for Billy AI project */}
                    {'metrics' in project && project.metrics && (
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="text-center p-2 rounded-lg bg-slate-800/50">
                          <TrendingUp className="w-3 h-3 text-red-400 mx-auto mb-1" />
                          <p className="text-xs font-bold text-red-400">{project.metrics.victimizationRate}</p>
                          <p className="text-[10px] text-slate-500">Victimization</p>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-slate-800/50">
                          <Heart className="w-3 h-3 text-amber-400 mx-auto mb-1" />
                          <p className="text-xs font-bold text-amber-400">{project.metrics.healthImpact}</p>
                          <p className="text-[10px] text-slate-500">Health Impact</p>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-slate-800/50">
                          <Brain className="w-3 h-3 text-emerald-400 mx-auto mb-1" />
                          <p className="text-xs font-bold text-emerald-400">{project.metrics.passivityParadox}</p>
                          <p className="text-[10px] text-slate-500">Passivity</p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 font-mono border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.hosting === "Render" && (
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span className="text-xs text-amber-400">Demo may take ~30s to wake up</span>
                      </div>
                    )}

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 transition-all duration-300 group/btn cursor-pointer"
                      aria-label={`View live demo of ${project.title}`}
                      title={`Open ${project.title} live demo in new tab`}
                    >
                      <span className="text-sm">Live Demo</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>

                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/50 border border-slate-700">
              <Brain className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-400">Loading more projects...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}