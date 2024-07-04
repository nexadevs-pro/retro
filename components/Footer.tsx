import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="border-t">
        <section className="mx-auto max-w-7xl">
          <div className=" h-1/2 w-full flex lg:flex-row flex-col justify-around items-start   mx-auto">
            <div className="py-5 ">
              <ul>
                <h1 className="text-xl font-semibold">RetroWeebs</h1>
                <div className="flex gap-5 pb-5 pt-6">
                  <Link href={"https://www.instagram.com/"}>
                    <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                  </Link>
                  <Link href={"https://twitter.com/"}>
                    <FaXTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                  </Link>
                  <Link href={"https://www.linkedin.com/"}>
                    <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                  </Link>
                  <Link href={"https://www.tiktok.com/"}>
                    <FaTiktok className="text-2xl cursor-pointer hover:text-red-600" />
                  </Link>
                  <Link href={"https://www.facebook.com/"}>
                    <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                  </Link>
                </div>
              </ul>
            </div>
            <div className="p-5">
              <ul>
                <p className=" font-bold text-2xl pb-4">Categories</p>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  T-shirts
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  New Deals
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  Trending
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  Jewelry & Accessories
                </li>
              </ul>
            </div>
            <div className="p-5">
              <ul>
                <p className=" font-bold text-2xl pb-4">Legal</p>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  Privacy Policy
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  Refund Policy
                </li>
              </ul>
            </div>
            <div className="p-5">
              <ul>
                <p className=" font-bold text-2xl pb-4">Service Center</p>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer w-[270px]">
                  Lorem ipdum dolor sit
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  Tel: +445422444455
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                  Email: store@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="flex flex-col justify-center items-center text-center  py-5 border-t">
          <h1 className=" text-gray-400 font-semibold">
            © 2024 RetroWeebs, All rights reserved
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
