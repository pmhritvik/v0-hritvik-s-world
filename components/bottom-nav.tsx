"use client"

import { useEffect, useState } from "react"
import { User, Folder, Briefcase, GraduationCap, Award, Heart, Mail, FileText } from "lucide-react"

const navItems = [
  { id: "about", icon: User, label: "About" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Folder, label: "Projects" },
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
      {/* Glassmorphic pill container */}
      <div 
        className="flex items-center gap-1 px-3 py-2 rounded-full"
        style={{
          background: "rgba(15, 15, 15, 0.7)",
          backdropFilter: "blur(24px) saturate(150%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          )
        })}
        
        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-2" />
        
        {/* Resume button with animated gradient border */}
        <a
          href="/resume.pdf"
          download
          className="relative group"
        >
          {/* Animated gradient border */}
          <div 
            className="absolute -inset-[2px] rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(90deg, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899, #f97316)",
              backgroundSize: "300% 100%",
              animation: "gradientShift 3s linear infinite",
            }}
          />
          
          {/* Inner button */}
          <div 
            className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300"
            style={{
              background: "rgba(15, 15, 15, 0.9)",
            }}
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </div>
        </a>
      </div>
      
      {/* CSS Animation for gradient border */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
      `}</style>
    </nav>
  )
}
