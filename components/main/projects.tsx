import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {PROJECTS.map((project) => (
          <div key={project.title} className="flex justify-center perspective">
            <div className="card-3d">
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
