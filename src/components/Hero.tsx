import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/images/IphoneImage.png";
import Playstation from "@/assets/images/PlayStation.png";
import Macbook from "@/assets/images/MacBookPro14.png";
import Noushnik from "@/assets/images/noushnik.png";
import Vision from "@/assets/images/vision.png";

const Hero = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="bg-[#211C24] px-4 sm:px-10 md:px-16 lg:px-32 xl:px-40 flex flex-col md:flex-row items-center justify-between py-10 md:py-20">
        <div className="flex flex-col text-white max-w-[714px] w-full text-center md:text-left">
          <p className="font-semibold text-2xl sm:text-3xl md:text-4xl">
            Pro.Beyond.
          </p>

          <p className="font-inter text-[32px] sm:text-[42px] md:text-[54px] font-medium leading-tight mt-2">
            iPhone 14 <span className="font-bold">Pro</span>
          </p>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] mt-2 text-gray-300">
            Created to change everything for the better. For everyone.
          </p>

          <button className="w-[160px] sm:w-[191px] h-[48px] sm:h-[56px] rounded-md mt-6 text-white border border-white hover:bg-white hover:text-black transition-all duration-500 mx-auto md:mx-0">
            Shop Now
          </button>
        </div>

        <div className="mt-8 md:mt-0 flex justify-center">
          <Image
            src={HeroImage}
            alt="hero-image"
            width={406}
            height={632}
            className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[406px] h-auto"
            priority
          />
        </div>
      </div>

      {/* PRODUCTS GRID SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 px-4 sm:px-8 lg:px-20 mt-10">
        {/* Playstation */}
        <div className="lg:col-span-2 bg-[#F9F9F9] rounded-xl p-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <Image
            src={Playstation}
            alt="playstation"
            width={360}
            height={343}
            className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-auto object-contain"
          />
          <div className="flex flex-col text-center md:text-left">
            <p className="text-3xl sm:text-4xl font-semibold">PlayStation 5</p>
            <p className="text-[14px] sm:text-[16px] text-[#606060] mt-2">
              Incredibly powerful CPUs, GPUs, and SSD redefine your gaming
              experience.
            </p>
          </div>
        </div>

        {/* AirPods */}
        <div className="bg-[#EDEDED] rounded-xl p-6 flex items-center justify-center gap-4">
          <Image
            src={Noushnik}
            alt="noushnik"
            width={104}
            height={272}
            className="w-[90px] sm:w-[104px] h-auto"
          />
          <div className="flex flex-col text-left">
            <p className="text-2xl sm:text-3xl font-semibold leading-tight">
              Apple <br /> AirPods <br /> <span className="font-bold">Max</span>
            </p>
            <p className="text-[12px] sm:text-[14px] text-[#707070] mt-2">
              Computational audio. Listen, it's powerful.
            </p>
          </div>
        </div>

        {/* Vision Pro */}
        <div className="bg-[#353535] rounded-xl p-6 flex items-center justify-center gap-4 text-white">
          <Image
            src={Vision}
            alt="vision"
            width={136}
            height={190}
            className="w-[100px] sm:w-[136px] h-auto"
          />
          <div className="flex flex-col text-left">
            <p className="text-2xl sm:text-3xl font-semibold leading-tight">
              Apple <br /> Vision Pro
            </p>
            <p className="text-[12px] sm:text-[14px] text-[#BBBBBB] mt-2">
              An immersive way to experience entertainment.
            </p>
          </div>
        </div>

        {/* Macbook Air */}
        <div className="lg:col-span-2 lg:row-span-2 bg-[#EDEDED] rounded-xl flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12">
          <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-3xl sm:text-4xl font-medium">MacBook</p>
            <p className="text-3xl sm:text-4xl font-bold">Air</p>
            <p className="text-[13px] sm:text-[15px] text-[#707070] mt-3 leading-relaxed">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="w-[160px] sm:w-[191px] h-[48px] sm:h-[56px] rounded-md mt-6 text-black border border-black hover:bg-black hover:text-white transition-all duration-500 mx-auto lg:mx-0">
              Shop Now
            </button>
          </div>
          <Image
            src={Macbook}
            alt="macbook"
            width={360}
            height={343}
            className="w-[260px] sm:w-[320px] lg:w-[380px] h-auto mt-6 lg:mt-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
