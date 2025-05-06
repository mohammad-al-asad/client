"use client";
import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { RiMenu5Line } from "react-icons/ri";
import Link from "next/link";
import { Nav } from "@/types/components/home";

export default function Sidebar({ nav }: { nav: Nav[] }) {
  const [isSideBarOpen, setSideBarOpen] = React.useState(false);

  return (
    <div className="lg:hidden">
      <Button onClick={() => setSideBarOpen(true)}>
        <RiMenu5Line className="w-4 h-4 text-white" />
      </Button>
      <Drawer
        anchor={"right"}
        open={isSideBarOpen}
        onClose={() => setSideBarOpen(false)}
        className="!bg-red"
      >
        <div className="w-[250px] h-screen  bg-background  rounded-s-3xl border-s-4 overflow-hidden">
          <nav className="flex flex-col gap-3 pl-8 pt-12">
            {nav.map((n, i) => (
              <Link
                href={n.link}
                key={i}
                className="text-sm border-b pb-3 border-b-foreground/50 font-bold md:font-semibold text-white uppercase hover:text-pink-500 transition-colors flex items-center gap-2"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </Drawer>
    </div>
  );
}
