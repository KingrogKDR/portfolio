import { Data } from "@/data/data";
import { ProjectCard } from "./ui/project-card";

const ProjectSection = () => {
  return (
    <div className="min-w-md w-full mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="relative flex items-center justify-center w-full">
        <div className="flex-grow h-[2px] bg-gray-400 dark:bg-gray-600 mr-4 max-w-[6.25vw] sm:max-w-[9.375vw] lg:max-w-[13.021vw]" />

        <div className="bg-gradient-to-br from-orange-400 to-gray-600 dark:bg-gradient-to-br dark:from-red-200 dark:to-slate-700 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl z-10 whitespace-nowrap">
          Projects
        </div>

        <div className="flex-grow h-[2px] bg-gray-400 dark:bg-gray-600 ml-4 max-w-[6.25vw] sm:max-w-[9.375vw] lg:max-w-[13.021vw]" />
      </div>
      <div className="mt-3 max-sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center">
          {Data.projectsData.map((project, i) => (
            <ProjectCard
              key={project.id + i}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              liveLink={project.liveLink}
              sourceLink={project.sourceLink}
              isLightImage={project.isLight}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
