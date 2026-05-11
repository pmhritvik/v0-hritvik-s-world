"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "SKG Real Estate Developers LLP",
    role: "Head of Product",
    date: "Jul 2023 – Sep 2025",
    location: "Remote",
    logo: "SKG",
    description: [
      "Owned product strategy and roadmap for a tech-enabled real estate platform; prioritized features using RICE and executed via Agile/Scrum in Jira, scaling active projects from 5 to 18 and reducing lifecycle by 28% through automation pipelines.",
      "Led cross-functional program execution across sales, engineering, and operations; built KPI dashboards in Tableau and leveraged SQL/Google Analytics to drive pricing strategy, GTM decisions, and stakeholder alignment, improving deal close rates by 22%.",
      "Launched AR/VR visualization tools and CRM integrations through competitive analysis and VOC research, driving 15% MoM lead growth.",
    ],
  },
  {
    company: "Edten Technologies LLP",
    role: "Senior Product Manager",
    date: "Sep 2019 – Jul 2023",
    location: "",
    logo: "ET",
    description: [
      "Defined product vision, North Star metrics, and OKRs for a B2B EdTech platform; scaled to 1,450+ preschools, 91,000+ students, and $465K ARR across 12+ feature launches.",
      "Translated insights from 200+ educator interviews (JTBD) into PRDs and Figma wireframes; prioritized via MoSCoW, accelerating sprint velocity by 3×.",
      "Ran AARRR funnel analysis, cohort tracking, Hotjar behavioral data, and Lean pricing experiments in Power BI, increasing conversion rates by 19% and improving user satisfaction by 35%.",
    ],
  },
  {
    company: "HR Biotech",
    role: "Product Manager",
    date: "Apr 2017 – Aug 2019",
    location: "",
    logo: "HRB",
    description: [
      "Owned end-to-end product lifecycle for 21 pharma products; scaled revenue from $64K to $285K (4.5×) through GTM execution, A/B pricing experiments, and stakeholder alignment across 12+ manufacturers.",
      "Managed a cross-functional risk register across a high-ambiguity, multi-vendor environment; applied Lean principles, reducing manufacturing cycle time by 50% and accelerating market adoption by 40%.",
      "Drove PMF through Design Thinking workshops and VOC discovery across physicians, researchers, and hospital networks.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-16 scroll-mt-24" id="experience">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Experience
        </span>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Logo */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-sm font-mono text-primary shrink-0">
                  {exp.logo}
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}{exp.location && ` · ${exp.location}`}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.date}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
