"use client";
import React from "react";
import FindJob from "./FindJob";
import Categories from "./Categories"; // Fixed typo here
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const Jobs = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      axios
        .get(
          `${process.env.NEXT_PUBLIC_STRAPI_ADMIN}/api/categories?populate[jobs][fields][0]=job_title&populate[jobs][fields][1]=slug&populate[jobs][fields][2]=location`
        )
        .then((res) => res.data.data),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>; // Added error handling

  return (
    <section className="container-c lg:px-6 mt-20 md:mt-24 px-3">
      <FindJob categories={data} />
      <Categories categories={data} />
    </section>
  );
};

const queryClient = new QueryClient(); // Moved outside of the component for reuse

const JobQueryWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Jobs />
    </QueryClientProvider>
  );
};

export default JobQueryWrapper;
