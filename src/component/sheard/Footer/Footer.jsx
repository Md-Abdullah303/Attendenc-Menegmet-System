import React from "react";
import footerImg from "../../../assets/portfolio.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#001931] mt-10 py-10 ">
      <div className="container  text-white mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2 ">
            <img className="w-6" src={footerImg} alt="footerImg" />
            <h1 className="font-bold text-2xl">AT .MS</h1>
          </div>
          <div className="">
            <h1 className="font-semibold">Social Links</h1>
            <div className="flex items-center gap-3 mt-3">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><RiTwitterXFill /></a>
            </div>
          </div>
        </div>
        <hr className="text-gray-400 my-3" />
        <p className="text-gray-500 text-[11px] md:text-lg text-center">Copyright @ 2025 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
