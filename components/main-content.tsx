"use client"

import { motion } from "framer-motion"
import { Calendar, Building2, MapPin, Star } from "lucide-react"
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
    location: "Remote",
    description:
      "Owned product strategy and roadmap for a tech-enabled real estate platform. Prioritized features using RICE and executed via Agile/Scrum in Jira, scaling active projects from 5 to 18 and reducing lifecycle by 28%. Built KPI dashboards in Tableau; leveraged SQL and Google Analytics to drive pricing strategy and GTM decisions, improving deal close rates by 22%. Launched AR/VR visualization tools and CRM integrations, driving 15% MoM lead growth.",
    iconColor: "bg-red-500",
    icon: "briefcase",
  },
  {
    title: "Senior Product Manager",
    company: "Edten Technologies LLP",
    date: "Sep 2019 – Jul 2023",
    location: "India",
    description:
      "Defined product vision, North Star metrics, and OKRs for a B2B EdTech platform; scaled to 1,450+ preschools, 91,000+ students, and $465K ARR across 12+ feature launches. Translated 200+ educator interviews (JTBD) into PRDs and Figma wireframes; prioritized via MoSCoW, accelerating sprint velocity by 3×. Ran AARRR funnel analysis, cohort tracking, and Lean pricing experiments in Power BI, lifting conversion 19% and satisfaction 35%.",
    iconColor: "bg-emerald-500",
    icon: "zap",
  },
  {
    title: "Product Manager",
    company: "HR Biotech",
    date: "Apr 2017 – Aug 2019",
    location: "India",
    description:
      "Owned end-to-end product lifecycle for 21 pharma products; scaled revenue from $64K to $285K (4.5×) through GTM execution, A/B pricing experiments, and alignment across 12+ manufacturers. Applied Lean principles to a cross-functional risk register, reducing manufacturing cycle time by 50%. Drove PMF through Design Thinking workshops and VOC discovery across physicians, researchers, and hospital networks.",
    iconColor: "bg-teal-500",
    icon: "flask",
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
            Led zero to one product initiatives, platform modernization efforts, and AI driven workflow transformations across startups and growth stage companies.
          </p>
          <p>
            Delivered measurable business outcomes including 28x lead growth, 50% faster product lifecycles, 34% improvement in retention, and 19% conversion uplift through data informed roadmap strategy and rapid experimentation.
          </p>
          <p>
            Experienced in product strategy, user research, stakeholder management, roadmap prioritization, Agile execution, analytics, and cross functional leadership across engineering, design, operations, and business teams.
          </p>
          <p>
            Strong focus on AI enabled product ecosystems, automation workflows, customer experience optimization, and scalable platform thinking.
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" className="mb-12" {...fadeInUp}>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Projects
        </h2>
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 lg:-mx-8 lg:px-8 scrollbar-hide">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="flex-shrink-0 w-[300px] lg:w-[340px] group cursor-pointer"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Neon glow background */}
              <div
                className="absolute inset-0 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"
                style={{ background: `radial-gradient(ellipse at center, ${project.glowColor}, transparent 70%)` }}
              />
              
              {/* Card */}
              <div
                className="relative h-[280px] rounded-[2rem] overflow-hidden"
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
                    <p className="text-sm text-white/70 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Explore button */}
                    <div
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300"
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

      {/* Experience */}
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
                  {exp.icon === "briefcase" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {exp.icon === "zap" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {exp.icon === "flask" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

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
