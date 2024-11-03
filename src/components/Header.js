"use client";
import Image from "next/image";
import React from "react";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import logo from '../images/brand/logo.jpeg'

const Header = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;
  return (
    <div className="flex justify-between bg-[#e2e8f0] px-4 pt-2 pb-1">
      <div className="flex">
        <Image
          // src="/assets/brand/logo.jpeg"
          src={logo}
          alt="logo"
          width={60}
          height={45}
          className="rounded-full app-logo"
        />{" "}
        <div className="mx-3 text-black">
          <p className="text-2xl mb-0">Al-Imran</p>
          <span
            className="text-[13px]"
            style={{ position: "relative", top: "-10px" }}
          >
            Tours & Travels
          </span>
        </div>
      </div>
      {isMobile ? (
        ""
      ) : (
        <div className="mt-3">
          <span className="text-xl text-[#28859c] font-bold hover:text-[#28859c] cursor-pointer">
            Home
          </span>
          <span className="mx-5 text-xl text-black hover:text-[#28859c] cursor-pointer">
            Packages
          </span>
            <span className="text-xl text-black hover:text-[#28859c] cursor-pointer">
            Offers
          </span>
            <span className="mx-5 text-xl text-black text-xl hover:text-[#28859c] cursor-pointer">
            About
          </span>
            <span className="text-xl text-black hover:text-[#28859c] cursor-pointer">
            Contact
          </span>
        </div>
      )}
      <div className="mt-3 flex text-black cursor-pointer">
        <div className=" mt-1">
          <FaPhoneAlt />
        </div>
        <div className="text-xl mx-2">{isMobile ? <FaBars /> : "Book an appointment" }</div>
      </div>
    </div>
  );
};

export default Header;
