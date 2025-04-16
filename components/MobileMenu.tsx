"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeHash, setActiveHash] = useState("")

    const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash)
        }

        handleHashChange()
        window.addEventListener("hashchange", handleHashChange)

        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [isOpen])

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

            {isOpen && (
                <div
                    className={cn(
                        "fixed inset-x-0 top-[57px] z-50 origin-top transform rounded-b-lg bg-background/90 backdrop-blur-lg shadow-lg transition-all duration-300 ease-out md:hidden",
                        "animate-fade-slide-down"
                    )}
                >
                    <nav className="container flex flex-col gap-1 py-6 px-4">
                        {["Home", "About", "Projects", "Contact"].map((name) => {
                            const hash = `#${name.toLowerCase()}`
                            const isActive = activeHash === hash

                            return (
                                <Link
                                    key={name}
                                    href={hash}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center justify-between rounded-md px-4 py-3 text-base font-semibold transition-colors",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                                    )}
                                >
                                    {name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </>
    )
}
