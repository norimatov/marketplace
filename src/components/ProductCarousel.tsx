"use client";

import Link from "next/link";
import { forwardRef } from "react";

interface CategoryType {
  id: number;
  name: string;
  image: string;
}

interface CarouselProps {
  products: CategoryType[];
  emblaRef: (node: HTMLDivElement | null) => void;
}

const CarouselDemo = forwardRef<HTMLDivElement, CarouselProps>(
  ({ products, emblaRef }, _) => {
    return (
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {products.map((category) => (
            <div
              key={category.id}
              className="embla__slide px-2 flex-[0_0_50%] sm:flex-[0_0_33.3333%] md:flex-[0_0_25%] lg:flex-[0_0_20%]"
            >
              <Link
                href={`/category/${category.name}`}
                className="flex flex-col items-center justify-center bg-[#EDEDED] w-full h-[160px] rounded-2xl hover:scale-105 duration-500 hover:bg-white hover:shadow-2xl cursor-pointer"
              >
                <h1 className="text-[16px] text-center mt-4 text-lg font-medium">
                  {category.name}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

CarouselDemo.displayName = "CarouselDemo";

export default CarouselDemo;
