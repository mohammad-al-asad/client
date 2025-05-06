"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import { IoMdHome } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";

import errorIllustration from "@/../public/404.jpg";
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
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* <div className="w-full flex justify-center mb-8">
          <div className="flex items-center">
            <i className="fas fa-cube text-indigo-600 text-3xl mr-2"></i>
            <span className="text-2xl font-bold text-gray-800">Company</span>
          </div>
        </div> */}

        <Card className="w-full max-w-3xl bg-background shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h1 className="text-9xl font-extrabold text-indigo-600 tracking-tighter mb-4">
                404
              </h1>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-foreground/50 mb-8">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGoHome}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap cursor-pointer"
                  size="lg"
                >
                  <IoMdHome className="mr-2 w-4 h-4" /> Back to Home
                </Button>
                <Button
                  onClick={handleRelaodPage}
                  variant="outline"
                  className="border-indigo-600 text-indigo-600 hover:!text-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                  size="lg"
                >
                  <TfiReload className="mr-2 w-4 h-4" />
                  Try Again
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-background flex items-center justify-center p-6 overflow-hidden">
              <Image
                src={errorIllustration}
                alt="404 Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Error;
