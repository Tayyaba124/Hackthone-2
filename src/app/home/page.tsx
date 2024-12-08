"use client"; // For Next.js App Router
import React from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook

const Hero = () => {
  const router = useRouter(); // Initialize the router

  const handleViewCollectionClick = () => {
    router.push("/product-listing"); // Redirect to the product listing page
  };

  return (
    <div className="bg-white w-[1440px] h-[704px] flex items-center justify-center">
      <div className="bg-[#2A254B] w-[1280px] h-[584px] flex items-center justify-center">
        {/* Left Content */}
        <div className="flex-1 text-white flex flex-col justify-center pl-[60px]">
          <div className="text-start h-[187px] w-[513px] gap-[41px]">
            <h2 className="text-3xl font-[Clash Display]">
              The furniture brand for the future, with timeless designs
            </h2>
            <button
              onClick={handleViewCollectionClick} // Add onClick event for the button
              className="bg-white text-[#2A254B] rounded-md shadow-md w-[170px] h-[56px] mt-[24px]"
            >
              View collection
            </button>
          </div>
          <div className="mt-6 text-start w-[602px]">
            <p className="text-gray-300">
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts,
              tasteful colors, and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/chair.avif"
            alt="Chair"
            className="w-[602px] h-[584px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
