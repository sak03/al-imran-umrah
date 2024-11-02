"use client";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const HomePackageClasses = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;
  return (
    <div
      className={`${isMobile ? "px-2" : "px-[5rem]"} py-5 my-5 bg-slate-200`}
    >
      <div className="flex justify-between my-2">
        <span className="text-2xl">Special Packages</span>
        <span className="flex cursor-pointer">
          See All <FaAngleDoubleRight className="mt-1 mx-1" />
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Image
          src="/assets/special-packages/diamond.jpeg"
          alt=""
          width={300}
          height={350}
        />
        <Image
          src="/assets/special-packages/gold.jpeg"
          alt=""
          width={300}
          height={350}
        />
        <Image
          src="/assets/special-packages/silver.jpeg"
          alt=""
          width={300}
          height={350}
        />
        <Image
          src="/assets/special-packages/super-silver.jpeg"
          alt=""
          width={300}
          height={350}
        />
      </div>
    </div>
  );
};

export default HomePackageClasses;
