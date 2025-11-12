"use client";

import React from "react";
import Image from "next/image";
import { ProductType } from "@/types";

interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = React.useState(
    product.images?.[0] || ""
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 grid gap-6 md:grid-cols-2">
      {/* Images Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-y-auto max-h-[500px]">
          {product.images?.map((img: string, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`relative w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px] rounded-xl overflow-hidden flex-shrink-0 transition-opacity ${
                selectedImage === img
                  ? "opacity-100 border-2 border-black"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </button>
          ))}
        </div>

        <div className="relative flex-1 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl bg-gray-50">
          <Image
            src={selectedImage}
            alt={product.title}
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          {product.description}
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-1 text-sm sm:text-base">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Availability:</strong> {product.availabilityStatus}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Discount:</strong> {product.discountPercentage}%
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}
            </p>
          </div>
          <div className="space-y-1 text-sm sm:text-base">
            <p>
              <strong>Dimensions:</strong> {product.dimensions?.width} x{" "}
              {product.dimensions?.height} x {product.dimensions?.depth}
            </p>
            <p>
              <strong>Min Order Quantity:</strong>{" "}
              {product.minimumOrderQuantity}
            </p>
            <p>
              <strong>Shipping Info:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
          </div>
        </div>

        {product.tags?.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold mb-1">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Product Meta */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 sm:p-4 w-full sm:w-[300px] border rounded-xl text-sm sm:text-base">
            <p>
              <strong>Barcode:</strong> {product.meta?.barcode}
            </p>
            <p>
              <strong>Created At:</strong> {product.meta?.createdAt}
            </p>
            <p>
              <strong>Updated At:</strong> {product.meta?.updatedAt}
            </p>
          </div>

          {product.meta?.qrCode && (
            <div className="p-3 sm:p-4 border rounded-xl flex flex-col items-center justify-center">
              <Image
                src={product.meta.qrCode}
                alt="QR Code"
                width={100}
                height={100}
                className="sm:w-[120px] sm:h-[120px]"
              />
              <p className="text-xs sm:text-sm text-gray-500 mt-1">QR Code</p>
            </div>
          )}
        </div>
      </div>

      {/* Customer Reviews */}
      {product.reviews?.length > 0 && (
        <div className="col-span-2 mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Customer Reviews
          </h2>
          <div className="flex flex-col gap-4">
            {product.reviews.map((review: any, index: number) => (
              <div
                key={index}
                className="border rounded-xl p-3 sm:p-4 bg-gray-50"
              >
                <p className="font-semibold">{review.reviewerName}</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {review.reviewerEmail}
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base">
                  {review.comment}
                </p>
                <p className="text-yellow-500 font-medium mt-1">
                  Rating: {review.rating}/5
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
