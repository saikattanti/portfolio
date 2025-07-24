"use client";

import { createRef } from "react";
import { IProjectItem } from "@/types";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement>();

  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  };

  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  };

  return (
    <div className="w-full mt-12">
      {/* Scrollable Projects Container */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {projects.map((item, index) => {
          return (
            <div
              key={`project-item-${index}`}
              className="flex-shrink-0"
              style={{
                animation: `slideInFromRight 0.5s ease-out ${index * 0.08}s both`
              }}
            >
              <ProjectItem project={item} />
            </div>
          );
        })}
      </div>

      {/* Compact Navigation Buttons */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          type="button"
          onClick={_handleOnClickPrev}
          className="group flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300"
        >
          <svg 
            className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Prev</span>
        </button>

        <button
          type="button"
          onClick={_handleOnClickNext}
          className="group flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 hover:text-white hover:border-blue-400/50 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
        >
          <span className="text-sm font-medium">Next</span>
          <svg 
            className="w-4 h-4 ml-1.5 group-hover:scale-110 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectList;
