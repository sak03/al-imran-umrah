"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel css
import banner1 from '../../images/banners/banner1.jpeg'
import banner2 from '../../images/banners/banner2.jpeg'
import bnr1 from '../../images/banners/bnr1.jpg';
import bnr2 from '../../images/banners/bnr2.jpg'
import bnr3 from '../../images/banners/bnr3.jpg'
import bnr4 from '../../images/banners/bnr4.jpg'
import bnr5 from '../../images/banners/bnr5.jpg'
import bnr6 from '../../images/banners/bnr6.jpg'




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
        <Image src={banner1} alt="banner1" width={500} height={350}/>
        <Image src={banner2} alt="banner2" width={500} height={350}/>
        <Image src={bnr1} alt="banner1" width={500} height={350}/>
        <Image src={bnr2} alt="banner2" width={500} height={350}/>
        <Image src={bnr3} alt="banner3" width={500} height={350}/>
        <Image src={bnr4} alt="banner4" width={500} height={350}/>
        <Image src={bnr5} alt="banner5" width={500} height={350} />
        <Image src={bnr6} alt="banner6" width={500} height={350} />
      </Carousel>
    </div>
  );
};

export default Banners;
