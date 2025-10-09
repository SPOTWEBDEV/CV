import experienceData from "@/data/experience.json"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Work Experience</h2>

        <div className="space-y-8">
          {experienceData.positions.map((position) => (
            <div
              key={position.id}
              className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{position.title}</h3>
                  <p className="text-muted-foreground">
                    {position.company} • {position.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{position.period}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{position.description}</p>

              <div className="flex flex-wrap gap-2">
                {position.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
