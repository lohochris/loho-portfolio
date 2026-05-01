import { motion } from "motion/react";
import { BookOpen, Code2, Shield, Users, Brain, Terminal as TerminalIcon } from "lucide-react";
import { Terminal } from "./Terminal";

const highlights = [
  {
    icon: BookOpen,
    title: "Academic Foundation",
    description: "Currently pursuing a Ph.D. in Mathematics at Bayero University Kano. My doctoral research focuses on the intersection of Stochastic Modeling and Distributed Systems, specifically utilizing Renewal-Reward Theory to engineer high-resilience architectures. I hold an M.Sc. in Applied Mathematics and a dual-major B.Sc. (Ed) in Mathematics and Computer Science.",
  },
  {
    icon: Code2,
    title: "Engineering Excellence",
    description: "Lecturer at Skyline University Nigeria, delivering advanced curricula in Calculus, Differential Equations, Moddeling and Mathematics for Economists. I leverage this deep mathematical foundation to architect production-grade software and security-first distributed systems, translating complex change-models into high-performance code.",
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
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            The Intersection of{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Logic & Code
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Bridging theoretical mathematics and production systems to build resilient, privacy-first digital infrastructure for emerging markets
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-emerald-400" />
                Who I Am
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm a mathematician and Software Engineer operating at the intersection of stochastic theory, AI systems, and human-centered design. My work spans from proving theorems about renewal processes to deploying GDPR-compliant privacy tools for enterprises.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                As a Lecturer at Skyline University Nigeria and a Ph.D. candidate at Bayero University Kano, I mentor undergraduate researchers while advancing theoretical frameworks for system resilience optimization.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My fellowship with the 3MTT National Impact Challenge reflects a commitment to <span className="text-emerald-400">digital sovereignty</span>building infrastructure that empowers rather than extracts, protects rather than surveils.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-emerald-400 mb-2" />
                    <h4 className="text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl mb-6 flex items-center gap-3">
                <TerminalIcon className="w-6 h-6 text-blue-500" />
                Philosophy & Approach
              </h3>
              <div className="space-y-4">
                {philosophyPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-l-2 border-emerald-400/30 pl-4 hover:border-emerald-400 transition-colors duration-300"
                  >
                    <h4 className="text-sm text-emerald-400 mb-2">{point.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{point.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-400/10 to-blue-500/10 border border-emerald-400/20 backdrop-blur-sm">
              <h4 className="text-sm mb-3 text-emerald-400">Key Statistics</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">5+</div>
                  <div className="text-xs text-slate-400">Production Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">3</div>
                  <div className="text-xs text-slate-400">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">100+</div>
                  <div className="text-xs text-slate-400">Students Mentored</div>
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
