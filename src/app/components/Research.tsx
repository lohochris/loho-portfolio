import { motion } from "framer-motion";
import { 
  GraduationCap, Briefcase, Award, Users, Brain, Shield, Code, 
  BookOpen, Presentation, FileText, Calendar, 
  Clock, GitBranch, HeartHandshake, Globe
} from "lucide-react";

// Timeline Events Data - Professional Journey
const timelineEvents = [
  {
    year: "2025 - Present",
    title: "Ph.D. Candidate in Applied Mathematics",
    institution: "Bayero University Kano",
    category: "academic",
    icon: GraduationCap,
    description: "Researching renewal-reward processes, delay time models, and stochastic optimization for infrastructure reliability and resilience in distributed systems.",
    color: "emerald",
    tags: ["Stochastic Processes", "Renewal Theory", "Reliability Engineering"]
  },
  {
    year: "2023 - Present",
    title: "Lecturer",
    institution: "Skyline University Nigeria",
    category: "professional",
    icon: Briefcase,
    description: "Teaching Calculus, Probability Theory, and Mathematical Modeling while supervising undergraduate research and mentoring students in computational mathematics.",
    color: "blue",
    tags: ["Education", "Mentorship", "Mathematics"]
  },
  {
    year: "2025",
    title: "Fellow - 3MTT National Impact Challenge",
    institution: "Federal Ministry of Communications, Innovation & Digital Economy",
    category: "recognition",
    icon: Award,
    description: "Selected among top tech innovators nationwide for impactful digital solutions addressing critical national challenges in cybersecurity.",
    color: "purple",
    tags: ["Cybersecurity", "Innovation", "National Impact"]
  }
];

// Comprehensive Publications Data
const publications = [
  {
    title: "Deterministic Optimization of Inspection Interval for Vintage Hydrocarbon Pipelines: A Renewal–Reward and Delay Time Model Approach to Bridging the Detection Latency Gap",
    authors: ["Loho Dondo Christopher", "Prof. Bashir M. Yakasai", "Waziri Mohammad Yusuf", "Fashakin Yemisi Folashade", "Aliyu Mohammed", "Yemi Daniel Ogundare", "Mustapha Abdulsalam"],
    journal: "Bayero University Kano / Skyline University Nigeria",
    status: "Under Review",
    year: "2025",
    type: "Journal Article",
    icon: FileText,
    color: "emerald",
    tags: ["Renewal Theory", "Delay Time Model", "Pipeline Optimization", "Reliability"]
  },
  {
    title: "Lightweight Deep Learning-Assisted Intrusion Detection of Constrained IoT Devices through Optimized CNN-BiLSTM Networks",
    authors: ["Loho Christopher Dondo", "Buhari Bala Getso"],
    journal: "Skyline University Nigeria / Nottingham Trent University",
    status: "Submitted",
    year: "2025",
    type: "Journal Article",
    icon: FileText,
    color: "blue",
    tags: ["Deep Learning", "IoT Security", "CNN-BiLSTM", "Intrusion Detection"]
  },
  {
    title: "Adaptative Zero-Trust and AI-Enhanced Multi-Cloud Threat Detection",
    authors: ["Michael Okpala", "Loho Dondo Christopher"],
    journal: "Nottingham Trent University / Skyline University Nigeria",
    status: "Submitted",
    year: "2025",
    type: "Journal Article",
    icon: FileText,
    color: "purple",
    tags: ["Zero-Trust", "AI Security", "Multi-Cloud", "Threat Detection"]
  },
  {
    title: "A Multi-Stage Stochastic Optimization Model for Opportunistic Maintenance of Vintage Pipeline Systems",
    authors: ["Loho Dondo Christopher", "Prof. Bashir M. Yakasai"],
    journal: "Skyline University Nigeria",
    status: "Working Paper",
    year: "2025-2026",
    type: "Working Paper",
    icon: BookOpen,
    color: "emerald",
    tags: ["Stochastic Optimization", "Maintenance", "Pipeline Systems"]
  },
  {
    title: "A Computational and Statistical Learning Framework for AI-Driven Hematologic Oncology: From Morphological Signals to Multi-Omics Integration",
    authors: ["Mustapha Abdulsalam", "Loho Dondo Christopher"],
    journal: "Skyline University Nigeria",
    status: "Working Paper",
    year: "2025-2026",
    type: "Working Paper",
    icon: BookOpen,
    color: "blue",
    tags: ["Computational Biology", "Hematologic Oncology", "Multi-Omics", "AI in Healthcare"]
  },
  {
    title: "Evolution of Yahoo Yahoo (Online Fraud) in Nigeria",
    authors: ["Ahmad Abdulhameed Aliyu", "Loho Dondo Christopher"],
    journal: "Nottingham Trent University / Skyline University Nigeria",
    status: "Submitted",
    year: "2025",
    type: "Submitted Article",
    icon: BookOpen,
    color: "purple",
    tags: ["Cyber Fraud", "Nigeria", "Online Security"]
  }
];

