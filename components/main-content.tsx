"use client"

import { motion } from "framer-motion"
import { Calendar, Building2, Star, MapPin } from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const projects = [
  {
    title: "Gurukul by Golden Globe",
    category: "EdTech",
    date: "Sep 2024 – Feb 2025",
    role: "Product & Marketing Consultant",
    description:
      "Re-architected roadmap with a defined North Star metric; drove VOC research and competitive analysis, tripling qualified leads in 5 months.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    glowColor: "rgba(249, 115, 22, 0.4)",
  },
  {
    title: "Cubical SEO — Ludo Gaming App",
    category: "Gaming (1.2M+ Users)",
    date: "Jan 2023 – Aug 2023",
    role: "Product Strategy Consultant",
    description:
      "Led product strategy using Design Thinking and AARRR; improved retention by 34% through gamification and feature optimization.",
    gradient: "from-cyan-400 via-teal-500 to-emerald-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    title: "The Startup Guy",
    category: "Digital Media Platform",
    date: "Dec 2021 – Jun 2023",
    role: "Digital Product Strategist",
    description:
      "Owned roadmap in Asana with OKR-led Agile sprints; scaled platform to 800+ entrepreneurs and drove 3× growth in digital reach.",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    glowColor: "rgba(217, 70, 239, 0.4)",
  },
  {
    title: "WebVeda — How to Instagram",
    category: "EdTech (460K+ Learners)",
    date: "Nov 2021 – May 2022",
    role: "Course Co-Developer",
    description:
      "Co-developed course product with Ankur Warikoo's team (5M+ YouTube subscribers); applied MoSCoW prioritization to improve learner engagement.",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
]

const experiences = [
  {
    title: "Head of Product",
    company: "SKG Real Estate Developers LLP",
    date: "Jul 2023 – Sep 2025",
    bullets: [
      "Owned product strategy and roadmap for a tech-enabled real estate platform; prioritized features using RICE and executed via Agile/Scrum in Jira, scaling active projects from 5 to 18 and reducing lifecycle by 28% through automation pipelines.",
      "Led cross-functional program execution across sales, engineering, and operations; built KPI dashboards in Tableau and leveraged SQL/Google Analytics to drive pricing strategy, GTM decisions, and stakeholder alignment, improving deal close rates by 22%.",
      "Identified market opportunities through competitive analysis and VOC research; launched AR/VR visualization tools and CRM integrations, driving 15% MoM leads growth and positioning the platform as a tech-first market solution.",
    ],
    accentColor: "#F97316", // orange
  },
  {
    title: "Senior Product Manager",
    company: "Edten Technologies LLP",
    date: "Sep 2019 – Jul 2023",
    bullets: [
      "Defined product vision, North Star metrics, and OKRs for a B2B EdTech platform; scaled to 1,450+ preschools, 91,000+ students, and $465K ARR by orchestrating 12+ feature launches in an Agile environment.",
      "Translated insights from 200+ educator interviews (JTBD) into structured PRDs and wireframes (Figma); prioritized roadmap using MoSCoW in Jira, accelerating sprint velocity by 3x.",
      "Optimized growth and monetization using AARRR funnel analysis, cohort tracking, and Hotjar behavioral data; ran Lean pricing experiments in Power BI, increasing conversion rates by 19% and improving user satisfaction by 35%.",
    ],
    accentColor: "#10B981", // emerald
  },
  {
    title: "Product Manager",
    company: "HR Biotech",
    date: "Apr 2017 – Aug 2019",
    bullets: [
      "Owned end-to-end product lifecycle for 21 pharma products; scaled revenue from $64K to $285K (4.5x) through structured GTM execution, competitive pricing A/B experiments, and stakeholder alignment across 12+ manufacturers tracked in Jira.",
      "Managed cross-functional risk register across a high-ambiguity, multi-vendor environment; applied Lean principles to resolve delivery blockers, reducing manufacturing cycle time by 50% and accelerating market adoption by 40%.",
      "Drove product-market fit through Design Thinking workshops and VOC discovery across physicians, researchers, and hospital networks; synthesized clinical insights into data-driven roadmap priorities, directly aligning feature delivery to patient-facing outcomes.",
    ],
    accentColor: "#14B8A6", // teal
  },
]

const education = [
  {
    degree: "Masters of Science in Information Management",
    field: "Product/Program Management & Consulting",
    school: "University of Washington",
    date: "Sep 2025 – Aug 2026",
    location: "Seattle, WA",
    description: "Specializing in Product and Program Management & Consulting and AI-driven Strategy, I help businesses transform ideas into scalable, technology-powered solutions that drive growth, innovation, and long-term impact.",
    activities: "Product Management Club at UW and The Buerk Startup & Innovation Community at the University of Washington.",
    skills: ["Product Launch", "Project Management", "OKRs", "User Stories", "Agile Methodologies", "Management Consulting"],
    iconColor: "bg-purple-600",
  },
  {
    degree: "Executive Course in Product Management",
    field: "Product Management",
    school: "Indian School of Business (ISB)",
    date: "Nov 2021 – Mar 2022",
    location: "Hyderabad, India",
    description: "This course revolves around product management. It helps in analysing and gaining business insights. A resourceful product manager is a business pillar who develops, refines, and launches products to drive business growth strategically.",
    activities: "",
    skills: ["Product Management", "Digital Marketing", "Project Management", "AI", "Business Growth Strategies"],
    iconColor: "bg-emerald-600",
  },
]

const certifications = [] as { title: string; issuer: string; iconColor: string }[]

const testimonials = [
  {
    name: "Richard Carter",
    role: "ServiceNow Manager at West Monroe",
    relationship: "Richard was Hritvik's mentor",
    quote:
      "What impressed me most is his deep experience. Hritvik has already been part of three startups, which gives him a unique view on how to solve problems. Even though I was the mentor, I often found myself learning just as much from him. He listens very well, but he also asks the right questions that make you think. Beyond his skills, Hritvik is simply a very kind person. He is easy to talk to and treats everyone with respect. It is rare to find someone who is both this smart and this humble.",
    avatar: "/richard-carter.jpg",
  },
  {
    name: "Parantap Sharma",
    role: "SWE III at Google",
    relationship: "Parantap worked with Hritvik on the same team",
    quote:
      "Hritvik is among the most talented and user-focused Product Managers I have met. What stands out most about him is not just his ideas, but his ability to translate those ideas into impactful products and real business outcomes. His approach to product thinking, customer-centric problem solving, and execution has always been impressive. He has a strong understanding of how to identify user pain points, define a compelling product USP, and build solutions that genuinely create value for customers.",
    avatar: "/parantap-sharma.jpg",
  },
  {
    name: "Navaditya Gaur",
    role: "SDE at Amazon",
    relationship: "Navaditya reported to Hritvik directly",
    quote:
      "I had the opportunity to intern at Edten under Hritvik's leadership, and the experience played a major role in shaping my professional foundation as a developer. What stood out most about Hritvik was his ability to bridge the gap between product vision and technical execution. He consistently encouraged us to think beyond writing code and understand the 'why' behind every feature, customer problem, and business decision. Through his mentorship, I learned how to approach development with a user-first mindset, prioritize effectively, and build solutions that balance scalability, usability, and business impact. Hritvik is an exceptional Product Manager and leader who empowers teams to grow while maintaining a clear vision for the product and the customer.",
    avatar: "/navaditya-gaur.jpg",
  },
]

const contactLinks = [
  { label: "Email", value: "pmhritvik@gmail.com", href: "mailto:pmhritvik@gmail.com" },
  { label: "Phone", value: "+1 206-798-0422", href: "tel:+12067980422" },
  { label: "Website", value: "hritvikgaur.com", href: "https://hritvikgaur.com" },
  { label: "LinkedIn", value: "/in/pmhritvik", href: "https://linkedin.com/in/pmhritvik" },
  { label: "Instagram", value: "@hritvikneedsajob", href: "https://instagram.com/hritvikneedsajob" },
]

export function MainContent() {
  return (
    <main className="lg:w-[62%] lg:ml-auto p-6 lg:p-8 lg:pl-12 pb-32">
      {/* About */}
      <motion.section id="about" className="mb-12" {...fadeInUp}>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          About
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            Product Manager with 8+ years of experience building and scaling customer focused digital products across EdTech, PropTech, Gaming, and Biotech.
          </p>
          <p>
            Led zero to one product initiatives, platform modernization efforts, and AI driven workflow transformations across startups and growth stage companies. Delivered measurable business outcomes including 28x lead growth, 50% faster product lifecycles, 34% improvement in retention, and 19% conversion uplift through data informed roadmap strategy and rapid experimentation.
          </p>
          <p>
            Experienced in product strategy, user research, stakeholder management, roadmap prioritization, Agile execution, analytics, and cross functional leadership across engineering, design, operations, and business teams. Strong focus on AI enabled product ecosystems, automation workflows, customer experience optimization, and scalable platform thinking.
          </p>
        </div>
      </motion.section>

      {/* Experience - Now before Projects */}
      <motion.section id="experience" className="mb-12" {...fadeInUp}>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px) saturate(140%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Colored left accent line */}
              <div 
                className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
                style={{ backgroundColor: exp.accentColor }}
              />
              
              {/* Content */}
              <div className="p-4 pl-5 sm:p-5 sm:pl-6">
                {/* Header - Mobile: stacked, Desktop: inline */}
                <div className="mb-3 sm:mb-4">
                  {/* Mobile layout: Title, Company, Date stacked */}
                  <div className="sm:hidden">
                    <h3 className="text-sm font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{exp.company}</p>
                    <p className="text-xs text-muted-foreground/70 italic mt-0.5">{exp.date}</p>
                  </div>
                  {/* Desktop layout: Title | Company ... Date */}
                  <div className="hidden sm:flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-foreground">
                      {exp.title} <span className="text-muted-foreground font-normal">|</span> {exp.company}
                    </h3>
                    <span className="text-sm text-muted-foreground italic shrink-0">
                      {exp.date}
                    </span>
                  </div>
                </div>
                
                {/* Bullet points */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex">
                      <span className="mr-1.5 sm:mr-2 text-muted-foreground/60">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects - Vertical stacked with staggered animations */}
      <motion.section id="projects" className="mb-12" {...fadeInUp}>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-6">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Neon glow background */}
              <div
                className="absolute inset-0 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"
                style={{ background: `radial-gradient(ellipse at center, ${project.glowColor}, transparent 70%)` }}
              />
              
              {/* Card */}
              <div
                className="relative rounded-[2rem] overflow-hidden"
                style={{
                  background: "rgba(20, 20, 20, 0.55)",
                  backdropFilter: "blur(24px) saturate(140%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 50px rgba(0,0,0,0.4)",
                }}
              >
                {/* Inner gradient glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                {/* Content */}
                <div className="relative p-6 md:p-8">
                  {/* Top section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mt-2 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-white/50 shrink-0">
                      {project.date}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-white/70 leading-relaxed mb-5">
                    {project.description}
                  </p>
                  
                  {/* Role & Explore button */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-medium text-white/50 uppercase tracking-wide">
                      {project.role}
                    </span>
                    <div
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 group-hover:bg-white/15"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <span className="text-sm text-white/90 font-medium">Explore More</span>
                      <span className="text-white/70">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section id="education" className="mb-8 sm:mb-12" {...fadeInUp}>
        <h2 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">
          Education
        </h2>
        <div className="space-y-4 sm:space-y-5">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px) saturate(140%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Colored left accent line */}
              <div 
                className={`absolute left-0 top-4 bottom-4 w-1 rounded-full ${edu.iconColor}`}
              />
              
              <div className="p-4 pl-5 sm:p-5 sm:pl-6">
                {/* Header */}
                <div className="mb-3">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{edu.field}</p>
                </div>
                
                {/* School, Date, Location */}
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[12px] text-muted-foreground mb-3 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {edu.school}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {edu.date}
                  </span>
                </div>
                
                {/* Description */}
                {edu.description && (
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                    {edu.description}
                  </p>
                )}
                
                {/* Activities */}
                {edu.activities && (
                  <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed mb-3">
                    <span className="font-medium text-foreground/70">Activities:</span> {edu.activities}
                  </p>
                )}
                
                {/* Skills */}
                {edu.skills && edu.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full border border-white/10 text-foreground/80 bg-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* License & Certification - Only show if there are certifications */}
      {certifications.length > 0 && (
      <motion.section id="certifications" className="mb-8 sm:mb-12" {...fadeInUp}>
        <h2 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">
          License & Certification
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-5"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${cert.iconColor} flex items-center justify-center shrink-0`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      )}

      {/* Testimonials */}
      <motion.section id="testimonials" className="mb-8 sm:mb-12" {...fadeInUp}>
        <h2 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">
          Testimonials
        </h2>
        <div className="space-y-4 sm:space-y-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px) saturate(140%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted overflow-hidden shrink-0 ring-2 ring-white/10">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-[10px] sm:text-[12px] text-muted-foreground">{testimonial.role}</p>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground/70 italic mt-0.5">{testimonial.relationship}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="mb-8 sm:mb-12" {...fadeInUp}>
        <h2 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">
          Contact
        </h2>
        <div className="rounded-xl sm:rounded-2xl border border-border bg-card overflow-hidden">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center justify-between p-3 sm:p-4 hover:bg-muted/50 transition-colors ${
                index !== contactLinks.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-xs sm:text-sm text-foreground">{link.label}</span>
              <span className="text-xs sm:text-sm text-muted-foreground truncate ml-4">{link.value}</span>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-xs sm:text-sm text-muted-foreground pt-6 sm:pt-8 border-t border-border">
        <p>&copy; {new Date().getFullYear()} Hritvik Gaur</p>
      </footer>
    </main>
  )
}
