import { getProjects } from "@/lib/action";
import ProjectsList from "./ProjectsList";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-20 md:py-32">
      <ProjectsList projects={projects} />
    </section>
  );
}
