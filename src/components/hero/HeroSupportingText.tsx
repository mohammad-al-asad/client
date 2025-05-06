import { isOfType, isString } from "@/types/checker";
import { HeroSupportingTextProps } from "@/types/components/usertype1";
import React from "react";

const HeroSupportingText = ({
  heroSupportingTextData,
}: HeroSupportingTextProps) => {
  if (
    heroSupportingTextData.length === 0 ||
    !isOfType<string>(heroSupportingTextData[0].children[0].text, isString)
  ) {
    return null;
  }
  return (
    <div className="px-2 md:px-8 mt-20 md:mt-24 text-center">
      <h3 className="max-w-[80%] mx-auto text-lg lg:text-xl  font-semibold">
        {heroSupportingTextData[0].children[0].text}
      </h3>
      {heroSupportingTextData[1]?.children[0]?.text && (
        <p className="text-xs lg:text-sm mt-1 max-w-[95%] md:max-w-[85%] lg:max-w-[75%] mx-auto text-center">
          {heroSupportingTextData[1].children[0].text}
        </p>
      )}
    </div>
  );
};

export default HeroSupportingText;
