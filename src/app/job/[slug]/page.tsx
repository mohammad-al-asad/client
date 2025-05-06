/* eslint-disable @typescript-eslint/no-explicit-any */

import LogRocket from "logrocket";
import React from "react";

import JobPostContent from "@/components/job/JobPostContent";
import JobPostHeader from "@/components/job/JobPostHeader";
import ServerError from "@/components/ServerError";

const jobData = async (slug: string): Promise<any | { error: true }> => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_ADMIN}/api/jobs?filters[slug][$eq]=${slug}&pLevel=4`,
      { next: { revalidate: 10 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch job data");
    }

    const data = (await response.json()).data[0];
    return data;
  } catch (error: any) {
    LogRocket.captureException(error);
    return { error: true };
  }
};

type Params = Promise<{ slug: string }>;

const Job = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const data = await jobData(slug);

  if (data.error) {
    return <ServerError />;
  }

  return (
    <div className="max-w-[90%] md:max-w-[60%] lg:max-w-[50%] mx-auto">
      <JobPostHeader job_title={data.job_title} location={data.location} />
      <JobPostContent content={data.content} />
    </div>
  );
};

export default Job;
