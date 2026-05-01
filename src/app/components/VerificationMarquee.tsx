import { motion } from "motion/react";
import { Award, Shield, Code, Eye, X, Verified, Calendar, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Type definition for certification
interface Certification {
  name: string;
  issuer: string;
  icon: typeof Award | typeof Shield | typeof Code;
  certificateId?: string;
  verificationUrl?: string;
  imageUrl?: string;
  date?: string;
  award?: string;
  awardDescription?: string;
}

const certifications: Certification[] = [
  {
    name: "3MTT Cybersecurity Programme",
    issuer: "Federal Ministry of Communications, Nigeria",
    icon: Shield,
    certificateId: "FE/23/46127319",
    imageUrl: "/certificates/3mtt-cert.jpeg",
    date: "December 2025"
  },
  {
    name: "ALX Software Engineering",
    issuer: "ALX Africa",
    icon: Code,
    certificateId: "EM028",
    imageUrl: "/certificates/alx.jpeg",
    date: "April 2026"
  },
  {
    name: "Cybersecurity VAPT Internship",
    issuer: "KLEMWEB",
    icon: Shield,
    imageUrl: "/certificates/clemweb.jpeg",
    date: "August 2025"
  },
  {
    name: "Web Development",
    issuer: "CWW Tech Africa",
    icon: Code,
    imageUrl: "/certificates/cww-tech.jpeg",
    date: "August 2024"
  },
 {
    name: "Web & Software Development",
    issuer: "eHealth Africa Academy",
    icon: Code,
    imageUrl: "/certificates/eha.jpeg",  
    date: "December 2025"
  },
  {
    name: "Best Project (Software) Award",  
    issuer: "eHealth Africa Academy",
    icon: Award,  
    imageUrl: "/certificates/eha-award.jpeg",  
    award: " Outstanding Achievement",
    awardDescription: "Recognized for outstanding software project demonstrating innovation, technical skill, and commitment to excellence",
    date: "December 2025"
  },
  
  {
    name: "Data Visualization",
    issuer: "Excelerate & Saint Louis University",
    icon: Award,
    imageUrl: "/certificates/excelerate.jpeg",
    date: "October 2024"
  },
  
  {
    name: "Front-End Development with React",
    issuer: "IBM & Coursera",
    icon: Code,
    imageUrl: "/certificates/ibm-react.jpeg",
    date: "August 2025"
  },
  {
    name: "Back-End Development with Node.js",
    issuer: "IBM & Coursera",
    icon: Code,
    imageUrl: "/certificates/ibm-nodejs.jpeg",
    date: "August 2025"
  },
  {
    name: "ICT Tools for Research",
    issuer: "Bayero University, Kano",
    icon: Award,
    imageUrl: "/certificates/workshop.png",
    date: "February 2026"
  }
];

export function VerificationMarquee() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Triple the certificates for seamless infinite scroll
  const infiniteCerts = [...certifications, ...certifications, ...certifications];

  useEffect(() => {
    if (contentRef.current && marqueeRef.current) {
      const scrollWidth = contentRef.current.scrollWidth / 3; // Width of one set
      setMarqueeWidth(scrollWidth);
    }
  }, []);

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Modal for viewing certificate */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-label="Certificate viewer"
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close certificate viewer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-6 overflow-y-auto max-h-[90vh]">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{selectedCert.name}</h3>
                <p className="text-emerald-400 text-sm">{selectedCert.issuer}</p>
                {selectedCert.date && (
                  <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Completed: {selectedCert.date}</span>
                  </div>
                )}
              </div>
              
              {selectedCert.imageUrl && (
                <div className="mt-4">
                  <img
                    src={selectedCert.imageUrl}
                    alt={`${selectedCert.name} certificate`}
                    className="w-full h-auto rounded-lg border border-slate-700"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error(`Failed to load: ${target.src}`);
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              
              {selectedCert.verificationUrl && (
                <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                  <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                    <Verified className="w-4 h-4 text-emerald-400" />
                    Verify authenticity:
                  </p>
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-sm break-all inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {selectedCert.verificationUrl}
                  </a>
                </div>
              )}
              
              {selectedCert.certificateId && (
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-xs text-slate-500">
                    Certificate ID: <span className="font-mono text-slate-400">{selectedCert.certificateId}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-2">
            Professional <span className="text-emerald-400">Certifications</span>
          </h2>
          <p className="text-sm text-slate-400">
            Click any credential to view or verify
          </p>
        </motion.div>
      </div>

      <div className="relative" ref={marqueeRef}>
        <div className="overflow-hidden">
          <motion.div
            ref={contentRef}
            animate={{
              x: [0, -marqueeWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-6"
            style={{ width: "max-content" }}
          >
            {infiniteCerts.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <button
                  key={`${cert.name}-${index}`}
                  onClick={() => setSelectedCert(cert)}
                  className="flex-shrink-0 group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-xl"
                  style={{ width: "320px" }}
                  aria-label={`View certificate: ${cert.name}`}
                  title={`Click to view ${cert.name} certificate`}
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-700 group-hover:border-emerald-400/50 transition-all duration-300 p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-emerald-400/50 transition-all duration-300">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                          {cert.name}
                        </h3>
                        <p className="text-xs text-slate-400">{cert.issuer}</p>
                        {cert.date && (
                          <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
                        )}
                        {cert.award && (
                          <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400">
                            {cert.award}
                          </span>
                        )}
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-700/50">
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        Click to view certificate
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-400">
            {certifications.length} Verified Certifications | Industry Recognized
          </span>
        </div>
      </div>
    </section>
  );
}