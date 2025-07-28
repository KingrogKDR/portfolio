"use client";
import { Data } from "@/data/data";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const activeTabClasses =
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-slate-500";
  const inactiveTabClasses =
    "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground border-2 border-silver-custom shadow-sm shadow-gray-400";
  return (
    <div className="flex flex-col border border-silver-custom rounded-lg p-4 my-10 shadow-sm shadow-gray-400">
      <div className="flex justify-center space-x-4 my-6">
        <Button
          variant="default"
          onClick={() => setActiveTab("experience")}
          className={`w-[40%] px-6 py-4 rounded-md transition-colors duration-200 ${
            activeTab === "experience" ? activeTabClasses : inactiveTabClasses
          }`}
        >
          Experience
        </Button>
        <Button
          variant="default"
          onClick={() => setActiveTab("education")}
          className={`w-[40%] px-6 py-4 rounded-md transition-colors duration-200 ${
            activeTab === "education" ? activeTabClasses : inactiveTabClasses
          }`}
        >
          Education
        </Button>
      </div>
      <div className="min-h-[15.625vw] pt-4 px-12 bg-transparent text-card-foreground rounded-md shadow-inner">
        {activeTab === "experience" && (
          <div>
            <div className="relative pl-8">
              {Data.experienceData.map((item) => (
                <div key={item.id} className="mb-8 relative">
                  <div className="absolute lg:left-[-4.5vw] sm:left-[-9vw] max-sm:left-[-19vw] top-0 z-10 bg-card rounded-full overflow-hidden border-2 border-silver-custom flex items-center justify-center w-18 h-18">
                    <Image
                      src={item.icon}
                      alt={item.company}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="flex justify-between max-sm:grid items-center">
                      <h3 className="text-xl font-semibold max-sm:text-sm">
                        {item.title} - {item.company}
                      </h3>
                      <p className="text-sm text-muted-foreground max-sm:mt-2 max-sm:text-xs">
                        {item.duration}
                      </p>
                    </div>
                    {item.techStack && item.techStack.length > 0 && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-2">
                          {item.techStack.map((tech, i) => (
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
                    <ul className="list-disc list-inside text-base mt-2 space-y-1">
                      {item.description.map((desc, i) => (
                        <li key={i} className="mb-2 max-sm:text-[14px]">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div>
            <div className="relative pl-8">
              {Data.educationData.map((item) => (
                <div key={item.id} className="mb-8 relative">
                  <div className="absolute lg:left-[-4.1vw] md:left-[-4.7vw] max-md:left-[-10.5vw] max-sm:left-[-18vw] top-0 z-10 bg-card rounded-full overflow-hidden border-2 border-silver-custom flex items-center justify-center w-18 h-18">
                    <Image
                      src={item.icon}
                      alt={item.institution}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold max-sm:text-sm">
                      {item.title} - {item.institution}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 max-sm:text-xs">
                      {item.duration} | {item.result}
                    </p>
                    <ul className="list-disc list-inside text-base mt-2 space-y-1">
                      {item.description.map((desc, i) => (
                        <li key={i} className="mb-2 max-sm:text-[14px]">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
