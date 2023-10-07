import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="max-w-[60em] mx-auto py-24 px-4">
      <div className="flex flex-col items-center justify-center text-center py-16">
        <p className="mb-6 lg:text-lg text-primary tracking-wide">
          A view of my previous work
        </p>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-6">
          Some <span className="text-accent">projects</span> I've built 🏗️
        </h3>
      </div>
      <div
        id="cards-container"
        className="flex flex-col justify-center items-center xl:flex-row"
      >
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
