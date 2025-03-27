"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-106 bg-primary/25 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-106 bg-secondary/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="container px-4 md:px-6 py-10 md:py-14">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
                    <div
                        className={`flex flex-col justify-center space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    >
                        <div className="inline-block rounded-lg bg-muted/30 border border-border/40 backdrop-blur-sm px-3 py-1 text-sm transition-all duration-700 delay-100 animate-fade-in">
                            Hello, I'm a Full-Stack Developer
                        </div>

                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            I'm{" "}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient bg-300%">
                                Qasim JD
                            </span>
                        </h1>

                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-700 delay-200 animate-fade-in">
                            A passionate developer focused on creating intuitive and dynamic web experiences with modern technologies.
                        </p>

                        <div className="flex flex-col gap-2 min-[400px]:flex-row transition-all duration-700 delay-300 animate-fade-in">
                            <Button
                                className="group"
                                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Contact Me
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 pt-4 text-muted-foreground transition-all duration-700 delay-400 animate-fade-in">
                            <Link
                                href="https://github.com/qasimjd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="https://linkedin.com/in/qasimjd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                href="https://instagram.com/qasimjd8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`flex items-center justify-center lg:justify-end transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                    >
                        <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-full border-4 border-primary/20 bg-muted/20 backdrop-blur-sm animate-float">
                            <Image
                                src="/images/me.png"
                                alt="Qasim Jd"
                                width={500}
                                height={500}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <button
                        onClick={scrollToAbout}
                        aria-label="Scroll to about section"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/50 backdrop-blur-sm transition-colors hover:bg-muted"
                    >
                        <ChevronDown className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}

