"use client";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import package1 from '../../images/packages/package1.jpeg'
import package2 from '../../images/packages/package2.jpeg'
import package3 from '../../images/packages/package3.jpeg'
import package4 from '../../images/packages/package4.jpeg'
import { trendingDatas } from "@/utils/app-datas/trendingData"


const TrendingPackage = () => {
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
        {trendingDatas.slice(0,4).map((item, idx)=>{
          return(
            <Image
            key={idx}
              src={item.imgUrl}
              alt={item.name}
              width={300}
              height={350}
              className="package-image"
            />
          )
        }) }
        {/* <Image
          src={package2}
          alt="package"
          width={300}
          height={350}
          className="package-image"
        /> */}
        {/* <Image
          src={package3}
          alt="package"
          width={300}
          height={350}
          className="package-image"
        /> */}
        {/* <Image
          src={package4}
          alt="package"
          width={300}
          height={350}
          className="package-image"
        /> */}
      </div>
    </div>
  );
};

export default TrendingPackage;
