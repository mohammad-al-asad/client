import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import ServerError from "@/components/ServerError";

interface AppLayoutProps {
  children: React.ReactNode;
  locale_language: string;
}

const fetchData = async (locale_language: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_ADMIN}/api/app-layout?pLevel=4&locale=${locale_language}`,
      { next: { revalidate: 10 } }
    );

    if (!response.ok) {
      throw Error;
    }

    const data = (await response.json()).data;
    return data;
  } catch (error) {
    console.log("Header Footer Error : ", error);
    return { error: true };
  }
};

const fetchDataLocalLanguage = async () => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_ADMIN}/api/i18n/locales
`,
      { next: { revalidate: 10 } }
    );

    const languages = await response.json();
    return languages;
  } catch (error) {
    console.log("languages : ", error);
    return { error: true };
  }
};

const AppLayout = async ({ children, locale_language }: AppLayoutProps) => {
  const data = await fetchData(locale_language);
  const languages = await fetchDataLocalLanguage();

  if (data.error) {
    return <ServerError />;
  }

  return (
    <div>
      {/* Header */}
      <Header
        brand={`${process.env.STRAPI_ADMIN}${data.header.logo.url}`}
        button={data.header.button}
        nav={data.header.navlinks}
      />
      {children}
      <Footer footerMain={data.footer} languages={languages} />
    </div>
  );
};

export default AppLayout;
