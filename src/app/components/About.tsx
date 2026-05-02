import { motion } from "framer-motion";
import { BookOpen, Code2, Shield, Users, Brain, Terminal as TerminalIcon } from "lucide-react";
import { Terminal } from "./Terminal";
import { useState, useEffect } from "react";

const highlights = [
  {
    icon: BookOpen,
    title: "Academic Foundation",
    description: "Currently pursuing a Ph.D. in Mathematics at Bayero University Kano. My doctoral research focuses on the intersection of Stochastic Modeling and Distributed Systems, specifically utilizing Renewal-Reward Theory to engineer high-resilience architectures. I hold an M.Sc. in Applied Mathematics and a dual-major B.Sc. (Ed) in Mathematics and Computer Science.",
  },
  {
    icon: Code2,
    title: "Engineering Excellence",
    description: "Lecturer at Skyline University Nigeria, delivering advanced curricula in Calculus, Differential Equations, Modeling and Mathematics for Economists. I leverage this deep mathematical foundation to architect production-grade software and security-first distributed systems, translating complex change-models into high-performance code.",
  },
  {
    icon: Shield,
    title: "Digital Sovereignty",
    description: "Championing privacy-first, trauma-informed design for emerging markets. Building security systems that respect human dignity and cultural context.",
  },
  {
    icon: Users,
    title: "Impact at Scale",
    description: "3MTT National Impact Challenge Fellow, selected among Nigeria's top tech innovators to address critical digital infrastructure challenges.",
  },
];

const philosophyPoints = [
  {
    title: "Mathematics as Foundation",
    text: "Every system I build is grounded in mathematical rigor, from stochastic processes in clinical triage to renewal theory in security auditing.",
  },
  {
    title: "AI-Augmented Development",
    text: "Leveraging Cursor AI and Claude Sonnet 4.0 for rapid prototyping, architectural design, and vulnerability pattern detection, reducing development cycles by 60%.",
  },
  {
    title: "Trauma-Informed Design",
    text: "Building systems that acknowledge the psychological burden of surveillance capitalism. Privacy isn't a feature, it's a fundamental human right.",
  },
  {
    title: "Open Collaboration",
    text: "All projects integrate open-source tools, reproducible workflows, and transparent security practices. Code is dialogue, not decree.",
  },
];

export function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 text-white">
            The Intersection of{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Logic & Code
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto px-4">
            Bridging theoretical mathematics and production systems to build resilient, privacy-first digital infrastructure for emerging markets
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="p-5 md:p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-3 text-white">
                <Brain className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                Who I Am
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4 md:mb-6">
                I'm a mathematician and Software Engineer operating at the intersection of stochastic theory, AI systems, and human-centered design. My work spans from proving theorems about renewal processes to deploying GDPR-compliant privacy tools for enterprises.
              </p>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4 md:mb-6">
                As a Lecturer at Skyline University Nigeria and a Ph.D. candidate at Bayero University Kano, I mentor undergraduate researchers while advancing theoretical frameworks for system resilience optimization.
              </p>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                My fellowship with the 3MTT National Impact Challenge reflects a commitment to <span className="text-emerald-400">digital sovereignty</span>, building infrastructure that empowers rather than extracts, protects rather than surveils.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-3 md:p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mb-2" />
                    <h4 className="text-xs md:text-sm font-semibold mb-1 text-white">{item.title}</h4>
                    <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="p-5 md:p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-3 text-white">
                <TerminalIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                Philosophy & Approach
              </h3>
              <div className="space-y-3 md:space-y-4">
                {philosophyPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-l-2 border-emerald-400/30 pl-3 md:pl-4 hover:border-emerald-400 transition-colors duration-300"
                  >
                    <h4 className="text-xs md:text-sm text-emerald-400 mb-1 md:mb-2 font-semibold">{point.title}</h4>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{point.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-emerald-400/10 to-blue-500/10 border border-emerald-400/20 backdrop-blur-sm">
              <h4 className="text-sm md:text-base mb-3 text-emerald-400 font-semibold">Key Statistics</h4>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">5+</div>
                  <div className="text-[10px] md:text-xs text-slate-400">Production Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">6</div>
                  <div className="text-[10px] md:text-xs text-slate-400">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">400+</div>
                  <div className="text-[10px] md:text-xs text-slate-400">Students Mentored</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}