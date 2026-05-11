"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Product & Strategy",
    skills: ["Roadmapping", "OKRs", "North Star Metrics", "RICE", "MoSCoW", "JTBD", "PRDs", "AARRR", "A/B Testing", "GTM", "Pricing Strategy", "Competitive Analysis", "VOC Research", "Design Thinking", "Lean"],
  },
  {
    category: "Tools",
    skills: ["Jira", "Asana", "Notion", "Productboard", "Confluence", "Figma", "Miro", "HubSpot", "Salesforce", "Pendo", "Hotjar"],
  },
  {
    category: "Data & Analytics",
    skills: ["SQL", "Tableau", "Power BI", "Google Analytics", "Cohort Analysis"],
  },
  {
    category: "Technical",
    skills: ["Python (Basic)", "HTML/CSS", "API Integrations", "AI & Automation Tools"],
  },
]

export function SkillsSection() {
  return (
    <section className="py-16 scroll-mt-24" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Skills & Tools
        </span>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-medium text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-card border border-border text-muted-foreground rounded-full hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
