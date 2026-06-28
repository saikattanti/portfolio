import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import education from "@/data/education";
import Column from "@/components/core/Column";

const SectionEducation = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Education</SectionTitle>

        <Timeline
          data={education.map((edu, i) => ({
            title: edu.year || edu.duration || "",
            content: (
              <Column key={`edu-${i}`} classNames="justify-start gap-2">
                <p className="text-lg/6 font-semibold">{edu.degree}</p>
                <p className="text-[var(--textColorLight)] text-base/6 font-medium">
                  {edu.institution} {edu.location ? `— ${edu.location}` : ""}
                </p>
                
                {edu.status && (
                  <p className="text-sm/6 text-[var(--primaryColor)] font-medium mt-1">
                    {edu.status}
                  </p>
                )}
                
                <div className="flex gap-4 mt-2">
                  {edu.cgpa && (
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                  {edu.percentage && (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-sm font-medium">
                      Percentage: {edu.percentage}
                    </span>
                  )}
                </div>
                
                {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.relevantCoursework.map((course, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/10 text-xs font-medium text-[var(--textColor)]">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </Column>
            ),
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default SectionEducation;
