"use client"

import { useState } from "react"
import { Settings, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useLanguage } from "@/contexts/language-context"
import { useAudio } from "@/contexts/audio-context"

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
  { code: "hi", name: "हिन्दी" },
  { code: "zh", name: "中文" },
]

export function SettingsModal() {
  const { language, setLanguage, t } = useLanguage()
  const { isPlaying, toggleAudio } = useAudio()

  const [isFullscreen, setIsFullscreen] = useState(false)

  // Toggle fullscreen mode
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else if (document.exitFullscreen) {
      await document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  // Handle ESC key exit
  if (typeof window !== "undefined") {
    document.addEventListener("fullscreenchange", () => {
      setIsFullscreen(!!document.fullscreenElement)
    })
  }

  return (
    <div className="flex items-center gap-2">
      {/* Fullscreen toggle button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleFullscreen}
        className="relative"
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      >
        {isFullscreen ? (
          <Minimize2 className="w-5 h-5" />
        ) : (
          <Maximize2 className="w-5 h-5" />
        )}
      </Button>

      {/* Settings modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Settings className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t?.settings?.title || "Settings"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Language Select */}
            <div className="space-y-2">
              <Label htmlFor="language">{t?.settings?.language || "Language"}</Label>
              <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
                <SelectTrigger id="language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Background Audio */}
            <div className="flex items-center justify-between">
              <Label htmlFor="audio">{t?.settings?.audio || "Background Audio"}</Label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {isPlaying ? t?.settings?.audioOn || "On" : t?.settings?.audioOff || "Off"}
                </span>
                <Switch id="audio" checked={isPlaying} onCheckedChange={toggleAudio} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
