"use client"
import React from 'react'
import { offerData } from "@/utils/app-datas/offerDatas"
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Offers = () => {
    const router = useRouter()

  return (
      <div className="trending-details-body">
          <div className="flex justify-between my-2 bg-light">
              <span className="text-2xl">Special Offers</span>
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
                          className="package-image"
                          onClick={() => router.push(`/offer-details/${item.id}`)}
                      />
                  )
              })}
          </div>
      </div>
  )
}

export default Offers