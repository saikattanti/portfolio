import type { IExperienceItem } from "@/types";
import Column from "@/components/core/Column";
import BulletedText from "@/components/common/bulleted-text";

const ExperienceItem = ({ data }: { data: IExperienceItem }) => {
  return (
    <Column classNames="justify-between w-full h-full gap-2">
      <Column classNames="justify-start">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <p className="text-lg/6 font-semibold">{data.designation}</p>
          {data.badges && data.badges.map((badge, i) => (
            <span key={i} className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium">
              {badge}
            </span>
          ))}
        </div>

        <p className="text-[var(--textColorLight)] text-base/6 font-medium">
          @{data.company}
        </p>
      </Column>

      <div className="w-full flex flex-col gap-2 relative mt-0 md:mt-4">
        {data.description.map((desc, i) => {
          return (
            <BulletedText key={`exp-desc-${i}`}>
              <p className="text-base/6 font-normal">{desc}</p>
            </BulletedText>
          );
        })}
      </div>

      {data.techStack && data.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {data.techStack.map((tech, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/10 text-xs font-medium text-[var(--textColor)]">
              {tech}
            </span>
          ))}
        </div>
      )}
    </Column>
  );
};

export default ExperienceItem;
