import { Card, CardContent } from "@/components/ui/card"
import { Database, Palette, Server } from "lucide-react"

export function Skills() {

  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 65 },
        { name: "Responsive Design", level: 99 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 70 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Next.js", level: 85 },
        { name: "Server Actions", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "API Development", level: 80 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 95 },
        { name: "PostgreSQL", level: 80 },
        { name: "Neon", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Supabase", level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="inline-block rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 text-sm text-primary">
            My Skills
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Expertise</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-border/40 bg-muted/10 backdrop-blur-sm animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

