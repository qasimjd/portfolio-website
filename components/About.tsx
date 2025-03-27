import Image from "next/image"

export function About() {

  return (
    <section id="about" className="bg-gradient-to-b py-20 md:py-32 from-background to-background/95 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
          <div className="inline-block rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 text-sm text-primary">
            About Me
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who I Am</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know me and my journey in the world of web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="relative aspect-square w-full max-w-[400px] mx-auto overflow-hidden rounded-2xl border border-border/40 bg-muted/20 backdrop-blur-sm">
            <Image
              src="/images/img1.jpg"
              alt="Qasim Jd"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Full-Stack Developer & UI/UX Enthusiast</h3>
            <p className="text-muted-foreground">
              I'm Qasim Jd, a passionate full-stack developer with a keen eye for design and user experience. I
              specialize in building modern, responsive web applications.
            </p>
            <p className="text-muted-foreground">
              With a background in computer science and several years of experience in web development, I've worked on a
              variety of projects ranging from small business websites to complex web applications. I'm constantly
              learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new trends, contributing to open-source projects.
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
    </section>
  )
}

