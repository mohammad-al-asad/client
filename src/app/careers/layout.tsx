import React from "react";

export const metadata = {
  title: "Careers ",
  description:
    "Explore exciting career opportunities with our dynamic team. Join us to build cutting-edge websites powered by ISR Next.js and Strapi CMS. Shape the future of digital content management!",
  openGraph: {
    title: "Careers at Our Company | ISR Next.js CMS Platform",
    description:
      "We're hiring! Discover career opportunities and become a part of our team specializing in ISR Next.js and Strapi CMS solutions.",
    url: "https://yourwebsite.com/career",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/career-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Join Our Team - Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Join Our ISR Next.js CMS Team",
    description:
      "Build the future with us! Explore career openings for web developers, CMS specialists, and creative tech enthusiasts.",
    images: ["https://yourwebsite.com/career-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com/career",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
