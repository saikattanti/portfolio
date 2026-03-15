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
      className="group relative h-full min-h-[18.5rem] rounded-2xl overflow-hidden bg-white/70 dark:bg-black/15 border border-black/10 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(37,99,235,0.45)] shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 h-full flex flex-col p-5">

        {/* Header Section */}
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Image
              src={project.icon}
              alt={`${project.title} icon`}
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--textColor)] mb-1 group-hover:text-[var(--primaryColor)] transition-all duration-300 line-clamp-1">
              {project.title}
            </h3>

            <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border transition-all duration-300 ${project.repoType === RepoType.Private
                ? "text-red-600 border-red-600/30 bg-red-600/10"
                : "text-emerald-600 border-emerald-600/30 bg-emerald-600/10"
              }`}>
              <div className={`w-1 h-1 rounded-full mr-1 ${project.repoType === RepoType.Private ? "bg-red-600" : "bg-emerald-600"
                } ${isHovered ? 'animate-pulse' : ''}`} />
              {project.repoType === RepoType.Private ? "Private" : "Public"}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 mb-4">
          <p className="text-[var(--textColorLight)] text-sm leading-relaxed line-clamp-4 group-hover:text-[var(--textColor)] transition-colors duration-300">
            <Balancer>{project.description}</Balancer>
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-1.5 max-h-12 overflow-hidden">
            {project.tags?.slice(0, 4).map((tag, index) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium rounded-md bg-black/5 border border-black/10 text-[var(--textColor)] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
            {project.tags && project.tags.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-black/5 border border-black/10 text-[var(--textColor)]">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-black/5 border border-black/10 text-[var(--textColor)] hover:bg-black/10 transition-all duration-300 group/btn"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200"
              />
              <span className="text-sm font-medium">Code</span>
            </Link>
          )}

          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[var(--primaryColor10)] border border-[var(--primaryColor30)] text-[var(--primaryColor)] hover:bg-[var(--primaryColor20)] transition-all duration-300 group/btn"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200"
              />
              <span className="text-sm font-medium">Live</span>
            </Link>
          )}
        </div>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
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
