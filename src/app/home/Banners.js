"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel css
import { bannerData } from '@/utils/app-datas/bannerData'


const Banners = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;

  
  return (
    <div className={isMobile ? "banner-body-mobile" :"banner-body-desktop"}>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showThumbs={false}
        stopOnHover={true}
        dynamicHeight={false}
        autoFocus={true}
        showStatus={false}
        containerStyle={{ height: "13rem" }}
      >
        {bannerData?.map((item, idx)=>{
          return(
            <Image key={idx} src={item.imgUrl} alt={item.name} width={500} height={350} />
          )
        })}
      </Carousel>
    </div>
  );
};

export default Banners;
