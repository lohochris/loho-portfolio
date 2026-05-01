import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Send, Loader2, CheckCircle2, Copy, Check } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "lohochris@gmail.com",
    displayText: "lohochris@gmail.com",
    href: "mailto:lohochris@gmail.com",
    color: "from-emerald-400 to-green-500",
    isExternal: false,
    canCopy: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Christopher Loho",
    displayText: "Christopher Loho",
    href: "https://www.linkedin.com/in/lohochristopher/",
    color: "from-blue-500 to-indigo-500",
    isExternal: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@lohochris",
    displayText: "@lohochris",
    href: "https://github.com/lohochris",
    color: "from-slate-400 to-slate-600",
    isExternal: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kano, Nigeria",
    displayText: "Kano, Nigeria (GMT+1)",
    href: null,
    color: "from-amber-400 to-orange-500",
    isExternal: false,
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(52,211,153,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight text-white">
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Available for research collaboration, full-stack consulting, or just a technical chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Details - Taking 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-slate-200 px-2">Reach Out Directly</h3>
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-400/30 hover:bg-slate-900/60 transition-all duration-300">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color} bg-opacity-10 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-0.5">{method.label}</p>
                      {method.href ? (
                        <a 
                          href={method.href} 
                          target={method.isExternal ? "_blank" : undefined} 
                          rel={method.isExternal ? "noopener noreferrer" : undefined}
                          className="text-slate-200 font-medium hover:text-emerald-400 transition-colors block truncate"
                        >
                          {method.displayText}
                        </a>
                      ) : (
                        <p className="text-slate-200 font-medium truncate">{method.displayText}</p>
                      )}
                    </div>

                    {method.canCopy && (
                      <button 
                        onClick={() => copyEmail(method.value)}
                        className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
                        title="Copy to clipboard"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form - Taking 3 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 rounded-[2rem] bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 outline-none transition-all text-slate-200"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 outline-none transition-all text-slate-200"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 outline-none resize-none transition-all text-slate-200"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`group w-full relative overflow-hidden px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-[0.2em] transition-all duration-500 ${
                    status === "success" 
                    ? "bg-emerald-500 text-white" 
                    : "bg-emerald-400 text-slate-950 hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    {status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Dispatched</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        <span>Initialize Contact</span>
                      </>
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {status === "error" && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-red-400 text-xs text-center font-medium"
                    >
                      Transmission failed. Please verify connection and retry.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}