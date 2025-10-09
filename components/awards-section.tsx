import { Award } from "lucide-react"
import awardsData from "@/data/awards.json"

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Awards & Recognition</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {awardsData.awards.map((award) => (
            <div
              key={award.id}
              className="bg-secondary rounded-lg p-6 border border-border hover:border-accent transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent rounded-lg">
                  <Award className="w-5 h-5 text-accent-foreground" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                    <span className="text-sm text-muted-foreground">{award.year}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{award.organization}</p>

                  <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
