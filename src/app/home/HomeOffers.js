"use client";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import offer1 from '../../images/offers/offer1.jpeg'
import offer2 from '../../images/offers/offer2.jpeg'
import offer3 from '../../images/offers/offer1.jpeg'
import offer4 from '../../images/offers/offer2.jpeg'
import { offerData } from "@/utils/app-datas/offerDatas"


const HomeOffers = () => {
  const isMobile = typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;
  return (
    <div className={`${isMobile ? "px-2" : "px-[5rem]"} py-5 my-5`}>
      <div className="flex justify-between my-2">
        <span className="text-2xl">Special Offers</span>
        <span className="flex cursor-pointer">
          See All <FaAngleDoubleRight className="mt-1 mx-1" />
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {offerData.map((item, idx)=>{
          return(
            <Image
            key={idx}
              src={item.imgUrl}
              alt={item.name}
              width={300}
              height={350}
            />
          )
        })}
      </div>
    </div>
  );
};

export default HomeOffers;