// Conference Presentations
const conferences = [
  {
    name: "ICONDACOM International Conference 2025",
    role: "Presenter",
    topic: "Weibull-Modulated Delay Time Analysis for Pipeline Risk Assessment",
    date: "June 2025",
    location: "Kano, Nigeria"
  },
  {
    name: "College Postgraduate Workshop 2026",
    role: "Facilitator",
    topic: "ICT Tools for Postgraduate Research Success",
    date: "February 2026",
    location: "Bayero University, Kano"
  }
];

// Technical Workflow - Research Tools
const techStack = [
  {
    name: "Mathematical Modeling",
    description: "Stochastic processes, renewal-reward theory, delay time models, and reliability engineering for infrastructure systems.",
    icon: Brain,
    color: "emerald",
    features: ["Renewal Theory", "Stochastic Optimization", "Weibull Analysis"]
  },
  {
    name: "Deep Learning & AI",
    description: "CNN-BiLSTM networks for intrusion detection, LLM integration for security patterns, and AI-driven healthcare analytics.",
    icon: Code,
    color: "blue",
    features: ["CNN-BiLSTM", "LLM Integration", "Pattern Recognition"]
  },
  {
    name: "Cybersecurity Research",
    description: "Zero-trust architecture, AI-enhanced threat detection, IoT security, and cyber fraud analysis.",
    icon: Shield,
    color: "purple",
    features: ["Zero-Trust", "Threat Detection", "IoT Security"]
  }
];

// Research Collaborators - Comprehensive List
const collaborators = [
  {
    name: "Prof. Bashir M. Yakasai",
    role: "Ph.D. Supervisor & Co-author",
    institution: "Department of Mathematics, Bayero University Kano",
    specialization: "Stochastic processes, renewal theory, reliability engineering",
    publications: 1,
    icon: GraduationCap,
    color: "emerald"
  },
  {
    name: "Buhari Bala Getso",
    role: "Research Collaborator & Co-author",
    institution: "Nottingham Trent University, UK",
    specialization: "Deep learning, IoT security, intrusion detection systems",
    publications: 1,
    icon: Users,
    color: "blue"
  },
  {
    name: "Michael Okpala",
    role: "Research Collaborator & Co-author",
    institution: "Nottingham Trent University, UK",
    specialization: "Zero-trust architecture, AI threat detection, cloud security",
    publications: 1,
    icon: Shield,
    color: "purple"
  },
  {
    name: "Mustapha Abdulsalam",
    role: "Research Collaborator & Co-author",
    institution: "Department of Computational Biology, Skyline University Nigeria",
    specialization: "Computational biology, hematologic oncology, multi-omics integration",
    publications: 1,
    icon: Brain,
    color: "emerald"
  },
  {
    name: "Waziri Mohammad Yusuf",
    role: "Research Co-author",
    institution: "Department of Mathematics, Bayero University Kano",
    specialization: "Mathematical modeling, reliability engineering, optimization",
    publications: 1,
    icon: GraduationCap,
    color: "blue"
  }
];

// Research Focus Areas
const focusAreas = [
  { name: "Renewal & Delay Time Theory", description: "Stochastic models for infrastructure reliability", color: "emerald" },
  { name: "Industrial Reliability", description: "Pipeline optimization and maintenance", color: "blue" },
  { name: "AI & Cybersecurity", description: "Deep learning for threat detection", color: "purple" }
];

