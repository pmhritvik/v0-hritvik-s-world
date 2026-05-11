"use client"

import Image from "next/image"
import { Mail, Globe, Phone, Linkedin, Instagram, Youtube, MapPin } from "lucide-react"

const languages = [
  { name: "English", flag: "🇬🇧" },
  { name: "Hindi", flag: "🇮🇳" },
]

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[38%] flex flex-col p-6 lg:p-8 lg:pr-12">
      {/* Header with Avatar and Info */}
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar */}
        <div className="w-16 h-16 lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Hritvik Gaur"
            width={70}
            height={70}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        {/* Name, Pronouns, Verified Badge, Title, Location */}
        <div className="flex-1 min-w-0">
          {/* Name, Pronouns, Verified Badge */}
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <h1 className="text-xl lg:text-2xl font-semibold text-foreground">Hritvik Gaur</h1>
            <span className="text-xs text-muted-foreground">he/him</span>
            <svg
              className="w-4 h-4 shrink-0"
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

          {/* Title */}
          <p className="text-sm text-foreground mb-1">AI Product Manager</p>

          {/* Location */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>Seattle, WA <span className="text-muted-foreground/70">(open to relocate)</span></span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mb-6">
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
          Intro
        </h2>
        <div className="text-sm text-foreground leading-relaxed space-y-3">
          <p>
            {"I'm Hritvik, an AI Product Manager currently based in Seattle and pursuing my MS in Information Management at the University of Washington, specializing in AI, Product Management, and Program Management."}
          </p>
          <p>
            I enjoy building AI enabled products that translate customer insights into scalable business outcomes. My work sits at the intersection of product strategy, user research, execution, and emerging AI systems.
          </p>
          <p>
            {"I'm currently looking for senior Product Management opportunities where I can build intelligent, customer centric products that create measurable impact at scale."}
          </p>
        </div>
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
          <a
            href="https://instagram.com/hritvikneedsajob"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4 text-muted-foreground" />
            @hritvikneedsajob
          </a>
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
