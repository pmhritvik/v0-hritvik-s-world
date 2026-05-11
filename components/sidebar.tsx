"use client"

import Image from "next/image"
import { Mail, Globe, Phone, Linkedin, Instagram, Youtube } from "lucide-react"

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
  "Tableau",
  "Power BI",
  "Python (Basic)",
  "AI & Automation",
]

const languages = [
  { name: "English", flag: "🇬🇧" },
  { name: "Hindi", flag: "🇮🇳" },
]

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[38%] flex flex-col p-6 lg:p-8 lg:pr-12">
      {/* Avatar */}
      <div className="w-16 h-16 lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden mb-4">
        <Image
          src="/avatar.jpg"
          alt="Hritvik Gaur"
          width={70}
          height={70}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Name with verified badge */}
      <div className="flex items-center gap-2 mb-1">
        <h1 className="text-2xl lg:text-3xl font-serif text-foreground">Hritvik Gaur</h1>
        <svg
          className="w-5 h-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" fill="#3B82F6" />
          <path
            d="M9 12l2 2 4-4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Pronouns */}
      <p className="text-sm text-muted-foreground mb-6">he/him</p>

      {/* About */}
      <div className="mb-6">
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
          About
        </h2>
        <p className="text-sm text-foreground leading-relaxed">
          Product Manager building customer-centric products across EdTech, PropTech, and Biotech. Currently pursuing an MS in Information Management at the University of Washington with a focus on AI and Product Management.
        </p>
      </div>

      {/* Contact */}
      <div className="mb-6">
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
          Contact
        </h2>
        <div className="space-y-2">
          <a
            href="mailto:pmhritvik@gmail.com"
            className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-muted-foreground" />
            pmhritvik@gmail.com
          </a>
          <a
            href="https://hritvikgaur.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4 text-muted-foreground" />
            hritvikgaur.com
          </a>
          <a
            href="tel:+12067980422"
            className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-muted-foreground" />
            206-798-0422
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs rounded-full border border-border text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mb-6">
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
          Languages
        </h2>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="px-3 py-1 text-xs rounded-full border border-border text-foreground flex items-center gap-1.5"
            >
              <span>{lang.flag}</span>
              {lang.name}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer to push socials to bottom */}
      <div className="flex-1" />

      {/* Social links */}
      <div className="flex items-center gap-4 pt-4">
        <a
          href="https://x.com/pmhritvik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="X (Twitter)"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://instagram.com/hritvikneedsajob"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/pmhritvik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://www.youtube.com/@TheStartupGuyYT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5" />
        </a>
      </div>
    </aside>
  )
}
