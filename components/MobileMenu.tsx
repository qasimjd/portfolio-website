"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ModeToggle } from "./ThemeToggle"

const menuItems = [
    { hash: "#home", label: "Home" },
    { hash: "#about", label: "About" },
    { hash: "#projects", label: "Projects" },
    { hash: "#contact", label: "Contact" },
]

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeHash, setActiveHash] = useState("")

    const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || "#home")
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

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -40, scale: 0.95, filter: 'blur(6px)' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: 'blur(0px)',
                            transition: {
                                opacity: { duration: 0.25 },
                                y: { type: 'spring', stiffness: 180, damping: 18 },
                                scale: { type: 'spring', stiffness: 180, damping: 18 },
                                filter: { duration: 0.2 },
                            },
                        }}
                        exit={{
                            opacity: 0,
                            y: -40,
                            scale: 0.95,
                            filter: 'blur(6px)',
                            transition: {
                                opacity: { duration: 0.18 },
                                y: { duration: 0.22 },
                                scale: { duration: 0.22 },
                                filter: { duration: 0.18 },
                            },
                        }}
                        className="fixed inset-x-0 top-[57px] z-50 bg-background/90 text-foreground backdrop-blur-lg shadow-lg overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col items-end space-y-2 px-6 py-4">
                            <ModeToggle />
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.hash}
                                    initial={{ opacity: 0, x: 60, scale: 0.8, rotate: -8 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                        rotate: 0,
                                        transition: {
                                            delay: 0.15 + index * 0.09,
                                            type: 'spring',
                                            stiffness: 220,
                                            damping: 18,
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: 60,
                                        scale: 0.8,
                                        rotate: 8,
                                        transition: {
                                            duration: 0.18,
                                        },
                                    }}
                                >
                                    <Link
                                        href={item.hash}
                                        className="block px-4 py-3 text-4xl font-medium relative"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <motion.span className="relative">
                                            {item.label}
                                            {activeHash === item.hash && (
                                                <motion.span
                                                    layoutId="mobileActiveIndicator"
                                                    className="absolute left-0 bottom-0 h-1 w-full bg-primary rounded-full shadow-lg"
                                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
