import React from "react";

import SectionImage from "../SectionImage";
import SectionContent from "./SectionContent";

import { ContentPairPrimaryProps } from "@/types/components/home";
import { isOfType, isString } from "@/types/checker";

const ContentPair = ({
  contentPairData,
  isBgShow = false,
}: {
  contentPairData: ContentPairPrimaryProps;
  isBgShow?: boolean;
}) => {
  // Validate content pair data: must have headings and a valid image URL
  if (
    contentPairData?.content_headings.length === 0 ||
    !isOfType<string>(contentPairData.content_image.url, isString)
  ) {
    return null;
  }

  // Determine layout based on the 'orientation' field
  if (contentPairData.orientation === "right") {
    return (
      <div className={`  ${isBgShow && "section-bg"} mt-20 md:mt-24`}>
        <section className={`section container-c`}>
          {/* Content first, Image second */}
          <SectionContent contentPairPrimaryData={contentPairData} />
          <SectionImage
            src={`${process.env.STRAPI_ADMIN}${contentPairData.content_image.url}`}
            alt="Analytics Dashboard"
          />
        </section>
      </div>
    );
  } else {
    return (
      <div className={`  ${isBgShow && "section-bg"} mt-20 md:mt-24`}>
        <section className={`section  container-c`}>
          {/* Image first, Content second */}
          <SectionImage
            src={`${process.env.STRAPI_ADMIN}${contentPairData.content_image.url}`}
            alt="Analytics Dashboard"
          />
          <SectionContent contentPairPrimaryData={contentPairData} />
        </section>
      </div>
    );
  }
};

export default ContentPair;
