"use client"
import React from 'react'
import { trendingDatas } from "@/utils/app-datas/trendingData"
import Image from 'next/image';

const TrendingPackageDetails = ({ params }) => {
    const resolvedParams = React.use(params);
    const { imageId } = resolvedParams;
    const isMobile = typeof window !== "undefined" &&
        window.matchMedia("(max-width: 575px)").matches;
    const filterdImage = trendingDatas.filter((item) => {
        return item.id === imageId
    })
    // const { imageId } = params
    // console.log('imageId', imageId, filterdImage)
    return (
        <div className={`${isMobile ? "px-3" : "px-[5rem]"} my-5`}>
            <div className="flex justify-between my-2">
                <span className="text-2xl">Trending Packages Details</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {filterdImage.map((item, idx) => {
                    return (
                        <Image
                            key={idx}
                            src={item.imgUrl}
                            alt={item.name}
                            width={300}
                            height={350}
                            className="package-detail-image"
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TrendingPackageDetails