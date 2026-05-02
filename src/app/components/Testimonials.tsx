import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Mai Marta Ajayi",
    role: "Former Dean, SAMSS",
    institution: "Skyline University Nigeria",
    content: "Christopher is a rare gem in academia. His ability to translate complex mathematical concepts into engaging lectures is exceptional. He brings both theoretical rigor and practical relevance to every classroom. His dedication to student success and innovative teaching methods have significantly improved our department's mathematics pass rates.",
    rating: 5,
    relationship: "Colleague"
  },
  {
    id: 2,
    name: "Prof. Bashir M. Yakasai",
    role: "PhD Supervisor",
    institution: "Department of Mathematics, Bayero University, Kano",
    content: "Mr. Dondo demonstrates outstanding research capacity in Applied Stochastic Processes. His work on Renewal Reward Theory and infrastructure reliability shows exceptional mathematical maturity. He independently develops sophisticated models while remaining receptive to scholarly critique, hallmarks of a successful doctoral researcher.",
    rating: 5,
    relationship: "Supervisor"
  },
  {
    id: 3,
    name: "Ageebee Silas Faki",
    role: "Associate Professor (Cybersecurity)",
    institution: "Nigerian University of Technology and Management (NUTM), Apapa",
    content: "As his mentor in cybersecurity, I have watched Christopher develop into a formidable security researcher. His unique background in mathematics gives him an edge in threat modeling and risk quantification. He bridges the gap between theoretical security frameworks and practical implementation seamlessly.",
    rating: 5,
    relationship: "Mentor"
  },
  {
    id: 4,
    name: "Daniel Abbah",
    role: "Software Engineering Mentor",
    institution: "eHealth Africa Academy",
    content: "Christopher's software engineering journey has been remarkable. From foundational concepts to building production grade applications, he consistently demonstrates curiosity, resilience, and clean code practices. His ability to learn rapidly and implement complex features independently sets him apart from his peers.",
    rating: 5,
    relationship: "Mentor"
  },
  {
    id: 5,
    name: "Michael Akpala",
    role: "Project Collaborator",
    institution: "Nottingham Trent University, UK",
    content: "Working with Christopher on the Billy AI cyberbullying support platform was transformative. He understood the sensitive nature of the project and delivered a solution that balances technical sophistication with compassionate user experience. His AI implementation using Protection Motivation Theory was brilliant.",
    rating: 5,
    relationship: "Collaborator"
  },
  {
    id: 6,
    name: "Buhari Getso",
    role: "Project Collaborator",
    institution: "Nottingham Trent University, UK",
    content: "Christopher architected our Footprint Manager platform with exceptional skill. His understanding of UK privacy regulations, edge computing, and user centered design resulted in a tool that serves over 200 beta users. He is the rare developer who understands both the mathematics of risk and the psychology of privacy.",
    rating: 5,
    relationship: "Collaborator"
  },
  {
    id: 7,
    name: "Mrs. Folashade Fashikin",
    role: "Colleague",
    institution: "Skyline University Nigeria",
    content: "Working alongside Christopher in the mathematics department has been inspiring. He brings energy, innovation, and genuine care for students to every faculty meeting and course coordination. His interdisciplinary approach, connecting mathematics to software and security, has influenced how I teach my own courses.",
    rating: 5,
    relationship: "Colleague"
  },
  {
    id: 8,
    name: "Shehu Usman",
    role: "Former Student",
    institution: "Computer Science, Skyline University Nigeria",
    content: "Mr. Loho made mathematics accessible and exciting. His teaching style breaks down complex calculus and linear algebra concepts into digestible pieces. He genuinely cares about his students' understanding and goes beyond the syllabus to show real world applications. He is the best mathematics lecturer I have had.",
    rating: 5,
    relationship: "Student"
  },
  {
    id: 9,
    name: "Fatimal Nihal",
    role: "Former Student",
    institution: "Software Engineering, Skyline University Nigeria",
    content: "Professor Dondo transformed how I view mathematics. He connects abstract theories directly to programming and cybersecurity applications. His patience, clarity, and willingness to provide extra support made all the difference in my academic journey. I now apply his lessons daily as a software engineer.",
    rating: 5,
    relationship: "Student"
  },
  {
    id: 10,
    name: "Abdulazeez Adesina",
    role: "Former Student",
    institution: "Skyline University Nigeria",
    content: "Christopher's mathematics classes were challenging but rewarding. He has a unique gift for identifying when a student is struggling and providing exactly the right guidance. His real world examples from engineering and finance made mathematics come alive. I am forever grateful for his mentorship.",
    rating: 5,
    relationship: "Student"
  }
];

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // For mobile: show static grid instead of marquee
  if (isMobile) {
    return (
      <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-3 text-white">
              What <span className="text-emerald-400">Colleagues Say</span>
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto px-4">
              Testimonials from academic peers, research collaborators, mentors, and students
            </p>
            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
              <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              <span className="text-xs text-emerald-400">{testimonials.length}Recommendations</span>
            </div>
          </motion.div>
        </div>

        {/* Mobile Grid Layout - 1 column */}
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border transition-all duration-300 p-4 ${
                activeIndex === index ? 'border-emerald-400/50' : 'border-slate-700/50'
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between flex-wrap gap-1 mb-1">
                    <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400">
                      {testimonial.relationship}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{testimonial.role}</p>
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{testimonial.content.substring(0, 150)}..."
                  </p>
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="mt-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {activeIndex === index ? 'Show less' : 'Read more'}
                  </button>
                  
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2 pt-2 border-t border-slate-700/50"
                    >
                      <p className="text-xs text-slate-300 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      <p className="text-[10px] text-slate-500 mt-2">{testimonial.institution}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile instruction */}
        <div className="text-center mt-6">
          <p className="text-[10px] text-slate-500">
            👆 Tap "Read more" to see full testimonial
          </p>
        </div>
      </section>
    );
  }

  // Desktop Marquee View
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const cardWidth = 396;
  const totalWidth = testimonials.length * cardWidth;

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            What <span className="text-emerald-400">Colleagues Say</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Testimonials from academic peers, research collaborators, mentors, and students
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20">
            <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span className="text-sm text-emerald-400">{testimonials.length}  Recommendations</span>
          </div>
        </motion.div>
      </div>

      {/* Desktop Marquee Container */}
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            animate={isPaused ? {} : {
              x: [0, -totalWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 240,
                ease: "linear",
              },
            }}
            className="flex gap-4"
            style={{ width: "max-content" }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: "380px" }}
              >
                <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 p-5 backdrop-blur-sm group flex flex-col">
                  {/* Quote icon */}
                  <Quote className="absolute top-3 right-3 w-6 h-6 text-emerald-400/20 group-hover:text-emerald-400/30 transition-colors duration-300" />
                  
                  {/* Relationship badge */}
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-xs text-emerald-400 mb-3 w-fit">
                    {testimonial.relationship}
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-slate-200 leading-relaxed mb-4 italic text-sm text-left line-clamp-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Author info */}
                  <div className="border-t border-slate-700/50 pt-3 mt-auto">
                    <p className="font-semibold text-emerald-400 text-left text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-300 text-left">{testimonial.role}</p>
                    <p className="text-[10px] text-slate-400 text-left">{testimonial.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
      </div>
      
      {/* Pause indicator */}
      {isPaused && (
        <div className="text-center mt-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 text-xs text-slate-300">
            ⏸️ Paused • Move mouse to resume scrolling
          </span>
        </div>
      )}
    </section>
  );
}