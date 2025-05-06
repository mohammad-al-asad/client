import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import LanSelector from "./LanguageSelector";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FooterProps } from "@/types/components/home";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = ({ footerMain, languages }: FooterProps) => {
  return (
    <footer className="container-c pt-16 pb-8">
      <div className="container mx-auto px-3 md:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
          <div className="grid justify-between grid-cols-1 md:grid-cols-3 md:gap-10 mb-16">
            {footerMain.nav.map((d, i) => (
              <div key={i} className="md:block hidden">
                <h3 className="font-semibold text-sm lg:text-base uppercase mb-6">
                  {d.title}
                </h3>
                <ul className="space-y-4">
                  {d.link.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.redirect}
                        className="text-inherit/90 text-xs lg:text-sm hover:text-pink-600 cursor-pointer"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {footerMain.nav.map((d, i) => (
              <div key={i} className="md:hidden">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-foreground" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="!border-b !border-b-[#3C095D]/50"
                  >
                    <Typography
                      component="h4"
                      className="!font-semibold  uppercase mb-6 !text-foreground"
                    >
                      {d.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {d.link.map((link, j) => (
                      <li key={j} className="list-none">
                        <a
                          href={link.redirect}
                          className="text-foreground opacity-80 text-sm hover:text-pink-600 cursor-pointer"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-5 py-5 md:items-start">
            <div className="flex justify-center">
              <Button variant="outlined">
                <Link href="#" className="">
                  Get Android App
                </Link>
              </Button>
            </div>

            <div className="flex justify-center">
              <LanSelector languages={languages} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link
              href="#"
              className="text-sm text-inherit/50 hover:text-pink-600 cursor-pointer"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-inherit/50 hover:text-pink-600 cursor-pointer"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-inherit/50 hover:text-pink-600 cursor-pointer"
            >
              Accessibility Statement
            </Link>
            <div className="flex items-center">
              <span className="text-sm text-inherit/50 mr-2">
                Your Privacy Choices
              </span>
              {/* <Switch id="privacy-toggle" /> */}
            </div>
          </div>

          <div className="text-sm text-inherit/50">
            © 2025 Lyft, Inc. CPUC ID No. TCP0032513 P
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerMain.socail_media.facebook && (
              <Link href={footerMain.socail_media.facebook}>
                <FaFacebook className="w-3 h-3 text-foreground hover:text-indigo-600 " />
              </Link>
            )}

            {footerMain.socail_media.twitter && (
              <Link href={footerMain.socail_media.twitter}>
                <FaTwitter className="w-3 h-3 text-foreground hover:text-indigo-600 " />
              </Link>
            )}

            {footerMain.socail_media.instagram && (
              <Link href="#">
                <FaInstagramSquare className="w-3 h-3 text-foreground hover:text-indigo-600 " />
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
