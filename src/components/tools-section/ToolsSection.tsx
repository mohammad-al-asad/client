import React from "react";
import SectionContent from "./SectionContent";
import { ToolSectionProps } from "@/types/components/home";
import { isOfType, isString } from "@/types/checker";

const ToolsSection = ({
  toolsSectionData,
}: {
  toolsSectionData: ToolSectionProps;
}) => {
  // Validate tools section data: must have tools and a valid heading
  if (
    toolsSectionData?.tool.length === 0 ||
    !isOfType<string>(toolsSectionData.heading, isString)
  ) {
    return null; // Return null if validation fails
  }

  return (
    <section className=" container-c mt-20 md:mt-24">
      <div className="flex flex-col px-3">
        {/* Display heading with gradient text */}
        <span className="text-xl uppercase lg:text-2xl font-bold subpixel-antialiased bg-gradient-to-r text-transparent bg-clip-text from-[#E855DE] via-[#E855DE] to-[#5400EE]">
          {toolsSectionData.heading}
        </span>

        {/* Display description if available */}
        {toolsSectionData.description && (
          <p className="mt-2 text-sm font-semibold subpixel-antialiased bg-gradient-to-r text-transparent bg-clip-text from-[#E855DE] via-[#E855DE] to-[#5400EE]">
            {toolsSectionData.description}
          </p>
        )}
      </div>
      {/* Render the SectionContent component, passing the tools section data */}
      <SectionContent toolsSectionData={toolsSectionData} />
    </section>
  );
};

export default ToolsSection;
