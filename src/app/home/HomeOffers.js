"use client";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { offerData } from "@/utils/app-datas/offerDatas"
import { useRouter } from 'next/navigation';
import Link from "next/link";


const HomeOffers = () => {
  const router = useRouter()
  const isMobile = typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;
  return (
    <div className={`${isMobile ? "px-2" : "px-[5rem]"} py-5 my-5`}>
      <div className="flex justify-between my-2">
        <span className="text-2xl">Special Offers</span>
        <Link href="/offers">
          <span className="flex cursor-pointer">
            See All <FaAngleDoubleRight className="mt-1 mx-1" />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {offerData.map((item, idx) => {
          return (
            <Image
              key={idx}
              src={item.imgUrl}
              alt={item.name}
              width={300}
              height={350}
              onClick={() => router.push(`/offer-details/${item.id}`)}
            />
          )
        })}
      </div>
    </div>
  );
};

export default HomeOffers;
