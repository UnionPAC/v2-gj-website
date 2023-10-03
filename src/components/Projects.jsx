import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="h-[100dvh] snap-center">
      <div>
        <h2>Title</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta qui
          autem voluptas perferendis harum. Molestias magnam ipsam voluptatem
          rerum dicta impedit, obcaecati exercitationem. Ab nihil perferendis
          tenetur nostrum voluptatum porro?
        </p>
      </div>
      <div id="cards-container">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
