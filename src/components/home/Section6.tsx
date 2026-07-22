import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import SocialButton from "./ui/SocialButton";
import SpectrumFooter from "@/components/common/SpectrumFooter";
import socialLinks from "@/data/socialLinks";
import { personalInfo } from "@/data/personal";

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-screen items-center justify-center bg-dot-black/[0.05]"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Get in Touch</SectionTitle>

        <Column classNames="mt-16 w-full">
          <p className="text-center mx-auto mb-10 max-w-2xl text-base text-[var(--textColor)]/80">
            Prefer email or LinkedIn. {personalInfo.availability}
          </p>

          <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4">
            {socialLinks.map((link, index) => (
              <SocialButton
                key={`social-link-${index}`}
                name={link.name}
                text={link.text}
                icon={link.icon}
                url={link.url}
              />
            ))}
          </GridBox>

          <p className="text-center mx-auto mt-16 text-lg/6 font-medium text-[var(--textColor)]/70">
            Also open to select freelance full-stack and React Native work.
          </p>
        </Column>
      </ConstrainedBox>

      <SpectrumFooter />
    </ResponsiveBox>
  );
};

export default HomeSection6;
