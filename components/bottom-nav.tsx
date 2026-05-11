"use client"

import { useEffect, useState } from "react"
import { User, Folder, Briefcase, GraduationCap, Award, Heart, Mail, FileText } from "lucide-react"

const navItems = [
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Folder, label: "Projects" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "certifications", icon: Award, label: "Certifications" },
  { id: "testimonials", icon: Heart, label: "Testimonials" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export function BottomNav() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-card/80 backdrop-blur-lg border border-border shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-2.5 rounded-full transition-all ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          )
        })}
        <div className="w-px h-6 bg-border mx-1" />
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors text-sm font-medium"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </div>
    </nav>
  )
}
