"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { AuroraText } from "./magicui/aurora-text"
import { BoxReveal } from "./magicui/box-reveal"
import { BorderBeam } from "./magicui/border-beam"
import { WordRotate } from "./magicui/word-rotate"

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-106 bg-primary/25 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-106 bg-secondary/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="container px-4 md:px-6 py-10 md:py-14">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
                    <div className="flex flex-col justify-center space-y-4 transition-all duration-700">

                        <BoxReveal boxColor={"#00b49c"} duration={0.3}>
                            <div className="relative inline-block rounded-lg bg-muted/70 border border-border/50 backdrop-blur-sm px-3 py-1 text-sm transition-all duration-700 delay-100 animate-fade-in">
                                {"Hello, I'm a Full-Stack Developer"}

                                <BorderBeam
                                    duration={10}
                                    size={50}
                                    className="from-transparent via-teal-500 to-transparent"
                                />
                            </div>
                        </BoxReveal>

                        <BoxReveal boxColor={"#00b49c"} duration={0.3}>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex flex-wrap items-center gap-3">
                                <span>I&apos;m</span>{" "}
                                <AuroraText className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent drop-shadow-sm">
                                    <WordRotate
                                        words={["Qasim JD", "Full-Stack Developer", "Problem Solver"]}
                                        className="font-extrabold hover:scale-[1.01]"
                                    />
                                </AuroraText>
                            </h1>

                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-700 delay-200 animate-fade-in my-2">
                                NextJS specialist building high-performance web apps with clean frontend interfaces and robust backend systems.
                            </p>
                        </BoxReveal>

                        {/* Call to Action Buttons */}

                        <BoxReveal boxColor={"#00b49c"} duration={0.3}>
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
                        </BoxReveal>

                        {/* Social Links */}

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
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>

                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-full  bg-muted/20 backdrop-blur-sm animate-float">
                            <Image
                                src="/images/me.png"
                                alt="Qasim Jd"
                                width={500}
                                height={500}
                                className="object-cover"
                                priority
                            />
                            <BorderBeam
                                duration={8}
                                size={200}
                                className="from-transparent via-teal-500 to-transparent"
                            />
                            <BorderBeam
                                duration={8}
                                delay={3}
                                size={200}
                                className="from-transparent via-teal-500 to-transparent"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
