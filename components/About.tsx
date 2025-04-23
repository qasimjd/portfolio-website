import { CircleArrowDownIcon } from "lucide-react"
import Image from "next/image"

export function About() {

  return (
    <section className="bg-gradient-to-b py-20 md:py-32 from-background to-background/95 relative z-10">
      <div id="about" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="inline-block rounded-lg bg-primary/10 border border-primary/20 pt-4 px-3 py-1 text-sm text-primary">
            About Me
            <CircleArrowDownIcon className="inline-block ml-2 h-4 w-4 animate-bounce" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who I Am</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know me and my journey in the world of web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="relative aspect-square w-full max-w-[440px] mx-auto overflow-hidden rounded-2xl border border-border/40 bg-muted/20 backdrop-blur-sm">
            <Image
              src="/images/img1.png"
              alt="Qasim Jd"
              fill
              className="object-fill transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Full-Stack Developer & Next.js Specialist</h3>
            <p className="text-muted-foreground">
              I&apos;m Qasim Javed, a passionate full-stack developer specializing in Next.js and modern React ecosystems. I
              build performant, scalable web applications with clean, maintainable code.
            </p>
            <p className="text-muted-foreground">
              With expertise in Next.js, React, TypeScript, and full-stack JavaScript development, I create seamless user
              experiences from frontend to backend. I&apos;m experienced in server-side rendering, API routes, static site
              generation, and leveraging Next.js for optimal performance and SEO.
            </p>
            <p className="text-muted-foreground">
              When I&apos;m not coding, I stay updated with the latest web features, contribute to open-source projects,
              and explore new techniques to enhance web application development.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p className="text-muted-foreground">Qasim Jd</p>
              </div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p className="text-muted-foreground">qasimjd8@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
              <div>
                <h4 className="font-semibold">Location:</h4>
                <p className="text-muted-foreground">Remote</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
  )
}

