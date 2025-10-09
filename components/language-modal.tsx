"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
]

export function LanguageModal() {
  const [open, setOpen] = useState(false)
  const { setLanguage, t } = useLanguage()

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited")
    if (!hasVisited) {
      setOpen(true)
    }
  }, [])

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as any)
    localStorage.setItem("hasVisited", "true")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {t?.languageModal?.title || "Choose Your Language"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t?.languageModal?.subtitle || "Select your preferred language to continue"}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="outline"
              className="h-20 flex flex-col gap-2 hover:bg-accent hover:scale-105 transition-all bg-transparent"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <span className="text-3xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
