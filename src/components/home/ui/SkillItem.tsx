import type { ISkillListItem } from "@/types";
import Image from "next/image";
import CardBox from "@/components/core/CardBox";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";

const SkillItem = ({ data }: { data: ISkillListItem }) => {
  return (
    <CardBox classNames="p-4 items-center justify-start rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] w-full group">
      <p className="text-lg/6 font-semibold text-center">{data.title}</p>

      {data.items.length > 0 ? (
        <Row classNames="gap-4 mt-8 flex-wrap justify-center items-center">
          {data.items.map((skill, index) => {
            return (
              <Column
                key={`skill-item-${index}`}
                classNames="items-center gap-1 text-[var(--textColor)]"
              >
                {skill.icon ? (
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={56}
                    height={56}
                    loading="lazy"
                    unoptimized={skill.icon.endsWith(".svg")}
                    className="w-12 lg:w-14 h-12 lg:h-14 object-contain"
                  />
                ) : null}

                <p className="text-xs/6 font-normal text-center max-w-[7rem]">
                  {skill.title}
                </p>
              </Column>
            );
          })}
        </Row>
      ) : null}
    </CardBox>
  );
};

export default SkillItem;
