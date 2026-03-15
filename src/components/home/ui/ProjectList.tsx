"use client";

import { IProjectItem } from "@/types";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  return (
    <div className="w-full mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((item, index) => {
          return (
            <div
              key={`project-item-${index}`}
              className="h-full"
              style={{
                animation: `fadeUp 0.45s ease-out ${index * 0.07}s both`
              }}
            >
              <ProjectItem project={item} />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectList;
