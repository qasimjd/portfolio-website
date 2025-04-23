"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleArrowDownIcon, ExternalLink, Github, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { AuroraText } from "./magicui/aurora-text";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  detailedDescription: string;
  features: string[];
};

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 md:py-32">
      <div id="projects" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll ">
          <div className="inline-block rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 text-sm text-primary">
            My Work
            <CircleArrowDownIcon className="inline-block ml-2 h-4 w-4 animate-bounce" />

          </div>
          <h2 className="text-3xl pt-4 font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore some of my recent projects and the technologies I&apos;ve worked with.
          </p>
        </div>

        <div
          className="flex justify-center mt-10 mb-12 animate-on-scroll">
          <div className="flex flex-wrap gap-2 justify-center">
            {["all", "next.js", "vite", "frontend"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={activeFilter === filter ? "bg-primary hover:opacity-70" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden relative bg-muted/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-on-scroll border border-gray-200 dark:border-gray-700">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent  transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="flex gap-4 translate-y-4  transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/20 hover:bg-secondary" asChild>
                      <Link className="text-white" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/20 hover:bg-secondary" asChild>
                      <Link className="text-white" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full border border-gray-600 hover:border-gray-400 transition-colors"
                    >
                      <Info className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl w-full h-[90vh] rounded-2xl backdrop-blur-md bg-zinc-900 text-zinc-100 p-6 md:p-8 overflow-hidden shadow-2xl border border-zinc-700">
                    {/* Header */}
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                        <AuroraText colors={["#00b49c", "#3071ffa2"]}>{project.title}</AuroraText>
                      </DialogTitle>
                      <DialogDescription className="text-base md:text-lg text-zinc-400 mt-2">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>

                    {/* Scrollable Content */}
                    <div className="space-y-10 overflow-y-scroll max-h-[65vh] pr-3 custom-scrollbar text-sm md:text-base">
                      {/* Overview */}
                      <section>
                        <h4 className="text-xl font-semibold mb-2 text-white">Project Overview</h4>
                        <p className="text-zinc-400 leading-relaxed whitespace-pre-line">{project.detailedDescription}</p>
                      </section>

                      {/* Features */}
                      <section>
                        <h4 className="text-xl font-semibold mb-2 text-white">Key Features</h4>
                        <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                          {project.features.map((feature, index) => (
                            <li key={index} className="leading-relaxed">{feature}</li>
                          ))}
                        </ul>
                      </section>

                      {/* Technologies */}
                      <section>
                        <h4 className="text-xl font-semibold mb-2 text-white">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-zinc-700 bg-zinc-800/40 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </section>
                    </div>
                  </DialogContent>
                </Dialog>


              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
