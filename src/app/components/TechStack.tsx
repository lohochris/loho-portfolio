import { motion } from "motion/react";

const partners = [
  { name: "Bayero University Kano", abbr: "BUK" },
  { name: "Skyline University Nigeria", abbr: "SUN" },
  { name: "3MTT Nigeria", abbr: "3MTT" },
  { name: "Nottingham Trent University", abbr: "NTU" },
  { name: "IBM", abbr: "IBM" },
  { name: "ALX Africa", abbr: "ALX" },
  { name: "e-Health Academy", abbr: "e-HA" },
  { name: "University of Agriculture Makurdi", abbr: "UAM" },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Django", "FastAPI", "PostgreSQL"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain", "OpenAI API"],
  },
  {
    category: "Security",
    items: ["OWASP", "JWT", "OAuth 2.0", "Penetration Testing", "Threat Modeling"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Git", "GitHub Actions", "Vercel", "Railway"],
  },
  {
    category: "Mathematics",
    items: ["R", "MATLAB", "NumPy", "SciPy", "Stochastic Processes"],
  },
];

export function TechStack() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Technology <span className="text-emerald-400">Stack</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Full-stack engineering with mathematical rigor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-lg mb-4 text-emerald-400">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-sm text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl text-center mb-8">
            Institutional <span className="text-emerald-400">Partners</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 group-hover:border-emerald-400/50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center p-4">
                    <div className="text-2xl font-mono text-slate-400 group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                      {partner.abbr}
                    </div>
                    <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
