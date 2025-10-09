import { GraduationCap } from "lucide-react"
import educationData from "@/data/education.json"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Education</h2>

        <div className="space-y-6">
          {educationData.degrees.map((edu) => (
            <div key={edu.id} className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent-foreground" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{edu.period}</span>
                  </div>

                  <p className="text-muted-foreground mb-2">
                    {edu.institution} • {edu.location}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
