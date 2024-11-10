"use client";
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 575px)").matches;
  const currentDate = new Date();
  return (
    <div
      className={`flex ${
        isMobile ? "flex-col" : "justify-between"
      } text-white bg-[#28859c] px-[5rem] py-5`}
    >
      <div>
        <div className="text-2xl">Company</div>
        <div className="mt-2">Al Imran Umrah Tours</div>
        <div className="">70/2, Gali No. 20, Zakir Nagar,</div>
        <div className=""> Okhla, New Delhi, 110025</div>
        <div className="flex">
          <FaEnvelope /> <span className="mx-2">alimranumrahtour82@gmail.com</span>
        </div>
        <div className="flex">
          <FaPhoneAlt /> <span className="mx-2">+91 85950 60228</span>
        </div>
        <div className="flex">
          <FaPhoneAlt /> <span className="mx-2">+91 98912 30612</span>
        </div>
      </div>
      <div className={isMobile ? "my-3" : ""}>
        <div className="text-2xl">Important Links</div>
        <div className="mt-2">About Us</div>
        <div className="">FAQ's</div>
        <div className="">Contact Us</div>
        <div className="flex mt-1 text-xl">
          <a href="https://www.facebook.com/hunt.adda?mibextid=ZbWKwL" target="_blank">
            <FaFacebookSquare /></a>{" "}
          <span className="mx-2">
            <a href="https://www.instagram.com/al_imran_umrah?igsh=YTV5YWU3c2MzcnNr" target="_blank">
              <FaInstagram /></a>
          </span>{" "}
          {/* <FaYoutube />{" "}
          <span className="mx-2">
            <FaTwitter />
          </span>
          <FaLinkedin /> */}
        </div>
      </div>
      <div>
        <div className="text-2xl">Legals</div>
        <div className="mt-2">Privacy Policy</div>
        <div className="">Termas & Conditions</div>
        <div>&copy; {currentDate.getFullYear()} All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
