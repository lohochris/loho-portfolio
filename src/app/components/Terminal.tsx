import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon } from "lucide-react";

interface CommandOutput {
  command: string;
  output: string[];
}

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help      - Show this help message",
    "  cv        - Download CV/Resume",
    "  projects  - List all projects",
    "  about     - About Loho Christopher Dondo",
    "  contact   - Get contact information",
    "  skills    - List technical skills",
    "  clear     - Clear terminal",
  ],
  cv: [
    "📄 CV Options:",
    "  1. Academic CV: /Academic_CV.pdf",
    "  2. Technical Resume: /Tech_Resume.pdf",
    "Opening download links...",
  ],
  projects: [
    "🚀 Featured Projects:",
    "  1. Footprint Manager - GDPR Privacy Audit Platform",
    "  2. CyberGuard - Proactive Security & Threat Detection",
    "  3. Cybersafe Nigeria - Security Awareness Platform",
    "  4. MediFlow - AI-Driven Clinical Triage System",
    "  5. SUNMAC - Academic Conference Management",
    "Visit the Projects section for live demos.",
  ],
  about: [
    "Loho Christopher Dondo",
    "Ph.D. Candidate in Applied Mathematics | Assistant Lecturer",
    "3MTT National Impact Challenge Fellow",
    "",
    "Bridging theoretical mathematics and production systems",
    "to build resilient, privacy-first digital infrastructure.",
  ],
  contact: [
    "📧 Contact Information:",
    "  Email: lohodondo@example.com",
    "  LinkedIn: linkedin.com/in/lohodondo",
    "  GitHub: github.com/lohodondo",
    "  Location: Nigeria",
  ],
  skills: [
    "💻 Technical Stack:",
    "  Frontend: React, TypeScript, Tailwind CSS, Next.js",
    "  Backend: Node.js, Python, Django, FastAPI",
    "  AI/ML: TensorFlow, PyTorch, LangChain, Claude API",
    "  Security: OWASP, Penetration Testing, GDPR Compliance",
    "  Mathematics: R, MATLAB, Stochastic Processes",
  ],
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: [
        "Welcome to Loho's Interactive Terminal",
        "Type 'help' for available commands",
        "",
      ],
    },
  ]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "") {
      return;
    }

    const output = commands[trimmedCmd] || [
      `Command not found: ${trimmedCmd}`,
      "Type 'help' for available commands.",
    ];

    setHistory((prev) => [...prev, { command: cmd, output }]);

    if (trimmedCmd === "cv") {
      setTimeout(() => {
        window.open("/Academic_CV.pdf", "_blank");
        window.open("/Tech_Resume.pdf", "_blank");
      }, 500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
    setCommandIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandIndex < history.length - 1) {
        const newIndex = commandIndex + 1;
        setCommandIndex(newIndex);
        setInput(history[history.length - 1 - newIndex].command);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandIndex > 0) {
        const newIndex = commandIndex - 1;
        setCommandIndex(newIndex);
        setInput(history[history.length - 1 - newIndex].command);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8"
    >
      <div className="rounded-xl bg-slate-950 border border-slate-700 overflow-hidden backdrop-blur-sm shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 flex-1 justify-center">
            <TerminalIcon className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-400 font-mono">loho@portfolio:~</span>
          </div>
        </div>

        <div
          ref={terminalRef}
          className="p-4 h-64 overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry, idx) => (
            <div key={idx} className="mb-3">
              {entry.command !== "welcome" && (
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>$</span>
                  <span>{entry.command}</span>
                </div>
              )}
              <div className="text-slate-300 mt-1">
                {entry.output.map((line, lineIdx) => (
                  <div key={lineIdx} className="leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-emerald-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-slate-300"
              placeholder="Type a command..."
              autoComplete="off"
            />
          </form>
        </div>
      </div>

      <div className="mt-3 text-xs text-slate-500 text-center font-mono">
        Press ↑/↓ to navigate command history
      </div>
    </motion.div>
  );
}
