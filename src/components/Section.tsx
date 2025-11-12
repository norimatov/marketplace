import Image from "next/image";
import React from "react";
import Reklama1 from "@/assets/images/Reklama1.png";
import Reklama2 from "@/assets/images/Reklama2.png";
import Reklama3 from "@/assets/images/Reklama3.png";
import Reklama4 from "@/assets/images/Macbook1.png";

const Section = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
      {/* Reklama 1 */}
      <div className="flex flex-col"> 
        <Image
          src={Reklama1}
          alt="image"
          width={360}
          height={366}
          className="h-[366px] object-contain w-full"
        />
        <div className="px-4 sm:px-8">
          <p className="text-2xl sm:text-[30px] mt-4">Popular Products</p>
          <p className="text-[13px] sm:text-[14px] text-[#909090] mt-2">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="text-black border hover:bg-black hover:scale-105 duration-500 hover:text-white mt-4 w-full sm:w-[191px] h-[56px] rounded-md mb-4">
            Shop Now
          </button>
        </div>
      </div>

      {/* Reklama 2 */}
      <div className="flex flex-col bg-[#F9F9F9]">
        <Image
          src={Reklama2}
          alt="image"
          width={360}
          height={366}
          className="h-[366px] object-contain w-full"
        />
        <div className="px-4 sm:px-8">
          <p className="text-2xl sm:text-[30px] mt-4">Popular Products</p>
          <p className="text-[13px] sm:text-[14px] text-[#909090] mt-2">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="text-black border hover:bg-black hover:scale-105 duration-500 hover:text-white mt-4 w-full sm:w-[191px] h-[56px] rounded-md mb-4">
            Shop Now
          </button>
        </div>
      </div>

      {/* Reklama 3 */}
      <div className="flex flex-col bg-[#EAEAEA]">
        <Image
          src={Reklama3}
          alt="image"
          width={360}
          height={366}
          className="h-[366px] object-contain w-full"
        />
        <div className="px-4 sm:px-8">
          <p className="text-2xl sm:text-[30px] mt-4">Popular Products</p>
          <p className="text-[13px] sm:text-[14px] text-[#909090] mt-2">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="text-black border hover:bg-black hover:scale-105 duration-500 hover:text-white mt-4 w-full sm:w-[191px] h-[56px] rounded-md mb-4">
            Shop Now
          </button>
        </div>
      </div>

      {/* Reklama 4 */}
      <div className="flex flex-col bg-[#2C2C2C] text-white">
        <Image
          src={Reklama4}
          alt="image"
          width={360}
          height={366}
          className="h-[366px] object-contain w-full"
        />
        <div className="px-4 sm:px-8">
          <p className="text-2xl sm:text-[30px] mt-4">Popular Products</p>
          <p className="text-[13px] sm:text-[14px] text-[#909090] mt-2">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="text-white border border-white hover:bg-white hover:scale-105 duration-500 hover:text-black mt-4 w-full sm:w-[191px] h-[56px] rounded-md mb-4">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
