import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ResumePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-5xl mx-auto px-6">
        <HeroSection />
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
