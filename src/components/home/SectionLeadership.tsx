import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import { leadership, hackathons } from "@/data/leadership";
import Column from "@/components/core/Column";
import BulletedText from "@/components/common/bulleted-text";

const SectionLeadership = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] bg-grid-black/[0.05] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Leadership & Community</SectionTitle>

        <Timeline
          data={leadership.map((item, i) => ({
            title: item.duration,
            content: (
              <Column key={`leadership-${i}`} classNames="justify-start gap-2">
                <p className="text-lg/6 font-semibold">{item.role}</p>
                <p className="text-[var(--textColorLight)] text-base/6 font-medium">
                  {item.organization}
                </p>
                <div className="mt-4">
                  <BulletedText>
                    <p className="text-base/6 font-normal">{item.description}</p>
                  </BulletedText>
                </div>
              </Column>
            ),
          }))}
        />

        <div className="mt-16">
          <SectionTitle>Hackathons & Competitions</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {hackathons.map((hackathon, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/70 dark:bg-black/15 border border-black/10 shadow-sm flex flex-col gap-2 hover:border-blue-400/40 transition-colors">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-semibold text-lg leading-tight">{hackathon.name}</h3>
                  <span className="text-xs font-medium text-gray-500 whitespace-nowrap">{hackathon.year}</span>
                </div>
                <p className="text-sm font-medium text-[var(--primaryColor)]">{hackathon.result}</p>
                <p className="text-sm text-[var(--textColorLight)] mt-2">{hackathon.project}</p>
              </div>
            ))}
          </div>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default SectionLeadership;
