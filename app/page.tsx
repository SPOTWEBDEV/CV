import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { AwardsSection } from "@/components/awards-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LanguageModal } from "@/components/language-modal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <LanguageModal />
      <Navigation />

      <main>
        <div id="about">
          <HeroSection />
        </div>
        <ProjectsSection />
        <TestimonialsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <AwardsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
