import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import Twitter from "@/assets/icons/Twitter.svg";
import Facebook from "@/assets/icons/Facebook.svg";
import TikTok from "@/assets/icons/Tiktok.svg";
import Instagram from "@/assets/icons/Instagram.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#211C24] text-white">
      <div className="flex flex-col lg:flex-row justify-between items-start pt-[104px] px-4 sm:px-10 lg:px-[160px] gap-10 lg:gap-0">
        <div className="lg:w-1/3">
          <Image
            src={Logo}
            alt="logo"
            width={65}
            height={22}
            className="max-w-[65px] w-full h-[22px]"
          />
          <p className="text-[14px] mt-[24px] mr-0 lg:mr-[113px]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 lg:gap-10 lg:w-2/3 pt-10 lg:pt-0">
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-[16px]">Services</li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Bonus program
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Gift cards
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Credit and payment
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Service contracts
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:semibold">
                Non-cash account
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Payment
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-[16px]">
                Assistance to the buyer
              </li>
              <li className="font-normal hover:text-white text-[14px] hover:font-semibold text-[#CFCFCF]">
                Find an order
              </li>
              <li className="font-normal hover:text-white text-[14px] hover:font-semibold text-[#CFCFCF]">
                Terms of delivery
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Exchange and return of goods
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Guarantee
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:text-[15px]">
                Frequently asked questions
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:text-[15px]">
                Terms of use of the site
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:justify-start py-10 gap-4 px-4 sm:px-10 lg:px-[160px]">
        <Image
          src={Twitter}
          alt="logo"
          width={24}
          height={24}
          className="max-w-[24px] w-full h-[24px]"
        />
        <Image
          src={Facebook}
          alt="logo"
          width={24}
          height={24}
          className="max-w-[24px] w-full h-[24px]"
        />
        <Image
          src={TikTok}
          alt="logo"
          width={24}
          height={24}
          className="max-w-[24px] w-full h-[24px]"
        />
        <Image
          src={Instagram}
          alt="logo"
          width={24}
          height={24}
          className="max-w-[24px] w-full h-[24px]"
        />
      </div>
    </div>
  );
};

export default Footer;
