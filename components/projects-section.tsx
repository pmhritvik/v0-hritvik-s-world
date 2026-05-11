"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Gurukul by Golden Globe",
    role: "Product & Marketing Consultant",
    date: "Sep 2024 – Feb 2025",
    category: "EdTech",
    description: "Re-architected product roadmap using Agile workflows and a defined North Star metric; drove VOC research and competitive analysis, tripling qualified leads within five months.",
  },
  {
    title: "Cubical SEO — Ludo Gaming App",
    role: "Product Strategy Consultant",
    date: "Jan 2023 – Aug 2023",
    category: "Gaming",
    description: "Led product strategy using Design Thinking and AARRR funnel analysis; identified engagement gaps and improved retention by 34% through gamification and feature optimization. App has 1.2M+ users.",
  },
  {
    title: "The Startup Guy",
    role: "Digital Product Strategist",
    date: "Dec 2021 – Jun 2023",
    category: "Digital Media",
    description: "Owned roadmap in Asana with OKR-led Agile sprints; leveraged Google Analytics and Meta Business Suite dashboards to scale the platform to 800+ entrepreneurs and drive 3× growth in digital reach.",
  },
  {
    title: "WebVeda — How to Instagram",
    role: "Course Co-Developer",
    date: "Nov 2021 – May 2022",
    category: "Creator Economy",
    description: "Co-developed course product with Ankur Warikoo's team (5M+ YouTube subscribers); applied MoSCoW prioritization to manage roadmap decisions and improve learner engagement. 460K+ learners enrolled.",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-16 scroll-mt-24" id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Projects
        </span>
        
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full shrink-0">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm font-mono text-muted-foreground">
                  {project.date}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
