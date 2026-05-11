"use client"

import { motion } from "framer-motion"

const education = [
  {
    school: "University of Washington",
    degree: "MS, Information Management",
    date: "Sep 2025 – Aug 2026 (Expected)",
    location: "Seattle, WA",
    logo: "UW",
    description: "Specialization in AI and Product/Program Management & Consulting.",
  },
  {
    school: "NMIMS",
    degree: "MBA, Business and Marketing Management",
    date: "Jan 2021 – Dec 2023",
    location: "Mumbai, India",
    logo: "NM",
    description: "",
  },
  {
    school: "Indian School of Business (ISB)",
    degree: "Certificate in Product Management",
    date: "",
    location: "Hyderabad, India",
    logo: "ISB",
    description: "",
  },
]

export function EducationSection() {
  return (
    <section className="py-16 scroll-mt-24" id="education">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Education
        </span>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Logo */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-sm font-mono text-primary shrink-0">
                  {edu.logo}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.school} · {edu.location}
                      </p>
                    </div>
                    {edu.date && (
                      <span className="text-sm text-muted-foreground font-mono">
                        {edu.date}
                      </span>
                    )}
                  </div>
                  
                  {edu.description && (
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
