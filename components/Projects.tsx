import  projectsData  from "@/projects.json";
import ProjectsList from "./ProjectsList";

export default async function Projects() {

  return (
    <section id="projects" className="py-20 md:py-32">
      <ProjectsList projects={projectsData} />
    </section>
  );
}
