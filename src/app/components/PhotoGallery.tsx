import { motion } from "framer-motion";
import { useState } from "react";

const photos = [
  {
    url: "/images/gallery/lecturing.png",
    caption: "Advanced Mathematics Lecture",
    description: "Delivering lectures on stochastic processes and renewal theory at Skyline University Nigeria, engaging students with real-world applications.",
    tags: ["Mathematics", "Education", "Lecturer"]
  },
  {
    url: "/images/gallery/research-seminar.jpeg",
    caption: "Ph.D. Research Seminar",
    description: "Presenting doctoral research on infrastructure resilience optimization using renewal-reward theory and Weibull modeling.",
    tags: ["Research", "Stochastic Processes", "PhD"]
  },
  {
    url: "/images/gallery/3mtt-challenge.jpeg",
    caption: "3MTT National Impact Challenge",
    description: "Representing the Federal Government's 3MTT Initiative as a Cybersecurity fellow, driving digital innovation and security awareness.",
    tags: ["Cybersecurity", "Fellowship", "3MTT"]
  },
  {
    url: "/images/gallery/tech-mentorship.jpeg",
    caption: "Tech Leadership & Mentorship",
    description: "Guiding and mentoring next-generation software engineers and cybersecurity researchers across Nigeria.",
    tags: ["Mentorship", "Leadership", "Community"]
  },
  {
    url: "/images/gallery/lecturing.jpeg",
    caption: "Privacy-Preserving AI Research",
    description: "Developing secure AI systems for digital footprint analysis, threat detection, and privacy-first infrastructure.",
    tags: ["AI", "Cybersecurity", "Research"]
  },
  {
    url: "/images/gallery/conference-talk.jpeg",
    caption: "International Conference Presentation",
    description: "Presenting research on Weibull-Modulated Delay Time Analysis for pipeline risk assessment at ICONDACOM 2025.",
    tags: ["Conference", "Publication", "Speaker"]
  },
  {
    url: "/images/gallery/college_seminar.jpeg",
    caption: "College Postgraduate Workshop",
    description: "Attending postgraduate training on ICT tools for research success at Bayero University, Kano.",
    tags: ["Workshop", "Training", "Academics"]
  },
  {
    url: "/images/gallery/software_testing.jpeg",
    caption: "Software Quality Assurance",
    description: "Conducting rigorous software testing and VAPT (Vulnerability Assessment & Penetration Testing) for production applications.",
    tags: ["Software Testing", "VAPT", "Quality Assurance"]
  }
];

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="gallery" className="py-24 px-6 relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            In <span className="text-emerald-400">Action</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From lecture halls to international conferences — shaping the future of mathematics, software, and cybersecurity
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20">
            <span className="text-xs text-emerald-400">{photos.length} Moments Captured</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer ${
                  isActive ? 'ring-2 ring-emerald-400' : ''
                }`}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Glass overlay - changes on active/hover */}
                <div className={`absolute inset-0 bg-gradient-to-b from-slate-800/20 via-slate-900/40 to-slate-950/80 backdrop-blur-[2px] border border-slate-700/50 transition-all duration-500 rounded-xl z-10 ${
                  isActive ? 'border-emerald-400/50' : 'group-hover:border-emerald-400/50'
                }`} />

                {/* Image - REMOVED grayscale, now bright and clear */}
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Content overlay - visible on active/hover */}
                <div className={`absolute inset-0 z-20 p-5 flex flex-col justify-end transition-all duration-500 ${
                  isActive ? 'translate-y-0' : 'translate-y-2'
                }`}>
                  <div className={`transition-all duration-500 ${
                    isActive ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {photo.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-base font-bold mb-1 text-white drop-shadow-lg">
                      {photo.caption}
                    </h3>
                    <p className={`text-xs text-slate-200 drop-shadow-lg leading-relaxed transition-opacity duration-500 delay-100 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {photo.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className={`absolute bottom-5 left-5 right-5 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Live indicator dot - visible on active/hover */}
                <div className={`absolute top-3 right-3 z-30 transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="relative">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping absolute" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 relative" />
                  </div>
                </div>

                {/* Mobile instruction hint */}
                <div className="absolute bottom-3 left-3 z-30 md:hidden">
                  <div className={`text-[10px] text-white/50 bg-black/50 px-2 py-0.5 rounded-full transition-opacity duration-300 ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}>
                    Tap to view
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile instruction footer */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-xs text-slate-400">
            👆 Tap on any image to see details
          </p>
        </div>
      </div>
    </section>
  );
}