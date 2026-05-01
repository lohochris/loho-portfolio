import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Sigma, 
  ShieldCheck, 
  Presentation, 
  LayoutTemplate, 
  Binary, 
  X,
  LucideIcon 
} from "lucide-react";

// 1. Define the Interface to fix 'never' type errors
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  details: string;
  color: string;
}

const services: Service[] = [
  {
    icon: Sigma,
    title: "Stochastic & Math Modeling",
    description: "Engineering mathematical certainty in uncertain environments. I specialize in applying renewal theory and industrial reliability models to optimize complex system lifecycles.",
    features: [
      "Renewal-reward process optimization",
      "Queueing theory for infrastructure scaling",
      "High-fidelity Monte Carlo simulations",
      "Probabilistic failure mode analysis",
    ],
    details: "I bridge the gap between theoretical probability and industrial application. By utilizing Bayesian inference and stochastic processes, I help organizations predict system behavior and optimize resource allocation under volatility.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Cpu,
    title: "AI & Full-Stack Engineering",
    description: "Developing robust, scalable software with an AI-first approach. I leverage LLM-augmented workflows to maintain rapid delivery without sacrificing code integrity or mathematical rigor.",
    features: [
      "AI-integrated system architecture",
      "Automated refactoring & technical debt reduction",
      "Intelligent unit & integration test generation",
      "High-performance backend API design",
    ],
    details: "Beyond simple CRUD apps, I build intelligent systems. Using Cursor, GPT-4, and Claude, I accelerate the development of complex architectures while ensuring the underlying logic remains sound and maintainable.",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Risk Audit",
    description: "Security is a design philosophy, not an afterthought. I provide OWASP-compliant assessments and privacy-preserving designs rooted in trauma-informed principles.",
    features: [
      "Zero-trust architecture implementation",
      "GDPR/NDPR privacy impact assessments",
      "Vulnerability & penetration testing",
      "Trauma-informed threat modeling",
    ],
    details: "My approach to security considers both the technical and human vectors. I ensure compliance with international standards while designing systems that protect user dignity and data privacy.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Binary,
    title: "Formal Methods & Verification",
    description: "Applying mathematical proofs to software logic. I ensure critical systems behave exactly as intended by verifying code correctness through formal logic and math.",
    features: [
      "Model checking for complex logic",
      "Invariant-based code verification",
      "Static analysis for critical path safety",
      "Logic-driven bug prevention",
    ],
    details: "Where traditional testing fails, formal methods provide certainty. I use mathematical logic to prove that your algorithms and security protocols are immune to specific classes of failure.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Presentation,
    title: "Technical Training & Pedagogy",
    description: "Translating complex technical concepts into actionable knowledge. I mentor teams and university students in mathematics, AI literacy, and software excellence.",
    features: [
      "Advanced Mathematics for AI workshops",
      "Secure Coding & OWASP best practices",
      "Undergraduate research mentorship",
      "Non-technical AI strategy consulting",
    ],
    details: "I facilitate the transfer of knowledge between academia and industry, empowering teams to understand the 'why' behind the tools they use every day.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: LayoutTemplate,
    title: "Human-Centered Design",
    description: "Designing for neurodiversity and cognitive ease. I build accessible, high-performance interfaces that respect the user’s mental model and cultural context.",
    features: [
      "WCAG 2.1 AA/AAA compliance auditing",
      "Cognitive load & friction optimization",
      "Accessibility-first component design",
      "Inclusive UI for global audiences",
    ],
    details: "Great software should be invisible. I focus on reducing the barrier between human intent and machine execution, ensuring technology remains a tool rather than a burden.",
    color: "from-yellow-500 to-amber-500",
  },
];

export function Services() {
  // 2. Explicitly type the state to allow for 'Service' or 'null'
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 px-6 relative bg-slate-950 text-white overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical <span className="text-emerald-400">Offerings</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Intersection of <span className="text-emerald-400">Rigorous Mathematics</span>, 
            <span className="text-blue-400"> Defensive Security</span>, and 
            <span className="text-purple-400"> Elegant Engineering</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="relative h-full p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-400/40 transition-all duration-500 backdrop-blur-sm flex flex-col justify-between">
                  <div className="relative z-10 space-y-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-slate-700`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button 
                    onClick={() => setActiveService(service)}
                    className="mt-8 text-xs font-mono uppercase tracking-widest text-emerald-400 hover:text-emerald-300 flex items-center gap-2 group/btn"
                  >
                    <span>Analyze Scope</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learn More Modal */}
        <AnimatePresence>
          {activeService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-slate-900 border border-slate-700 max-w-lg w-full p-8 rounded-3xl relative shadow-2xl"
              >
                {/* 3. Accessibility Fix: Added aria-label and title */}
                <button 
                  onClick={() => setActiveService(null)}
                  aria-label="Close details"
                  title="Close"
                  className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${activeService.color} mb-6 shadow-lg shadow-emerald-500/10`}>
                  <activeService.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{activeService.title}</h3>
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  {activeService.details}
                </p>

                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <h4 className="text-emerald-400 text-sm font-mono mb-2">Methodology:</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Engagement strategy involves rigorous initial audits, theoretical optimization models, 
                    and security-first deployment frameworks tailored to your industrial constraints.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}