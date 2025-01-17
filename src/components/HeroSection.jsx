import { useState } from "react";
import { FiArrowRight } from "react-icons/fi"; // Arrow icon for switching images
import img1 from "../assets/img1.png"; // Left image placeholder
import fullWidthImage from "../assets/fullWidthImage.png"; // Full-width image placeholder
import ShopByCategory from "./ShopByCategory";

const HeroSection = () => {
  // State to handle the image on the right side
  const [rightImage, setRightImage] = useState(
    "https://via.placeholder.com/600x400?text=Right+Image+1" // Initial right image
  );

  const handleImageChange = () => {
    // Change the image when the arrow is clicked
    setRightImage(
      rightImage ===
        "https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-3daydelivery-hero.webp"
        ? "https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-canadian-brands-new-hero.webp"
        : "https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-3daydelivery-hero.webp"
    );
  };

  return (
    <section>
      {/* Categories Section Below the Header */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ul className="flex justify-center space-x-6">
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Plugin Lighting
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Brands
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Ceiling Lights
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Chandeliers Lights
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Fans
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Wall Lights
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Heating
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Outdoor
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              Shop By Room
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              More
            </li>
            <li className="text-md p-2 text-black-700 hover:text-blue-600">
              SALE
            </li>
          </ul>
        </div>
      </section>

      {/* Image Section with Left and Right Images */}
      <section className="bg-white max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
        {/* Left Image */}
        <div className="w-full sm:w-1/3 pr-6">
          <img
            src={img1}
            alt="Left Image"
            className="w-full rounded-lg shadow-md object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Image with Arrow Icon */}
        <div className="w-full sm:w-2/3 pl-6 flex justify-center items-center relative">
          <div className="w-full">
            <img
              src={rightImage}
              alt="Right Image"
              className="w-full rounded-lg shadow-md object-cover"
              loading="lazy"
            />
            <button
              onClick={handleImageChange}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            >
              <FiArrowRight className="text-gray-700 text-2xl" />
            </button>
          </div>
        </div>
      </section>

      {/* New Section with Full Width Image and 4 Images Below */}
      <section className="bg-white max-w-7xl mx-auto px-6 py-10">
        {/* Full Width Image in One Row */}
        <div className="w-full mb-8">
          <img
            src={fullWidthImage}
            alt="Full Width Image"
            className="w-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Four Images Below in One Row */}
        <div className="flex gap-4">
          <div className="w-full sm:w-1/4 bg-[#ffbd7f] p-4 rounded-lg shadow-md">
            <img
              src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-electric.jpg"
              alt="Electric Heater"
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
            <button className="w-full mt-4 px-6 py-2 bg-[#f1cdae] text-black font-semibold rounded-lg shadow-md hover:bg-[#d7a47a]">
              Electric
            </button>
          </div>

          <div className="w-full sm:w-1/4 bg-[#ffbd7f] p-4 rounded-lg shadow-md">
            <img
              src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-gas.jpg"
              alt="Gas Heater"
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
            <button className="w-full mt-4 px-6 py-2 bg-[#f1cdae] text-black font-semibold rounded-lg shadow-md hover:bg-[#d7a47a]">
              Gas
            </button>
          </div>

          <div className="w-full sm:w-1/4 bg-[#ffbd7f] p-4 rounded-lg shadow-md">
            <img
              src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-freestanding.jpg"
              alt="Free Standing Heater"
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
            <button className="w-full mt-4 px-6 py-2 bg-[#f1cdae] text-black font-semibold rounded-lg shadow-md hover:bg-[#d7a47a]">
              Free Standing
            </button>
          </div>

          <div className="w-full sm:w-1/4 bg-[#ffbd7f] p-4 rounded-lg shadow-md">
            <img
              src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-mounted.jpg"
              alt="Mounted Heater"
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
            <button className="w-full mt-4 px-6 py-2 bg-[#f1cdae] text-black font-semibold rounded-lg shadow-md hover:bg-[#d7a47a]">
              Mounted
            </button>
          </div>
        </div>
      </section>

      <ShopByCategory />
    </section>
  );
};

export default HeroSection;
