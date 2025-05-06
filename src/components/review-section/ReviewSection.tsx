"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Avatar } from "@radix-ui/react-avatar";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReviewSectionProps } from "@/types/components/home";

import "swiper/css";
import "swiper/css/pagination";

const ReviewSection = ({
  reviewSectionData,
}: {
  reviewSectionData: ReviewSectionProps[];
}) => {
  const SERVER_URL = process.env.NEXT_PUBLIC_STRAPI_ADMIN;

  // If no reviews, don't render the section
  if (reviewSectionData.length === 0) return null;

  return (
    <section className=" paper mt-20 md:mt-24">
      <Swiper spaceBetween={5} slidesPerView={"auto"} className="mySwiper">
        {reviewSectionData.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" max-w-full md:max-w-[50%] lg:max-w-[25%]"
          >
            <Card
              blog={item.blog}
              athorName={item.author_name}
              profile={SERVER_URL + item.profile.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const Card = ({
  profile,
  blog,
  athorName,
}: {
  profile: string;
  blog: string;
  athorName: string;
}) => {
  return (
    <div>
      <div
        className="flex mx-auto cursor-default flex-col items-center text-center p-6 rounded-xl transition-all duration-300 container-c"
        data-aos="fade-up"
      >
        <Avatar className="w-24 h-24 mb-4">
          <Image
            width={100}
            height={100}
            src={profile}
            alt="blog"
            className="object-cover rounded-full w-full h-full"
          />
        </Avatar>

        {/* Review content */}
        <p className="opacity-80 px-2 md:px-4 lg:px-6 text-justify text-xs">
          {blog}
        </p>

        {/* Author name */}
        <Link
          href="#"
          className="text-sm truncate text-center block mt-4 font-semibold"
        >
          {athorName}
        </Link>
      </div>
    </div>
  );
};

export default ReviewSection;
