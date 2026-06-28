import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { personalInfo } from "@/data/personal";

const SectionAbout = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] bg-grid-black/[0.05] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-8">
          <div className="flex-1 text-lg leading-relaxed text-[var(--textColor)] space-y-6">
            <p>{personalInfo.longBio}</p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform">
              <span className="text-4xl font-bold text-[var(--primaryColor)] mb-2">{personalInfo.stats.yoe}</span>
              <span className="text-sm font-medium text-[var(--textColorLight)]">Years of Experience</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform">
              <span className="text-4xl font-bold text-[var(--primaryColor)] mb-2">{personalInfo.stats.users}</span>
              <span className="text-sm font-medium text-[var(--textColorLight)]">Play Store Users</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform">
              <span className="text-4xl font-bold text-[var(--primaryColor)] mb-2">{personalInfo.stats.projects}</span>
              <span className="text-sm font-medium text-[var(--textColorLight)]">Production Projects</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform">
              <span className="text-4xl font-bold text-[var(--primaryColor)] mb-2">{personalInfo.stats.engineersLed}</span>
              <span className="text-sm font-medium text-[var(--textColorLight)]">Engineers Led</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform">
              <span className="text-4xl font-bold text-[var(--primaryColor)] mb-2">{personalInfo.stats.githubRepos}</span>
              <span className="text-sm font-medium text-[var(--textColorLight)]">GitHub Repositories</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform">
              <span className="text-4xl font-bold text-[var(--primaryColor)] mb-2">{personalInfo.stats.contributions}</span>
              <span className="text-sm font-medium text-[var(--textColorLight)]">Contributions (Last Year)</span>
            </div>
          </div>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default SectionAbout;
