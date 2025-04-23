"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Send, Github, Linkedin, Instagram, Loader2, CircleArrowDownIcon } from "lucide-react"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [submiting, setSubmiting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            setSubmiting(true)
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            if (response.status === 200) {
                toast.success("Email sent successfully!")
                setFormData({ name: "", email: "", subject: "", message: "" })
            } else {
            }
        } catch (error) {
            toast.error("Failed to send email. Please try again later.")
            console.log(error)
        } finally {
            setSubmiting(false)
        }
    }

    return (
        <section className="py-20 md:py-32">
            <div id="contact" className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
                    <div className="inline-block rounded-lg bg-primary/10 border border-primary/20 pt-4 px-3 py-1 text-sm text-primary">
                        Get In Touch
                        <CircleArrowDownIcon className="inline-block ml-2 h-4 w-4 animate-bounce" />

                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    <Card className="border-border/40 bg-muted/10 backdrop-blur-sm animate-on-scroll col-span-2">
                        <CardContent className="p-6">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="w-full rounded-md border border-border/60 bg-muted/30 px-3 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your email"
                                            required
                                            className="w-full rounded-md border border-border/60 bg-muted/30 px-3 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        required
                                        className="w-full rounded-md border border-border/60 bg-muted/30 px-3 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message"
                                        rows={5}
                                        required
                                        className="w-full rounded-md border border-border/60 bg-muted/30 px-3 py-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    ></textarea>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:primary/90 text-white cursor-pointer"
                                    disabled={submiting}
                                >
                                    {submiting ? (
                                        <span>
                                            <Loader2 className="mr-2 h-4 w-4 inline animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span>
                                            <Send className="mr-2 h-4 w-4 inline" />
                                            Send Message
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">

                        <div className="flex items-start space-x-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="text-muted-foreground">qasimjd8@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="text-muted-foreground">+92 (314) 370-1618</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Instagram className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Instagram</h3>
                                <p className="text-muted-foreground">qasimjd8</p>
                            </div>
                        </div>
                        <div className="mt-12 rounded-lg border border-border/40 bg-muted/10 p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                            <div className="flex space-x-4">
                                <Link
                                    href="https://github.com/qasimjd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/qasimjd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
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
                    </div>
                </div>
            </div>
        </section>
    )
}

