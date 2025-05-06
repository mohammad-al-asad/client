/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import LogRocket from "logrocket";

import AppLayout from "@/components/AppLayout";
import ContentCard from "@/components/content-card";
import ReviewSection from "@/components/review-section/ReviewSection";
import FeatureImage from "@/components/FeatureImage";
import Hero from "@/components/hero/Hero";
import ContentPair from "@/components/content-pair/ContentPair";
import MobileShowcaseBanner from "@/components/mobile-showcase-banner/MobileShowcaseBanner";
import ServerError from "@/components/ServerError";
import PaymentModal from "@/components/PaymentModal";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const fetchUserType1Page = async (locale_language: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_ADMIN}/api/usertype2?pLevel=4&locale=${locale_language}`,
      { next: { revalidate: 10 } }
    );

    if (!response.ok) {
      return Error;
    }

    const { usertype2: userType2Data } = (await response.json()).data;
    return userType2Data;
  } catch (error: any) {
    LogRocket.captureException(error);
    return { error: true };
  }
};

const UserType2 = async ({ searchParams }: Props) => {
  const locale_language =
    (await searchParams).locale_language?.toString() || "en";

  const userType2Data = await fetchUserType1Page(locale_language);

  if (userType2Data.error) {
    return <ServerError />;
  }
  return (
    <div className={`min-h-screen  transition-colors duration-300 `}>
      <AppLayout locale_language={locale_language}>
        <main className="pt-20 max-w-[1440px] mx-auto">
          <Hero heroData={userType2Data.hero_usertype2} />
          <MobileShowcaseBanner
            mobileShowcaseData={userType2Data.mobile_showcase_banner_usertype2}
          />
          <ContentCard contentCardData={userType2Data.card_content} />
          <ContentPair
            contentPairData={userType2Data.content_pair_primary_usertype2}
          />
          <ContentPair
            contentPairData={userType2Data.content_pair_secondary_usertype2}
          />
          <ReviewSection
            reviewSectionData={userType2Data.review_section_usertype2}
          />
          <FeatureImage banner={userType2Data.banner_usertype2} />
        </main>
        <PaymentModal />
      </AppLayout>
    </div>
  );
};

export default UserType2;
