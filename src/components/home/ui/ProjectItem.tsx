"use client";

import { RepoType, type IProjectItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative min-w-[calc(100%-2rem)] sm:min-w-[18rem] md:min-w-[20rem] h-[24rem] rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col p-4">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Image
              src={project.icon}
              alt={`${project.title} icon`}
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-base font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            
            <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border transition-all duration-300 ${
              project.repoType === RepoType.Private
                ? "text-red-400 border-red-400/30 bg-red-400/10"
                : "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
            }`}>
              <div className={`w-1 h-1 rounded-full mr-1 ${
                project.repoType === RepoType.Private ? "bg-red-400" : "bg-emerald-400"
              } ${isHovered ? 'animate-pulse' : ''}`} />
              {project.repoType === RepoType.Private ? "Private" : "Public"}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 mb-4">
          <Balancer>
            <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
              {project.description}
            </p>
          </Balancer>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5 max-h-12 overflow-hidden">
            {project.tags?.slice(0, 4).map((tag, index) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium rounded-md bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
            {project.tags && project.tags.length > 4 && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 text-gray-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 group/btn"
            >
              <FontAwesomeIcon 
                icon={faGithub} 
                className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200" 
              />
              <span className="text-xs font-medium">Code</span>
            </Link>
          )}
          
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 hover:text-white hover:border-blue-400/50 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 group/btn"
            >
              <FontAwesomeIcon 
                icon={faArrowUpRightFromSquare} 
                className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200" 
              />
              <span className="text-xs font-medium">Live</span>
            </Link>
          )}
        </div>

        {/* Hover Effect Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProjectItem;
