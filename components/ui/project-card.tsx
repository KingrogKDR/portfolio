import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  isLightImage?: boolean;
  liveLink?: string;
  sourceLink: string;
  techStack: string[];
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  isLightImage,
  liveLink,
  sourceLink,
  techStack,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-sm relative group rounded-2xl overflow-hidden p-[1px] shadow-lg">
      <div className="absolute inset-[-2px] rounded-[17px] bg-gradient-to-br from-sky-500 via-amber-200 to-red-500 dark:bg-gradient-to-br dark:from-sky-400 dark:via-white dark:to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 animate-spin-slow"></div>
      <div className="relative z-10 h-48 sm:h-56 md:h-64 lg:h-72 w-full rounded-2xl overflow-hidden bg-card flex flex-col justify-between">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 rounded-2xl bg-black/50 transition-colors duration-300 group-hover:bg-black/60"></div>

        <CardHeader className="absolute top-0 left-0 z-20 p-4">
          <CardTitle
            className={`${isLightImage ? "text-black md:mt-2" : "text-slate-200"
              } text-lg font-bold whitespace-nowrap text-ellipsis`}
          >
            {title}
          </CardTitle>
        </CardHeader>

        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-white">
          <p className="text-xs sm:text-sm mb-4 line-clamp-3">{description}</p>
          {techStack && techStack.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 max-sm:text-[10px] text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <CardFooter className="flex text-sm gap-3 p-0 justify-start">
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-gradient-to-br from-gray-100 via-slate-300 to-gray-100 dark:from-slate-500 dark:via-gray-600 dark:to-neutral-700 text-accent-foreground transition-all whitespace-nowrap flex items-center gap-2 bg-[length:200%_auto] group-hover:bg-right hover:scale-105 hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faGlobe} />
                Live
              </Link>
            )}
            <Link
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-gradient-to-br from-gray-400 via-slate-500 to-gray-400 dark:from-slate-300 dark:via-gray-400 dark:to-gray-300
                         text-accent transition-all whitespace-nowrap flex items-center gap-2
                         bg-[length:200%_auto] group-hover:bg-right hover:scale-105 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faGithub} />
              Source Code
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
