"use client";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDebaunce } from "./hooks/useDabaunce";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const SearchModal = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState<ProductType[]>([]);
  const [warning, setWarning] = React.useState("");

  const debounce = useDebaunce(value);

  const handleChange = async () => {
    try {
      if (debounce.trim().length) {
        setIsLoading(true);
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${debounce}`
        );

        if (res.data.products.length > 0) {
          setData(res.data.products);
          setWarning("");
        } else {
          setData([]);
          setWarning("Maxsulot topilmadi!");
        }
      } else {
        setData([]);
        setWarning("");
      }
    } catch (error) {
      console.error(error);
      setWarning("Xatolik yuz berdi!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleChange();
  }, [debounce]);

  const handleLinkClick = () => {
    setOpen(false);
    setValue("");
  };

  return (
    <div className="w-full max-w-[642px] relative">
      <div className="flex gap-2 sm:gap-3 bg-[#F5F5F5] rounded-md px-2 sm:px-3 py-2 max-w-full">
        <SearchIcon size={20} className="text-gray-400" />
        <input
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 300)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Search"
          className="flex-1 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      {open && value.length > 0 && (
        <div className="absolute top-full left-0 z-50 w-full max-h-[400px] overflow-auto bg-white border border-gray-200 rounded-b-md p-3 sm:p-4 mt-1">
          {isLoading && (
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 bg-gray-200 animate-pulse rounded-md p-2">
              <h1 className="text-sm sm:text-md font-semibold"></h1>
            </div>
          )}

          {!isLoading &&
            data.length > 0 &&
            data.map((item) => (
              <Link
                onClick={handleLinkClick}
                href={`/search/${value}`}
                key={item.id}
                className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 border-b border-gray-200 pb-2"
              >
                <h1 className="text-sm sm:text-md font-semibold">
                  {item.title}
                </h1>
              </Link>
            ))}

          {!isLoading && warning && (
            <h1 className="text-sm sm:text-md font-semibold text-center">
              {warning}
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchModal;
