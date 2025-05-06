/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import LogRocket from "logrocket";

import AppLayout from "@/components/AppLayout";
import Hero from "@/components/hero/Hero";
import HeroSupportingText from "@/components/hero/HeroSupportingText";
import BlogList from "@/components/careere/BlogList";
import Jobs from "@/components/careere/Jobs";
import ServerError from "@/components/ServerError";

const fetchCareerPage = async (locale_language: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_ADMIN}/api/career?pLevel=4&locale=${locale_language}`,
      { next: { revalidate: 10 } }
    );

    if (!response.ok) {
      return Error;
    }

    const data = (await response.json()).data;

    return data;
  } catch (error: any) {
    LogRocket.captureException(error);
    return { error: true };
  }
};
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
const Careers = async ({ searchParams }: Props) => {
  const locale_language =
    (await searchParams).locale_language?.toString() || "en";

  const data = await fetchCareerPage(locale_language);

  if (data.error) {
    return <ServerError />;
  }

  return (
    <div className={`min-h-screen  transition-colors duration-300 `}>
      <AppLayout locale_language={locale_language}>
        <main className="pt-20  mx-auto">
          <Hero heroData={data?.Hero[0]} />
          <HeroSupportingText
            heroSupportingTextData={data?.hero_supporting_text}
          />
          <BlogList blogList={data?.Blog_Card_List} />
          <Jobs />
        </main>
      </AppLayout>
    </div>
  );
};

export default Careers;
