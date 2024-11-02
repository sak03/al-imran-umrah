"use client";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const HomeCurrentPackage = () => {
  const isMobile = typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;
  return (
    <div className={`${isMobile ? "px-3" : "px-[5rem]"} my-5`}>
      <div className="flex justify-between my-2">
        <span className="text-2xl">Trending Packages</span>
        <span className="flex cursor-pointer">
          See All <FaAngleDoubleRight className="mt-1 mx-1" />
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Image
          src="/assets/packages/package1.jpeg"
          alt=""
          width={300}
          height={350}
          className="package-image"
        />
        <Image
          src="/assets/packages/package2.jpeg"
          alt=""
          width={300}
          height={350}
          className="package-image"
        />
        <Image
          src="/assets/packages/package3.jpeg"
          alt=""
          width={300}
          height={350}
          className="package-image"
        />
        <Image
          src="/assets/packages/package4.jpeg"
          alt=""
          width={300}
          height={350}
          className="package-image"
        />
      </div>
    </div>
  );
};

export default HomeCurrentPackage;
