/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Sidebar from "./Sidebar";
import { isLinkButton, isNavArray, isOfType, isString } from "@/types/checker";
import { HeaderProps, LinkButton, Nav } from "@/types/components/home";

const Header = (props: HeaderProps) => {
  const { brand, nav, button } = props;

  const [showHeader, setShowHeader] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed bg-transparent backdrop-blur-md py-2 px-3 md:px-5 lg:px-20 w-full z-50 transition-all duration-300 ${
          showHeader ? "top-0" : "-top-20"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center justify-between">
          {/* ---brand--- */}
          {isOfType<string>(brand, isString) && (
            <div className="flex items-center ">
              <Link href="/" className="text-xl font-bold">
                <img
                  src={brand}
                  className="w-[45px] md:w-[50px] h-auto"
                  alt="brand"
                />
              </Link>
            </div>
          )}
          {!isOfType<string>(brand, isString) && (
            <div className="flex items-center ">
              <div className="w-[100px] md:w-[120px] h-[40px] dark:bg-[#ddd] bg-[#222] flex justify-center items-center">
                <span className="text-sm text-black">brand</span>
              </div>
            </div>
          )}
          {/* ---brand--- */}

          {isOfType<LinkButton>(button, isLinkButton) && (
            <Button
              variant="contained"
              className="!p-2 lg:!px-3 !text-xs  bg-gradient-to-r text-white font-semibold from-[#E855DE] via-[#E855DE] to-[#5400EE] !rounded-full"
            >
              <Link href={button.link}>{button.label}</Link>
            </Button>
          )}

          {!isOfType<LinkButton>(button, isLinkButton) && (
            <div className="w-[130px] md:w-[160px] h-[30px] dark:bg-[#ddd] bg-[#222] flex justify-center items-center">
              <span className="text-sm text-black">button</span>
            </div>
          )}

          <nav className="hidden nav-list md:flex items-center gap-2">
            {isOfType<Nav[]>(nav, isNavArray) && (
              <>
                {nav.map((n, i) => (
                  <Link
                    key={i}
                    href={n.link}
                    className="hover:text-pink-500  nav-link px-4 transition-colors cursor-pointer uppercase text-xs font-semibold"
                  >
                    {n.label}
                  </Link>
                ))}
              </>
            )}

            {!isOfType<Nav[]>(nav, isNavArray) && (
              <>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[100px] md:w-[120px] h-[25px] bg-[#ddd] dark:bg-[#222 flex justify-center items-center "
                  >
                    <span className="text-sm text-black">nav{i + 1}</span>
                  </div>
                ))}
              </>
            )}
          </nav>

          {isOfType<Nav[]>(nav, isNavArray) && <Sidebar nav={nav} />}
        </div>
      </header>
    </>
  );
};

export default Header;
