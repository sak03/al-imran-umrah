"use client";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { trendingDatas } from "@/utils/app-datas/trendingData"
import Link from "next/link";
import { useRouter } from "next/navigation";


const TrendingPackage = () => {
  const router = useRouter()
  const isMobile = typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;
  return (
    <div className={`${isMobile ? "px-3" : "px-[5rem]"} my-5`}>
      <div className="flex justify-between my-2">
        <span className="text-2xl">Trending Packages</span>
        <Link href="/trending-packages">
        <span className="flex cursor-pointer">
          See All <FaAngleDoubleRight className="mt-1 mx-1" />
        </span>
        </Link>
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
              onClick={() => router.push(`/trending-package-details/${item.id}`)}
            />
          )
        }) }
      </div>
    </div>
  );
};

export default TrendingPackage;
