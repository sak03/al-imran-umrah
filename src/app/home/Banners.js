"use client";
import Image from "next/image";
import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel css

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
        <img src="/assets/banners/banner1.jpeg" height={350}/>
        <img src="/assets/banners/banner2.jpeg" />
        <img src="/assets/banners/banner1.jpeg" />
        <img src="/assets/banners/banner2.jpeg" />
        <img src="/assets/banners/banner1.jpeg" />
        <img src="/assets/banners/banner2.jpeg" />
      </Carousel>
    </div>
  );
};

export default Banners;
