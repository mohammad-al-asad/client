/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import LogRocket from "logrocket";

import AppLayout from "@/components/AppLayout";
import HeroSupportingText from "@/components/hero/HeroSupportingText";
import MobileShowcaseBanner from "@/components/mobile-showcase-banner/MobileShowcaseBanner";
import FeaturesList from "@/components/features-list/FeaturesList";
import FeatureImage from "@/components/FeatureImage";
import ContentPair from "@/components/content-pair/ContentPair";
import Hero from "@/components/hero/Hero";
import ServerError from "@/components/ServerError";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const fetchUserType1Page = async (locale_language: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_ADMIN}/api/usertype1?pLevel=4&locale=${locale_language}`,
      { next: { revalidate: 10 } }
    );

    if (!response.ok) {
      return Error;
    }

    const { usertype1: userType1Data } = (await response.json()).data;
    return userType1Data;
  } catch (error: any) {
    LogRocket.captureException(error);
    return { error: true };
  }
};

const UserType1 = async ({ searchParams }: Props) => {
  const locale_language =
    (await searchParams).locale_language?.toString() || "en";

  const userType1Data = await fetchUserType1Page(locale_language);
  if (userType1Data.error) {
    return <ServerError />;
  }

  return (
    <div className={`min-h-screen  transition-colors duration-300 `}>
      <AppLayout locale_language={locale_language}>
        <main className="pt-20 max-w-[1440px] mx-auto">
          <Hero heroData={userType1Data.hero_usertype1} />
          <HeroSupportingText
            heroSupportingTextData={userType1Data.hero_supporting_text}
          />
          <ContentPair
            contentPairData={userType1Data.content_pair_primary_usertype1}
          />
          <MobileShowcaseBanner
            mobileShowcaseData={userType1Data.mobile_showcase_banner}
          />
          <ContentPair
            contentPairData={userType1Data.content_pair_secondary_usertype1}
          />
          <FeaturesList featuresListData={userType1Data.features_list} />
          <FeatureImage banner={userType1Data.banner_usertype1} />
        </main>
      </AppLayout>
    </div>
  );
};

export default UserType1;
