"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
    iconColor: "bg-blue-500",
    icon: "code",
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
    iconColor: "bg-emerald-500",
    icon: "code",
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
    iconColor: "bg-teal-500",
    icon: "pill",
  },
]

const education = [
  {
    degree: "Master of Science in Information Management",
    school: "University of Washington",
    date: "Sep 2025 – Aug 2026 (Expected)",
    location: "Seattle, WA",
    description: "Specialization in AI and Product/Program Management & Consulting.",
    iconColor: "bg-purple-500",
  },
  {
    degree: "MBA in Business and Marketing Management",
    school: "NMIMS",
    date: "Jan 2021 – Dec 2023",
    location: "Mumbai, India",
    description: "",
    iconColor: "bg-orange-500",
  },
]

const certifications = [
  {
    title: "Certificate in Product Management",
    issuer: "Indian School of Business (ISB), Hyderabad",
    iconColor: "bg-blue-500",
  },
]

const testimonials = [
  {
    name: "Evelyn Brooks",
    role: "Lead Engineer at Sigma, managed Hritvik directly",
    quote:
      "Having worked alongside Hritvik, I've been consistently impressed by his exceptional skills as a product manager. Hritvik's hands-on approach and dedication to building robust products have greatly contributed to our project's success.",
    avatar: "/testimonial-1.jpg",
  },
  {
    name: "Raj Patel",
    role: "Junior Product Manager at Omega, worked with Hritvik on the same team",
    quote:
      "Hritvik's expertise has been crucial in turning our ambitious project ideas into reality. His proficiency in both strategy and execution ensures a seamless integration of features, delivering a user experience that's both intuitive and high-performing.",
    avatar: "/testimonial-2.jpg",
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
  const projectsContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: projectsContainerRef,
    offset: ["start start", "end end"],
  })
  
  // Transform vertical scroll to horizontal movement for projects
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  
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
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${exp.iconColor} flex items-center justify-center shrink-0`}
                >
                  {exp.icon === "code" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {exp.icon === "pill" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h6l3 3v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6l3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex items-center gap-3 text-[12px] text-muted-foreground mt-1 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {exp.company}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm text-muted-foreground leading-relaxed flex">
                        <span className="mr-2 text-muted-foreground/60">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects - Scroll-linked horizontal section */}
      <section id="projects" className="mb-12">
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-6">
          Projects
        </h2>
        <div 
          ref={projectsContainerRef}
          className="relative h-[800px]"
        >
          <div className="sticky top-0 h-[320px] overflow-hidden">
            <motion.div 
              className="flex gap-6"
              style={{ x }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex-shrink-0 w-[calc(50%-12px)] min-w-[300px] max-w-[400px] group cursor-pointer relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {/* Neon glow background */}
                  <div
                    className="absolute inset-0 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"
                    style={{ background: `radial-gradient(ellipse at center, ${project.glowColor}, transparent 70%)` }}
                  />
                  
                  {/* Card */}
                  <div
                    className="relative h-[300px] rounded-[2rem] overflow-hidden"
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
                    <div className="relative h-full flex flex-col justify-between p-6">
                      {/* Top section */}
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-3 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Bottom section */}
                      <div>
                        <p className="text-sm text-white/70 leading-relaxed line-clamp-3 mb-4">
                          {project.description}
                        </p>
                        
                        {/* Explore button */}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <motion.section id="education" className="mb-12" {...fadeInUp}>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${edu.iconColor} flex items-center justify-center shrink-0`}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <div className="flex items-center gap-3 text-[12px] text-muted-foreground mt-1 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {edu.school}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* License & Certification */}
      <motion.section id="certifications" className="mb-12" {...fadeInUp}>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          License & Certification
        </h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${cert.iconColor} flex items-center justify-center shrink-0`}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section id="testimonials" className="mb-12" {...fadeInUp}>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Testimonials
        </h2>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-[12px] text-muted-foreground">{testimonial.role}</p>
                  <div className="flex items-center gap-0.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="mb-12" {...fadeInUp}>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Contact
        </h2>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${
                index !== contactLinks.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm text-foreground">{link.label}</span>
              <span className="text-sm text-muted-foreground">{link.value}</span>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
        <p>Built using Next.js & Tailwind CSS</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Hritvik Gaur</p>
      </footer>
    </main>
  )
}