export function Research() {
  return (
    <section id="research" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Research & <span className="text-emerald-400">Publications</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Advancing knowledge in stochastic processes, reliability engineering, and AI-driven security
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">{publications.length} Research Publications | 5+ Collaborators</span>
          </div>
        </motion.div>

        {/* Professional Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-white">
            <Clock className="w-6 h-6 text-emerald-400" />
            Academic & Professional Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const colorClasses = {
                emerald: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/50",
                blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/50",
                purple: "from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/50"
              };
              
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colorClasses[event.color as keyof typeof colorClasses]} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-emerald-400/50 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-emerald-400 mb-1">{event.year}</div>
                      <h4 className="text-lg font-semibold mb-1 text-white">{event.title}</h4>
                      <p className="text-sm text-slate-300 mb-2">{event.institution}</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{event.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {event.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-800/50 text-xs text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Publications Section - Main Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-white">
            <FileText className="w-6 h-6 text-emerald-400" />
            Publications & Working Papers
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => {
              const Icon = pub.icon;
              const colorClasses = {
                emerald: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/50",
                blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/50",
                purple: "from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/50"
              };
              
              return (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colorClasses[pub.color as keyof typeof colorClasses]} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
                >
                  <Icon className="w-8 h-8 mb-3 text-emerald-400" />
                  <h4 className="text-base font-semibold mb-2 text-white leading-relaxed">{pub.title}</h4>
                  <p className="text-xs text-emerald-400 mb-2 font-mono">
                    {pub.authors.slice(0, 3).join(", ")}{pub.authors.length > 3 ? " et al." : ""}
                  </p>
                  <p className="text-sm text-slate-300 mb-2">{pub.journal}</p>
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {pub.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-800/50 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-700/50">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      pub.status === "Under Review" ? "bg-amber-500/10 text-amber-400" :
                      pub.status === "Submitted" ? "bg-emerald-500/10 text-emerald-400" :
                      "bg-blue-500/10 text-blue-400"
                    }`}>
                      {pub.status}
                    </span>
                    <span className="text-xs text-slate-400">{pub.year} • {pub.type}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Conference Presentations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-white">
            <Presentation className="w-6 h-6 text-emerald-400" />
            Conference Presentations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {conferences.map((conf, index) => (
              <motion.div
                key={conf.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <Presentation className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{conf.name}</h4>
                    <p className="text-sm text-emerald-400 mb-1">{conf.role}</p>
                    <p className="text-sm text-slate-300 mb-2">{conf.topic}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {conf.date}
                      </span>
                      <span>{conf.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Collaborators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-white">
            <HeartHandshake className="w-6 h-6 text-emerald-400" />
            Research Collaborators
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((collab, index) => {
              const Icon = collab.icon;
              const colorClasses = {
                emerald: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/50",
                blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/50",
                purple: "from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/50"
              };
              
              return (
                <motion.div
                  key={collab.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${colorClasses[collab.color as keyof typeof colorClasses]} p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-0.5">{collab.name}</h4>
                      <p className="text-xs text-emerald-400 mb-1">{collab.role}</p>
                      <p className="text-xs text-slate-400 mb-2">{collab.institution}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{collab.specialization}</p>
                      {collab.publications && (
                        <div className="mt-2 pt-2 border-t border-slate-700/50">
                          <span className="text-xs text-slate-400">{collab.publications} joint publication(s)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-white">
            <Brain className="w-6 h-6 text-emerald-400" />
            Research Methods & Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              const colorClasses = {
                emerald: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 group-hover:border-emerald-400/50",
                blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20 group-hover:border-blue-400/50",
                purple: "from-purple-500/10 to-purple-600/5 border-purple-500/20 group-hover:border-purple-400/50"
              };
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colorClasses[tech.color as keyof typeof colorClasses]} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
                >
                  <Icon className="w-10 h-10 mb-3 text-emerald-400" />
                  <h4 className="text-lg font-semibold mb-2 text-white">{tech.name}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">{tech.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.features.map((feature) => (
                      <span key={feature} className="px-2 py-0.5 rounded-full bg-slate-800/50 text-xs text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Focus Areas Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-slate-800"
        >
          {focusAreas.map((area) => {
            const colorClasses = {
              emerald: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
              blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
              purple: "bg-purple-500/10 border-purple-500/20 text-purple-400"
            };
            
            return (
              <div
                key={area.name}
                className={`flex flex-col items-center gap-1 px-5 py-3 rounded-xl border ${colorClasses[area.color as keyof typeof colorClasses]}`}
              >
                <span className="text-sm font-semibold text-white">{area.name}</span>
                <span className="text-xs text-slate-300">{area.description}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}