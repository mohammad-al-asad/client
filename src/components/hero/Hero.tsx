import React from "react";

import SectionImage from "@/components/SectionImage";
import SectionContent from "./SectionContent";

import { HeroProps } from "@/types/components/home";
import { isOfType, isString } from "@/types/checker";

const Hero = ({ heroData }: { heroData: HeroProps }) => {
  // Validate hero data: must have hero texts and a valid image URL
  if (
    heroData.hero_texts.length === 0 ||
    !isOfType<string>(heroData.hero_image.url, isString)
  ) {
    return null;
  } else {
    return (
      <>
        {/* Top left glowing background element (only in dark mode) */}
        <div className="absolute dark:block hidden top-1/2 left-10 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-purple-400 to-transparent blur-xl opacity-70 animate-pulse"></div>

        {/* Main hero section with image and content */}
        <section className="section container-c !items-start">
          <SectionImage
            src={`${process.env.STRAPI_ADMIN}${heroData.hero_image.url}`}
            alt="Digital Platform Interface"
          />
          <SectionContent heroData={heroData} />
        </section>

        {/* Bottom right glowing background element (only in dark mode) */}
        <div className="absolute dark:block hidden top-[70%] right-10 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-l from-indigo-400 to-transparent blur-2xl opacity-60 animate-pulse delay-150"></div>
      </>
    );
  }
};

export default Hero;
