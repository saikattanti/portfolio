import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] bg-grid-black/[0.05] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center gap-8 md:gap-12 lg:gap-16">

          {/* Left Column: Text & Actions */}
          <Column classNames="w-full md:w-1/2 items-center md:items-start justify-center">
            <div className="inline-flex items-center flex-wrap justify-center md:justify-start">
              <p className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal xl:text-6xl/normal text-[var(--textColor)] font-bold text-center md:text-left">
                Hi there, I am
              </p>
              <FlipWords
                words={["Saikat Tanti.", "@saikattanti.dev"]}
                className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal xl:text-6xl/normal text-[var(--primaryColor)] font-bold text-center md:text-left pl-2"
              />
            </div>
            <p className="text-sm/normal md:text-base/normal text-[var(--textColorLight)] mt-4 text-center md:text-left">
              Full Stack Developer 💻 Cyber Security 🛡️ Graphics Design 🎨 SEO Enthusiast 🔍
            </p>

            <div className="gap-4 mt-8 flex flex-col sm:flex-row">
              <TalkButton />
            </div>

            <div className="mt-8 lg:mt-12 w-full flex flex-col items-center md:items-start">
              <p className="text-base/6 font-medium text-[var(--textColor)]">Follow me here</p>

              <Row classNames="mt-2 gap-2">
                {socialLinks.slice(0, 5).map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)] hover:!bg-[var(--primaryColor)] hover:!border-[var(--primaryColor)] group"
                      aria-label={`${link.name}`}
                    >
                      <span className="text-base/6 text-[var(--textColor)] group-hover:text-white transition-colors duration-300">
                        {typeof link.icon === "string" ? null : (
                          <FontAwesomeIcon icon={link.icon} />
                        )}
                      </span>
                    </Link>
                  );
                })}
              </Row>
            </div>
          </Column>

          {/* Right Column: Profile Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--whiteColor)] shadow-2xl">
              <Image
                src="/my-image.png"
                alt="Saikat Tanti Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
