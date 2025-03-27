"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden transition-all"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            <div
                className={cn(
                    "fixed inset-x-0 top-[57px] z-50 h-[calc(100vh-57px)] bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <nav className="container flex flex-col p-6">
                    {["Home", "About", "Projects", "Contact"].map((name) => (
                        <Link
                            key={name}
                            href={`#${name.toLowerCase()}`}
                            className="flex w-full items-center justify-between border-b border-border/30 py-3 font-medium text-muted-foreground transition-colors hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                        >
                            {name}
                        </Link>
                    ))}
                    <Button className="mt-4 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="#contact">Get in Touch</Link>
                    </Button>
                </nav>
            </div>
        </>
    )
}
