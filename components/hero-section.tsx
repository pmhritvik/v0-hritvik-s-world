"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, Globe, Linkedin, MapPin } from "lucide-react"

const skills = [
  "Product Strategy",
  "Roadmapping",
  "OKRs",
  "RICE",
  "JTBD",
  "A/B Testing",
  "SQL",
  "Figma",
  "Jira",
]

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/pmhritvik", label: "LinkedIn" },
  { icon: Globe, href: "https://hritvikgaur.com", label: "Website" },
]

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 scroll-mt-24" id="hero">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
      >
        <div className="grid md:grid-cols-[1fr_280px] gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Avatar and Name */}
            <div className="flex items-start gap-5">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/avatar.jpg"
                  alt="Hritvik Gaur"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-serif text-foreground">
                    Hritvik Gaur
                  </h1>
                  <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground bg-muted rounded-full">
                    he/him
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Seattle, WA</span>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                About
              </span>
              <p className="text-foreground leading-relaxed">
                Product Manager building customer-centric products across EdTech, PropTech, and Biotech. Currently pursuing an MS in Information Management at the University of Washington with a focus on AI and Product Management.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:border-l md:border-border md:pl-8">
            {/* Contact */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Contact
              </span>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:pmhritvik@gmail.com" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    pmhritvik@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:206-798-0422" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    206-798-0422
                  </a>
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2.5 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Socials
              </span>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
