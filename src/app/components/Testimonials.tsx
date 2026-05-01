import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

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
  
  // Triple the testimonials for seamless marquee
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  // Calculate total width for animation
  const cardWidth = 396; // 380px card + 16px gap
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
          <h2 className="text-4xl md:text-5xl mb-4">
            What <span className="text-emerald-400">Colleagues Say</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Testimonials from academic peers, research collaborators, mentors, and students
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20">
            <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span className="text-sm text-emerald-400">{testimonials.length} Professional Recommendations</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee Container */}
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
                <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 p-6 backdrop-blur-sm group flex flex-col">
                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-400/20 group-hover:text-emerald-400/30 transition-colors duration-300" />
                  
                  {/* Relationship badge */}
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-xs text-emerald-400 mb-4 w-fit">
                    {testimonial.relationship}
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial content - PROFESSIONAL JUSTIFIED TEXT ALIGNMENT */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-slate-300 leading-relaxed mb-6 italic text-sm text-left">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Author info - always at bottom with left alignment */}
                  <div className="border-t border-slate-700/50 pt-4 mt-auto">
                    <p className="font-semibold text-emerald-400 text-left">{testimonial.name}</p>
                    <p className="text-sm text-slate-400 text-left">{testimonial.role}</p>
                    <p className="text-xs text-slate-500 text-left">{testimonial.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for fading effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
      </div>
      
      {/* Pause indicator - shows when hovered */}
      {isPaused && (
        <div className="text-center mt-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 text-xs text-slate-400">
            ⏸️ Paused • Move mouse to resume scrolling
          </span>
        </div>
      )}
    </section>
  );
}