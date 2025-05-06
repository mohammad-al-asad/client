/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useJobSearch } from "@/lib/store.zustand";
import { IoIosClose } from "react-icons/io";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

const FindJob = ({ categories }: { categories: any }) => {
  // const searchParam = useSearchParams().get("search");
  const [searchValue, setSearchvalue] = useState("");
  const {
    search,
    location,
    category,
    setSearch,
    setCategory,
    setLocation,
    setResetSearch,
  } = useJobSearch((state) => state);
  // const url = new URL(location);

  // useEffect(() => {
  //   if (search.length == 0) {
  //     url.searchParams.delete("search");
  //   } else {
  //     url.searchParams.set("search", search);
  //   }
  //   history.pushState({}, "", url);
  // }, [search]);

  // useEffect(() => {
  //   if (searchParam) setSearch(searchParam);
  // }, [searchParam]);

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  useEffect(() => {
    setSearchvalue(search);
  }, [search]);

  const findLocations = () => {
    const locations = [];
    for (let category in categories) {
      for (let job in categories[category].jobs) {
        locations.push(categories[category].jobs[job].location);
      }
    }

    return locations;
  };

  const findCategories = () => {
    const categoryNames = categories.map((category: any) => {
      return category.name;
    });
    return categoryNames;
  };

  const locations = findLocations();
  const categoryNames = findCategories();

  return (
    <div>
      <div className="relative">
        <input
          value={searchValue}
          placeholder="Openings"
          onChange={(e) => setSearchvalue(e.target.value)}
          className="w-full text-lg lg:text-2xl text-black dark:text-[#ddd] font-semibold placeholder:text-pink-400/80 p-4 lg:px-8 lg:py-5 border-b border-b-indigo-400 focus:outline-1 focus:outline-black dark:focus:outline-white focus-visible::outline-1 visible:outline-black dark:visible:outline-black"
        />
        <CiSearch className="w-5 h-5 lg:w-8 lg:h-8 text-indigo-400 absolute top-1/2 -translate-y-1/2 right-2" />
      </div>
      <div className="flex justify-between items-center mt-5 lg:mt-7 mb-7 lg:mb-10">
        <span className="text-xs lg:text-sm text-inherit">Filter By</span>
        <div className="flex gap-2 lg:gap-5">
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="w-[150px] lg:w-[180px] !bg-transparent border text-foreground border-white/50 dark:border-white/15">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              {categoryNames.map((categoryName: any, i: number) => (
                <SelectItem
                  value={categoryName}
                  key={i}
                  className="hover:bg-red-600"
                >
                  {categoryName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setLocation(value)}>
            <SelectTrigger className="w-[150px] lg:w-[180px] !bg-transparent border text-foreground border-white/50 dark:border-white/15">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              {locations.map((location, i) => (
                <SelectItem key={i} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(location || search || category) && (
            <Button
              onClick={setResetSearch}
              className="bg-transparent border text-foreground hover:bg-transparent cursor-pointer"
            >
              <span className="hidden md:block">Reset</span>{" "}
              <IoIosClose className="md:hidden" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindJob;
