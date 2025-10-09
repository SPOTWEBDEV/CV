"use client"

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react"

interface AudioContextType {
  isPlaying: boolean
  toggleAudio: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
    const savedAudioState = localStorage.getItem("audioEnabled")
    const shouldPlay = savedAudioState === null ? true : savedAudioState === "true"

    audioRef.current = new Audio("/audio/background-music.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    if (shouldPlay) {
      // Attempt to play after user interaction
      const playAudio = () => {
        audioRef.current
          ?.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            // Autoplay blocked, will play when user interacts
          })
        document.removeEventListener("click", playAudio)
      }
      document.addEventListener("click", playAudio)
    }

    return () => {
      audioRef.current?.pause()
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
      localStorage.setItem("audioEnabled", "false")
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          localStorage.setItem("audioEnabled", "true")
        })
        .catch((error) => {
          console.error("Audio play failed:", error)
        })
    }
  }

  if (!mounted) {
    return null
  }

  return <AudioContext.Provider value={{ isPlaying, toggleAudio }}>{children}</AudioContext.Provider>
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}
