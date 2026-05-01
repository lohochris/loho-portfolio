import { motion } from "framer-motion";

const photos = [
  {
    url: "/images/gallery/lecturing.jpeg",
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
          <h2 className="text-4xl md:text-5xl mb-4">
            In <span className="text-emerald-400">Action</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From lecture halls to international conferences — shaping the future of mathematics, software, and cybersecurity
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20">
            <span className="text-xs text-emerald-400"> {photos.length} Moments Captured</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-slate-900/40 to-slate-950/80 backdrop-blur-[2px] border border-slate-700/50 group-hover:border-emerald-400/50 transition-all duration-500 rounded-xl z-10" />

              {/* Image */}
              <img
                src={photo.url}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                loading="lazy"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
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
                  <p className="text-xs text-slate-200 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-5 left-5 right-5 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mb-2" />
              </div>

              {/* Live indicator dot */}
              <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="relative">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping absolute" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 relative" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}