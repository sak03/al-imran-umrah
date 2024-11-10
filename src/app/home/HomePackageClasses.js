"use client";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import package1 from '../../images/special-packages/diamond.jpeg'
import package2 from '../../images/special-packages/gold.jpeg'
import package3 from '../../images/special-packages/silver.jpeg'
import package4 from '../../images/special-packages/super-silver.jpeg'


const HomePackageClasses = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;
  return (
    <div
      className={`${isMobile ? "px-2" : "px-[5rem]"} py-5 my-5 bg-slate-200`}
    >
      <div className="flex justify-between my-2 text-black">
        <span className="text-2xl">Special Packages</span>
        <span className="flex cursor-pointer">
          See All <FaAngleDoubleRight className="mt-1 mx-1" />
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Image
          src={package1}
          alt="special package"
          width={300}
          height={350}
        />
        <Image
          src={package2}
          alt="special package"
          width={300}
          height={350}
        />
        <Image
          src={package3}
          alt="special package"
          width={300}
          height={350}
        />
        <Image
          src={package4}
          alt="special package"
          width={300}
          height={350}
        />
      </div>
    </div>
  );
};

export default HomePackageClasses;
