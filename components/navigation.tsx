"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SettingsModal } from "@/components/settings-modal"
import { useLanguage } from "@/contexts/language-context"
import profileData from "@/data/profile.json"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t?.nav?.about || "About", href: "#about" },
    { label: t?.nav?.skills || "Skills", href: "#skills" },
    { label: t?.nav?.experience || "Experience", href: "#experience" },
    { label: t?.nav?.projects || "Projects", href: "#projects" },
    { label: t?.nav?.education || "Education", href: "#education" },
    { label: t?.nav?.awards || "Awards", href: "#awards" },
    { label: t?.nav?.testimonials || "Testimonials", href: "#testimonials" },
    { label: t?.nav?.contact || "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <Image
              src={profileData.company["logo"] || "/placeholder.svg"}
              alt={profileData.company.name}
              width={100}
              height={100}
              className="object-contain dark:hidden"
            />

            <Image
              src={profileData.company["logo-dark"] || "/placeholder-dark.svg"}
              alt={profileData.company.name}
              width={100}
              height={100}
              className="object-contain hidden dark:block"
            />
            {/* <span className="text-xl font-bold text-foreground hidden sm:block">{profileData.company.name}</span> */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <SettingsModal />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <SettingsModal />
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
