"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import profileData from "@/data/profile.json"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <Image
                src={profileData.company.logo || "/placeholder.svg"}
                alt={profileData.company.name}
                width={100}
                height={100}
                className="object-contain"
              />
              <p className="text-foreground font-bold">{profileData.company.name}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {profileData.name} ({profileData.nickname})
            </p>
            <p className="text-xs text-muted-foreground">
              {t?.footer?.company || "SPOTWEBTECH"} • Est. {profileData.company.founded}
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={profileData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.social.email}`}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {profileData.company.name}. {t?.footer?.rights || "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
