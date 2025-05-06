"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUsersRectangle } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import { FeaturesListProps } from "@/types/components/usertype1";

// FeaturesList component renders a swiper with cards
const FeaturesList = ({ featuresListData }: FeaturesListProps) => {
  // Return null if no features data is passed
  if (featuresListData.length === 0) return null;

  return (
    <section className="px-3 lg:px-6 paper mt-20 md:mt-24">
      {/* Swiper component to display a carousel of feature cards */}
      <Swiper spaceBetween={5} slidesPerView={"auto"} className="mySwiper">
        {featuresListData.map((item, index) => (
          // Each SwiperSlide wraps a Card component
          <SwiperSlide
            key={index}
            className="max-w-full md:max-w-[50%] lg:max-w-[25%]"
          >
            <Card blog={item.blog} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

// Card component displays individual feature with title and blog content
const Card = ({ blog, title }: { blog: string; title: string }) => {
  return (
    <div
      className="flex mx-auto cursor-default flex-col items-center text-center p-6 rounded-xl transition-all duration-300 container-c"
      data-aos="fade-up"
    >
      {/* Icon representing users or feature */}
      <FaUsersRectangle className="w-5 h-5" />
      <span className="text-sm my-2 font-medium">{title}</span>
      <p className="opacity-80 px-2 md:px-4 text-justify lg:px-6 text-xs">
        {blog}
      </p>
    </div>
  );
};

export default FeaturesList;
