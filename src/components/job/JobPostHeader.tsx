import React from "react";
import logo from "@/../public/logo.png";
import Image from "next/image";

interface JobPostHeaderProps {
  job_title: string;
  location: string;
}

const JobPostHeader = ({ job_title, location }: JobPostHeaderProps) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-4 md:py-6 lg:py-12">
        <Image
          src={logo}
          className="w-[55px] lg:w-[60px] h-auto mx-auto"
          alt="logo"
        />
        <h2 className="text-3xl text-center px-2 md:px-3 lg:px-4 lg:text-4xl font-bold text-foreground my-3 lg:mt-8 lg:mb-6">
          {job_title}
        </h2>
        <span className="text-base lg:text-lg font-normal text-foreground ">
          {location}
        </span>
      </div>
    </div>
  );
};

export default JobPostHeader;
