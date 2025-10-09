"use client"

import { Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const email = process.env.NEXT_PUBLIC_EMAIL || ""

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I would like to discuss a project with you.")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  const handleEmail = () => {
    window.location.href = `mailto:${email}?subject=Project Inquiry`
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          {t?.contact?.title || "Get In Touch"}
        </h2>

        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
          Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or partnerships.
          Let's connect and bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {t?.contact?.bookWhatsApp || "Book via WhatsApp"}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleEmail}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent hover:scale-105 transition-all"
          >
            <Mail className="w-5 h-5 mr-2" />
            {t?.contact?.sendEmail || "Send Email"}
          </Button>
        </div>
      </div>
    </section>
  )
}
