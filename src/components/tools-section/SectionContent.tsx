import React from "react";
import Marquee from "react-fast-marquee";
import { ToolSectionProps } from "@/types/components/home";
import Image from "next/image";

const SectionContent = ({
  toolsSectionData,
}: {
  toolsSectionData: ToolSectionProps;
}) => {
  return (
    <div className="py-12">
      <div className="hidden md:grid  grid-cols-5 justify-between items-center">
        {toolsSectionData.tool.map((d, i) => (
          <Card
            key={i}
            headerTitle={d.tool_information.headerTitle}
            footerTag={d.tool_information.footerTag}
            footerTitle={d.tool_information.headerTitle}
            img={process.env.STRAPI_ADMIN + d.tool_image.url}
          />
        ))}
      </div>
      <div className="grid md:hidden ">
        <Marquee className="grid-cols-3 justify-between items-center">
          {toolsSectionData.tool.map((d, i) => (
            <Card
              key={i}
              headerTitle={d.tool_information.headerTitle}
              footerTag={d.tool_information.footerTag}
              footerTitle={d.tool_information.headerTitle}
              img={process.env.STRAPI_ADMIN + d.tool_image.url}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const Card = ({
  headerTitle,
  img,
  footerTitle,
  footerTag,
}: {
  headerTitle: string;
  img: string;
  footerTitle: string;
  footerTag: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="text-center min-w-[250px]">
      <h5 className="text-sm md:text-base uppercase mb-2 font-semibold">
        {headerTitle}
      </h5>
      <Image
        alt="tool"
        src={img}
        width={100}
        height={100}
        className="mx-auto rounded-full p-1"
      />
      {/* <div className="flex justify-center mt-2">{icon}</div> */}
      <div className="my-2">
        <span className="text-sm font-medium uppercase">{footerTitle}</span>
        <br />
        <span className="text-xs font-semibold text-inherit/75">
          {footerTag}
        </span>
      </div>
    </div>
  );
};

export default SectionContent;
