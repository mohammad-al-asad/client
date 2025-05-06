import { HeroButton, HeroProps } from "@/types/components/home";
import { Button } from "@mui/material";
import React from "react";

const SectionContent = ({ heroData }: { heroData: HeroProps }) => {
  return (
    <div className="  flex flex-col  space-y-6" data-aos="fade-down">
      <div className="absolute dark:block hidden top-2 right-[200px] rotate-[184]  w-64 h-44 rounded-full bg-gradient-to-l from-[#E855DE] to-transparent blur-2xl opacity-60 "></div>

      <h1 className="text-3xl mt-0 md:mt-4 tracking-tighter relative md:text-4xl uppercase px-2 lg:px-4 text-center font-bold leading-tight subpixel-antialiased">
        {heroData.hero_texts[0].children[0].text}
      </h1>

      <p className="text-lg opacity-80 text-center px-2 lg:px-4">
        {heroData.hero_texts[1]?.children[0].text}
      </p>

      {heroData.checkbox.length !== 0 && (
        <div className="flex justify-center">
          {heroData.checkbox.map((item, index) => (
            <label key={index} className="checkbox-container ">
              <input type="checkbox" />
              <span className="checkmark"></span>
              {item.label}
            </label>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {heroData.hero_buttons.map((item: HeroButton, index: number) => {
          if (item.type == "transparent") {
            return (
              <Button
                href={item.link}
                key={index}
                variant="outlined"
                className="border !border-[#E855DE] !text-[#E855DE] hover:!bg-[#E855DE]/15 !rounded-full"
              >
                {item.label}
              </Button>
            );
          } else {
            return (
              <Button
                href={item.link}
                key={index}
                variant="contained"
                className="bg-gradient-to-r text-white font-semibold from-[#E855DE] via-[#E855DE] to-[#5400EE] !rounded-full !px-3 lg:!px-6"
              >
                {item.label}
              </Button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SectionContent;
