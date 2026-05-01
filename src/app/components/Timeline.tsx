import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award, Code2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const timeline = [
  {
    year: "2024 - Present",
    title: "Ph.D. Candidate in Applied Mathematics",
    organization: "Bayero University Kano",
    description: "Researching renewal-reward processes and stochastic modeling for resilience optimization in distributed systems.",
    icon: GraduationCap,
    type: "academic",
  },
  {
    year: "2023 - Present",
    title: "Assistant Lecturer",
    organization: "Skyline University Nigeria",
    description: "Teaching Statistics, Probability Theory, and Mathematical Modeling while mentoring undergraduate research projects.",
    icon: Briefcase,
    type: "professional",
  },
  {
    year: "2025",
    title: "Fellow - 3MTT National Impact Challenge",
    organization: "Federal Ministry of Communications, Innovation & Digital Economy",
    description: "Selected among top tech innovators nationwide for impactful digital solutions addressing critical national challenges.",
    icon: Award,
    type: "recognition",
  },
  {
    year: "2024",
    title: "Research Collaboration",
    organization: "Nottingham Trent University",
    description: "Cross-institutional research on privacy-preserving AI systems and human-computer interaction patterns.",
    icon: GraduationCap,
    type: "academic",
  },
];

const techWorkflow = {
  title: "Technical Workflow",
  description: "Leveraging cutting-edge AI development tools for rapid prototyping and security hardening",
  tools: [
    {
      name: "Cursor AI",
      use: "Primary IDE for AI-assisted full-stack development with context-aware code generation",
    },
    {
      name: "LLM Integration",
      use: "Claude Sonnet 4.0 for architecture design, code review, and vulnerability pattern detection",
    },
    {
      name: "Security Auditing",
      use: "Automated OWASP scanning with LLM-enhanced threat modeling for proactive security",
    },
  ],
};

export function Timeline() {
  const [showMathLogic, setShowMathLogic] = useState(false);

  return (
    <section id="research" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Research & <span className="text-emerald-400">Professional Journey</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From theoretical mathematics to production systems
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-emerald-400 transition-all duration-300">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-slate-700 to-transparent mt-4" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-sm text-emerald-400 font-mono">{item.year}</span>
                      <h3 className="text-xl mt-1">{item.title}</h3>
                      <p className="text-sm text-blue-500">{item.organization}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-400 capitalize border border-slate-700">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700 p-8 backdrop-blur-sm"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl mb-2 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-emerald-400" />
                {techWorkflow.title}
              </h3>
              <p className="text-slate-400">{techWorkflow.description}</p>
            </div>
            <button
              onClick={() => setShowMathLogic(!showMathLogic)}
              className="px-4 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              {showMathLogic ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showMathLogic ? "Hide" : "Show"} Math Logic
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {techWorkflow.tools.map((tool, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-slate-800/50 border border-slate-700"
              >
                <h4 className="text-sm mb-2 text-emerald-400 font-mono">{tool.name}</h4>
                <p className="text-sm text-slate-400">{tool.use}</p>
              </div>
            ))}
          </div>

          {showMathLogic && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-lg bg-slate-950/50 border border-emerald-400/20 overflow-hidden"
            >
              <h4 className="text-sm mb-4 text-emerald-400">Renewal-Reward Process Framework</h4>
              <div className="space-y-3 font-mono text-sm text-slate-300">
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-xs mb-1">Expected Reward Rate:</div>
                  <div>E[R] / E[T] = lim(t→∞) R(t) / t</div>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-xs mb-1">Renewal Function:</div>
                  <div>m(t) = Σ(n=1 to ∞) F_n(t)</div>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-xs mb-1">Long-Run Cost Optimization:</div>
                  <div>C* = min E[C(T)] / E[T]</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Applied to system resilience modeling in distributed architectures
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-emerald-400/10 border border-blue-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            Research Collaborators
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
              <h4 className="text-lg mb-2">Prof. Bashir M. Yakasai</h4>
              <p className="text-sm text-blue-400 mb-2">Ph.D. Supervisor</p>
              <p className="text-sm text-slate-400">
                Department of Mathematics, Bayero University Kano. Specializing in stochastic processes and reliability theory.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
              <h4 className="text-lg mb-2">Buhari Getso</h4>
              <p className="text-sm text-emerald-400 mb-2">Research Collaborator</p>
              <p className="text-sm text-slate-400">
                Nottingham Trent University. Joint research on privacy-preserving AI systems and human-computer interaction patterns.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm">
              <span className="text-slate-400">Focus Areas:</span>{" "}
              <span className="text-emerald-400">Renewal Theory</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm">
              <span className="text-slate-400">Methods:</span>{" "}
              <span className="text-blue-400">Industrial Reliability</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm">
              <span className="text-slate-400">Applications:</span>{" "}
              <span className="text-emerald-400">Distributed Systems</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
