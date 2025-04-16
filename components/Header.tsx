import Link from "next/link"
import { AuroraText } from "./magicui/aurora-text"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 md:px-6">
      <div className="container flex items-center justify-between bg-background/90 backdrop-blur-lg border-b border-border/40 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-primary-foreground">JD</span>
          </div>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <AuroraText colors={["#00b49c", "#3071ffa2"]}>qasimjd.tech</AuroraText>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["Home", "About", "Projects", "Contact"].map((name) => (
            <Link
              key={name}
              href={`#${name.toLowerCase()}`}
              className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
