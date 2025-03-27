import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./MobileMenu"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 md:px-6 transition-all duration-300">
      <div className="container flex items-center justify-between bg-background/70 backdrop-blur-md border-b border-border/40 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-primary-foreground">JD</span>
          </div>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            qasimjd.tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
        <ThemeToggle />
        
          {["Home", "About", "Projects", "Contact"].map((name) => (
            <Link
              key={name}
              href={`#${name.toLowerCase()}`}
              className="text-sm font-medium transition-colors hover:text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {name}
            </Link>
          ))}
          <Button
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white cursor-pointer"
            asChild
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </nav>
        
        <div className="md:hidden transition-all">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
