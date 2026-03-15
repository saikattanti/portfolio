import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectList from "./ui/ProjectList";
import projects from "@/data/projects";

const HomeSection5 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] bg-grid-black/[0.05] items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-20">
        <SectionTitle>Recent Works</SectionTitle>
        <p className="mt-4 text-center text-[var(--textColorLight)] max-w-2xl mx-auto text-sm md:text-base">
          Selected projects with production-ready architecture, clean UX, and measurable outcomes.
        </p>

        <ProjectList projects={projects} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
