"use client"

import { Github, Linkedin, Twitter, Mail , MessageCircle } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import profileData from "@/data/profile.json"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex-shrink-0">
            <Image
              src={profileData.avatar || "/placeholder.svg"}
              alt={profileData.name}
              width={400}
              height={400}
              className="rounded-full border-4 border-accent shadow-xl"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">{profileData.name}</h1>
            <p className="text-lg text-accent mb-4">({profileData.nickname})</p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              {t?.hero?.subtitle || profileData.subtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t?.hero?.bio || profileData.bio}</p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              {/* <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a> */}
              {/* <a
                href={profileData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a> */}
              <a
                href={`mailto:${profileData.social.email}`}
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${profileData.social.email}`}
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all hover:scale-110"
                aria-label="Email"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
