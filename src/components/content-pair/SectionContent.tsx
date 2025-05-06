import { Button } from "@mui/material";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { BiMoney } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Content, ContentPairPrimaryProps } from "@/types/components/home";
import Link from "next/link";

const SectionContent = ({
  contentPairPrimaryData,
}: {
  contentPairPrimaryData: ContentPairPrimaryProps;
}) => {
  return (
    <div data-aos="fade-right" data-aos-duration="200" className="md:mt-16 ">
      {contentPairPrimaryData.content_headings[0]?.children[0].text && (
        <span className="text-sm lg:text-base font-bold  uppercase subpixel-antialiased bg-gradient-to-r text-transparent bg-clip-text inline-block from-[#E855DE] via-[#E855DE] to-[#5400EE]">
          {contentPairPrimaryData.content_headings[0].children[0].text}
        </span>
      )}

      {contentPairPrimaryData.content_headings[1]?.children[0].text && (
        <h2 className="text-xl md:text-2xl  font-bold uppercase subpixel-antialiased bg-gradient-to-r text-transparent bg-clip-text  from-[#E855DE] via-[#E855DE] to-[#5400EE]">
          {contentPairPrimaryData.content_headings[1].children[0].text}
        </h2>
      )}

      {contentPairPrimaryData.content_headings[2]?.children[0].text && (
        <p className="text-xs lg:text-sm text-foreground/90 mt-3 max-w-[410px] line-clamp-3">
          {contentPairPrimaryData.content_headings[2].children[0].text}
        </p>
      )}
      {contentPairPrimaryData.content && (
        <div className="space-y-4 mt-4">
          {contentPairPrimaryData.content.map(
            (item: Content, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`p-2 rounded-full `}>
                  {item.icon === "bimoney" ? (
                    <BiMoney className=" w-4 h-4 lg:w-5 lg:h-5 " />
                  ) : item.icon === "ciclock2" ? (
                    <CiClock2 className=" w-4 h-4 lg:w-5 lg:h-5" />
                  ) : (
                    <FaArrowAltCircleRight className=" w-4 h-4 lg:w-5 lg:h-5" />
                  )}
                </div>
                <div>
                  {item.heading && (
                    <h3 className="font-semibold md:font-medium !text-sm md:!text-base ">
                      {item.heading}
                    </h3>
                  )}
                  {item.text && (
                    <p className="font-normal text-foreground/90 text-xs  max-w-[420px] line-clamp-3">
                      {item.text}
                    </p>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      )}

      {contentPairPrimaryData.content_buttons && (
        <div className="flex gap-5 items-center   mt-8 md:mt-12">
          {contentPairPrimaryData.content_buttons.map((item, index) => {
            if (item.type === "transperent") {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="hover:underline uppercase !font-medium text-white  gap-2 flex items-center cursor-pointer !text-xs md:!text-sm"
                >
                  {item.label}
                  <IoIosArrowForward />
                </Link>
              );
            } else {
              return (
                <Button
                  key={index}
                  href={item.link}
                  variant="contained"
                  className="bg-gradient-to-r !font-medium from-[#E855DE] via-[#E855DE] to-[#5400EE] !rounded-full !text-xs md:!text-sm"
                >
                  {item.label}
                </Button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default SectionContent;
