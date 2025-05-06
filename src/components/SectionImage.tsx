/* eslint-disable @next/next/no-img-element */
import React from "react";

const SectionImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative h-[300px] mt-0 md:mt-6 md:h-[400px] overflow-hidden rounded-xl">
      <img
        data-aos="fade-up"
        data-aos-duration="200"
        src={src}
        alt={alt || "Image"}
        className="w-full h-full object-cover object-top rounded-xl transform  transition-transform duration-500"
      />
    </div>
  );
};

export default SectionImage;
