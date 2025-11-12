import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/images/IphoneImage.png";
import Playstation from "@/assets/images/PlayStation.png";
import Macbook from "@/assets/images/MacBookPro14.png";
import Noushnik from "@/assets/images/noushnik.png";
import Vision from "@/assets/images/vision.png";

const Hero = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-[#211C24] px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col md:flex-row items-center mx-auto py-10 md:py-0">
        <div className="flex flex-col text-white max-w-[714px] w-full mb-6 md:mb-0">
          <p className="font-semibold text-2xl text-start">Pro.Beyond.</p>

          <p className="font-inter text-[32px] sm:text-[40px] md:text-[50px] whitespace-nowrap">
            IPhone 14 <span className="font-bold">Pro</span>
          </p>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] whitespace-nowrap">
            Created to change everything for the better. For everyone
          </p>

          <button className="w-[160px] sm:w-[191px] h-[48px] sm:h-[56px] rounded-[6px] mt-5 text-white border border-white hover:bg-white hover:text-black hover:duration-1000 py-3 px-5">
            Shop Now
          </button>
        </div>
        <Image
          src={HeroImage}
          alt="hero-image"
          width={406}
          height={632}
          className="w-full max-w-[406px] h-auto"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-4">
        <div className="lg:col-span-2 w-full h-full flex flex-col lg:flex-row items-center">
          <Image
            src={Playstation}
            alt="playstation"
            width={360}
            height={343}
            className="w-full lg:w-[360px] h-auto"
          />
          <div className="flex flex-col w-full lg:w-[338px] mt-4 lg:mt-0 lg:ml-4">
            <p className="text-2xl md:text-[49px]">Playstation 5</p>
            <p className="text-[12px] md:text-[14px] text-[#909090]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>

        <div className="bg-[#EDEDED] w-full h-full flex items-center p-4">
          <div className="flex items-center gap-4 w-full">
            <Image src={Noushnik} alt="noushnik" width={104} height={272} />
            <div className="flex flex-col w-full">
              <p className="text-2xl sm:text-4xl">Apple</p>
              <p className="text-2xl sm:text-4xl">AirPods</p>
              <p className="text-2xl sm:text-4xl font-bold">Max</p>
              <p className="text-[12px] sm:text-[14px] text-[#909090] mt-2">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#353535] w-full h-full flex items-center p-4">
          <div className="flex items-center gap-4 text-white w-full">
            <Image src={Vision} alt="vision" width={136} height={190} />
            <div className="flex flex-col w-full">
              <p className="text-2xl sm:text-3xl">Apple</p>
              <p className="text-2xl sm:text-3xl">Vision Pro</p>
              <p className="text-[12px] sm:text-[14px] text-[#909090] mt-2">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:row-span-2 bg-[#EDEDED] w-full h-full py-6 lg:py-12 flex items-center justify-end">
          <div className="flex flex-col w-full lg:w-[360px] h-fit pl-4 lg:pl-[56px]">
            <p className="text-2xl sm:text-4xl">Macbook</p>
            <p className="text-2xl sm:text-4xl font-bold">Air</p>
            <p className="text-[12px] sm:text-[14px] text-[#909090] mt-2">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="w-[160px] sm:w-[191px] h-[48px] sm:h-[56px] rounded-[6px] mt-5 text-black border hover:bg-black hover:text-white hover:duration-1000 border-black py-3 px-5">
              Shop Now
            </button>
          </div>
          <Image
            src={Macbook}
            alt="macbook"
            width={360}
            height={343}
            className="w-full lg:w-[360px] h-auto mt-4 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
