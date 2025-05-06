"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import { IoMdHome } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";

import errorIllustration from "@/../public/500.jpg";
import Image from "next/image";

const Error = () => {
  const router = useRouter();

  const handleRelaodPage = () => {
    location.reload();
  };
  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center ">
        <Card className="w-full max-w-3xl p-8 shadow-lg bg-white dark:bg-[#0d0518] rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src={errorIllustration}
                alt="Server Error Illustration"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-8xl font-bold text-indigo-600 mb-4 tracking-tighter">
                500
              </h1>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Server Error
              </h2>
              <p className="text-foreground/50 mb-6">
                We&apos;re sorry, but something went wrong on our servers. Our
                team has been notified and is working to fix the issue.
              </p>

              <div className="space-y-6">
                <Button
                  onClick={handleRelaodPage}
                  className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 !rounded-button cursor-pointer whitespace-nowrap"
                >
                  <TfiReload className="mr-2 w-4 h-4" /> Try Again
                </Button>

                <Button
                  onClick={handleGoHome}
                  variant="outline"
                  className="w-full md:w-auto mt-3 md:mt-0 md:ml-3 !rounded-button cursor-pointer whitespace-nowrap"
                >
                  <IoMdHome className="mr-2 w-4 h-4" /> Return to Homepage
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Error;
