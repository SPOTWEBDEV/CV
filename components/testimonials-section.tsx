"use client"

import Image from "next/image"
import { Quote, Building2, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import testimonialsData from "@/data/testimonials.json"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const companyTestimonials = testimonialsData.testimonials.filter((t) => t.type === "company")
  const clientTestimonials = testimonialsData.testimonials.filter((t) => t.type === "client")

  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          {t?.testimonials?.title || "What Clients & Companies Say"}
        </h2>

        {/* Company Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
            <Building2 className="w-6 h-6 text-accent" />
            {t?.testimonials?.companyTitle || "Company Testimonials"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  {testimonial.logo && (
                    <Image
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={testimonial.company}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.company}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
            <User className="w-6 h-6 text-accent" />
            {t?.testimonials?.clientTitle || "Client Testimonials"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-6 h-6 text-accent mb-3" />
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">"{testimonial.content}"</p>

                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
