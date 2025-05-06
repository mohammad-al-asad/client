import Image from "next/image";
import React from "react";
import banner from "@/../public/banner.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { MobileShowcaseProps } from "@/types/components/usertype1";
import { isOfType, isString } from "@/types/checker";

const MobileShowcaseBanner = ({ mobileShowcaseData }: MobileShowcaseProps) => {
  // Calculate the phone screen's position based on the provided position in mobileShowcaseData
  const phoneScreenStyle = ` ${
    mobileShowcaseData.position === "right"
      ? "md:!left-[auto]  md:right-32 md:!-top-32 md:-translate-y-[auto]"
      : ""
  }`;

  // Ensure the showcase image URL is valid
  if (!isOfType<string>(mobileShowcaseData.showcase_image.url, isString)) {
    return null; // Return null if URL is invalid
  }

  return (
    <section className="pt-22 lg:pt-32 w-full">
      <div className="relative">
        {/* Phone screen image */}
        <div
          className={`absolute top-1/2 left-[55%] -translate-y-1/2 -translate-x-1/2 ${phoneScreenStyle}`}
        >
          <Image
            width={600}
            height={600}
            alt="phone screen"
            className="scale-[.85] object-contain w-[200px] md:w-[250px] lg:w-[320px]"
            src={`${process.env.STRAPI_ADMIN}${mobileShowcaseData.showcase_image.url}`}
          />
        </div>

        {/* Banner image */}
        <Image
          sizes="100vw"
          width={0}
          height={0}
          src={
            mobileShowcaseData.showcase_banner?.url
              ? process.env.STRAPI_ADMIN +
                mobileShowcaseData.showcase_banner.url
              : banner // Fallback to the default banner if no banner URL is provided
          }
          alt="banner"
          className="w-full aspect-[8/2] object-cover"
        />
      </div>

      {/* Content below the banner */}
      <div className="container-c flex flex-col md:flex-row justify-between px-3 md:px-5 py-7 md:py-16 mt-16 md:mt-6">
        {/* Display the second text if available */}
        {mobileShowcaseData.showcase_texts[1]?.children[0].text && (
          <p className="text-xs md:max-w-[480px] mt-5 md:mt-0 order-2 md:order-1">
            {mobileShowcaseData.showcase_texts[1].children[0].text}
          </p>
        )}

        {/* Showcase the buttons and first text */}
        <div className="flex order-1 md:order-2 md:max-w-[380px]">
          <div>
            {/* Display the first text if available */}
            {mobileShowcaseData.showcase_texts[0]?.children[0].text && (
              <h5 className="text-sm font-medium uppercase">
                {mobileShowcaseData.showcase_texts[0].children[0].text}
              </h5>
            )}

            {/* Display buttons if any */}
            {mobileShowcaseData.showcase_buttons.length !== 0 &&
              mobileShowcaseData.showcase_buttons.map((item, index) => (
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
      </div>
    </section>
  );
};

export default MobileShowcaseBanner;
