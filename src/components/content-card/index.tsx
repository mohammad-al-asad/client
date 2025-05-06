import React from "react";

import banner from "@/../public/banner.jpg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { ContentCardProps } from "@/types/components/usertype2";

const ContentCard = ({ contentCardData }: ContentCardProps) => {
  console.log({ contentCardData });
  return (
    <div className="container-c py-4 lg:py-6 ">
      <Image
        src={banner}
        alt="banner"
        className="w-full aspect-[10/2] object-cover"
      />

      <div className="my-3 lg:my-6 ">
        {contentCardData.card_texts[0].children[0].text && (
          <h3 className="text-lg md:text-xl font-semibold uppercase mb-2">
            {contentCardData.card_texts[0].children[0].text}
          </h3>
        )}
        {contentCardData.card_texts[1].children[0].text && (
          <p className="text-xs lg:text-sm max-w-[80%]">
            {contentCardData.card_texts[1].children[0].text}
          </p>
        )}

        {contentCardData?.card_buttons?.length !== 0 &&
          contentCardData.card_buttons?.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="mt-5 uppercase hover:underline text-sm gap-2 flex items-center cursor-pointer"
            >
              {item.label} <IoIosArrowForward />
            </a>
          ))}
      </div>
    </div>
  );
};

export default ContentCard;
