import { Data } from "@/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsSection = () => {
  return (
    <div className="min-w-md mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="relative flex items-center justify-center w-full">
        <div className="flex-grow h-[2px] bg-gray-400 dark:bg-gray-600 mr-4 max-w-[6.25vw] sm:max-w-[9.375vw] lg:max-w-[13.021vw]" />

        <div className="bg-gradient-to-br from-orange-400 to-gray-600 dark:bg-gradient-to-br dark:from-red-200 dark:to-slate-700 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl z-10 whitespace-nowrap">
          Skills
        </div>

        <div className="flex-grow h-[2px] bg-gray-400 dark:bg-gray-600 ml-4 max-w-[6.25vw] sm:max-w-[9.375vw] lg:max-w-[13.021vw]" />
      </div>
      <div className="mt-3 max-sm:mx-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {Data.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gradient-to-br to-slate-400 dark:bg-gradient-to-br dark:from-gray-500 dark:to-slate-800 max-sm:text-[10px] text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
            >
              {skill.icon && (
                <FontAwesomeIcon icon={skill.icon} className="text-base" />
              )}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
