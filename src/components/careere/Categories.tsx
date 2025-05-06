/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useJobSearch } from "@/lib/store.zustand";
const Catigories = ({ categories }: { categories: any }) => {
  const [storeCategories, setStoreCategories] = useState<any>();
  const { search, location, category } = useJobSearch((state) => state);

  useEffect(() => {
    if (categories) {
      setStoreCategories(categories);
    }
  }, [categories]);

  useEffect(() => {
    if (search || location || category) {
      setStoreCategories(() => {
        let newState = [...categories];
        if (category) {
          const regex = new RegExp(category, "i");
          newState = newState.filter((category) => regex.test(category.name));
        }
        if (search) {
          newState = newState.map((category) => {
            const newCategory = { ...category };
            const regex = new RegExp(search, "i");
            const jobs = newCategory.jobs.filter((job: any) =>
              regex.test(job?.job_title)
            );
            newCategory.jobs = jobs;
            return newCategory;
          });
        }
        if (location) {
          newState = newState.map((category) => {
            const newCategory = { ...category };
            const regex = new RegExp(location, "i");
            const jobs = newCategory.jobs.filter((job: any) =>
              regex.test(job?.location)
            );
            newCategory.jobs = jobs;
            return newCategory;
          });
        }

        return newState;
      });
    } else {
      setStoreCategories(categories);
    }
  }, [search, location, category]);

  return (
    <div className="py-4">
      {storeCategories?.map((category: any, i: number) => {
        if (category.jobs.length == 0) return null;
        return (
          <div key={i}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-foreground " />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="!border-b !border-b-foreground  !py-2"
              >
                <Typography
                  component="span"
                  className="!text-foreground !text-lg lg:text-2xl !font-semibold lg:!font-bold"
                >
                  {category.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {category.jobs.map((job: any, j: number) => (
                  <div key={j} className="my-3 lg:,y-5">
                    <Link href={`/job/${job.slug}`}>
                      <span className="text-sm font-medium text-foreground block">
                        {job.job_title}
                      </span>
                      <span className="text-xs font-normal mt-2 text-[#222] dark:text-[#ddd]">
                        {job.location}
                      </span>
                    </Link>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};

export default Catigories;
