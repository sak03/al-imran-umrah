"use client"
import React from 'react'
import { trendingDatas } from "@/utils/app-datas/trendingData"
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const TrendingPackages = () => {
    const router = useRouter()
    const isMobile = typeof window !== "undefined" &&
        window.matchMedia("(max-width: 575px)").matches;
  return (
      <div className={`${isMobile ? "px-3" : "px-[5rem]"} my-5`}>
          <div className="flex justify-between my-2 bg-light">
              <span className="text-2xl">Trending Packages</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trendingDatas.map((item, idx) => {
                  return (
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
              })}
          </div>
      </div>
  )
}

export default TrendingPackages