"use client"
import React, { useState, useEffect } from 'react'
import { trendingDatas } from "@/utils/app-datas/trendingData"
import Image from 'next/image';

const TrendingPackageDetails = ({ params }) => {
    const { imageId } = params; // Destructure params directly
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Update `isMobile` only on the client
        const checkIsMobile = () =>
            window.matchMedia("(max-width: 575px)").matches;
        setIsMobile(checkIsMobile);

        // Add listener for viewport changes
        const mediaQuery = window.matchMedia("(max-width: 575px)");
        mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));

        return () => {
            mediaQuery.removeEventListener("change", (e) => setIsMobile(e.matches));
        };
    }, []);

    const filteredImage = trendingDatas.filter((item) => item.id === imageId);

    return (
        <div className={`${isMobile ? "px-3" : "px-[5rem]"} my-5`}>
            <div className="flex justify-between my-2">
                <span className="text-2xl">Trending Packages Details</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {filteredImage.length > 0 ? (
                    filteredImage.map((item, idx) => (
                        <Image
                            key={idx}
                            src={item.imgUrl}
                            alt={item.name}
                            width={300}
                            height={350}
                            className="package-detail-image"
                        />
                    ))
                ) : (
                    <p>No matching data found for this package.</p>
                )}
            </div>
        </div>
    )
}

export default TrendingPackageDetails