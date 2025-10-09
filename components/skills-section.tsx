import skillsData from "@/data/skills.json"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.categories.map((category) => (
            <div key={category.name} className="bg-secondary rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                    {skill}
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
