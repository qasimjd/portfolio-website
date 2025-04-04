import Link from "next/link"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { AuroraText } from "./magicui/aurora-text"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/5 pt-12 pb-6 md:pt-16 md:pb-4">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-primary-foreground">JD</span>
            </div>
            <AuroraText colors={["#00b49c", "#3071ffa2"]}>qasimjd.tech</AuroraText>
          </Link>

            <p className="max-w-[500px] text-muted-foreground">
            A passionate full-stack and backend developer dedicated to building scalable, efficient, and intuitive web solutions using modern technologies.
            </p>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/qasimjd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/qasimjd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://linkedin.com/in/qasimjd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="mailto:qasimaliwork65@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

