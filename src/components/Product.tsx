"use client";
import axios from "axios";
import React from "react";
import ProductCart from "./ProductCart";
import Section from "./Section";
import Banner2 from "@/assets/images/Banner2.png";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types";

const Product = () => {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState<
    "new" | "bestseller" | "featured"
  >("new");

  const FetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div>
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-40">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setActiveTab("new")}
            className={`pb-2 ${
              activeTab === "new"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            New Arrival
          </button>
          <button
            onClick={() => setActiveTab("bestseller")}
            className={`pb-2 ${
              activeTab === "bestseller"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Bestseller
          </button>
          <button
            onClick={() => setActiveTab("featured")}
            className={`pb-2 ${
              activeTab === "featured"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Featured Products
          </button>
        </div>

        {/* Products Grid */}
        {activeTab === "new" && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="animate-pulse bg-gray-200 h-48 w-full rounded-md"
                    ></div>
                  ))}
              </div>
            ) : products.length > 0 ? (
              products.slice(0, 8).map((product, index) => (
                <Link key={index} href={`/product/${product.id}`}>
                  <ProductCart product={product} />
                </Link>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        )}

        {activeTab === "bestseller" && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {products.slice(8, 16).map((product, index) => (
              <Link key={index} href={`/product/${product.id}`}>
                <ProductCart product={product} />
              </Link>
            ))}
          </div>
        )}

        {activeTab === "featured" && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {products.slice(16, 24).map((product, index) => (
              <Link key={index} href={`/product/${product.id}`}>
                <ProductCart product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Section />

      {/* Discount Section */}
      <div className="mt-20 w-full px-4 sm:px-6 md:px-10 lg:px-40">
        <p className="text-[20px] sm:text-[22px] md:text-[24px]">
          Discounts up to -50%
        </p>
        <div className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products.slice(24, 28).map((product, index) => (
              <Link key={index} href={`/product/${product.id}`}>
                <ProductCart product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full mt-20">
        <Image src={Banner2} alt="banner" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Product;
