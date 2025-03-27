"use client"

import { Menu, Mountain } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo - Left Side */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold">ACME</span>
          </Link>
        </div>

        {/* Navigation Links - Right Side */}
        <nav className="hidden md:flex md:gap-6">
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary relative group">
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Services
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col gap-4 py-6">
              <Link
                href="#"
                className="text-lg font-medium transition-colors hover:text-primary relative group w-fit"
                onClick={() => setIsOpen(false)}
              >
                Home
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="text-lg font-medium transition-colors hover:text-primary relative group w-fit"
                onClick={() => setIsOpen(false)}
              >
                About
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="text-lg font-medium transition-colors hover:text-primary relative group w-fit"
                onClick={() => setIsOpen(false)}
              >
                Services
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="text-lg font-medium transition-colors hover:text-primary relative group w-fit"
                onClick={() => setIsOpen(false)}
              >
                Contact
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

