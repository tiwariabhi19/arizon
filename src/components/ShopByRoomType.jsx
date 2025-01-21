import React from "react";

const ShopByRoomType = () => {
  const categories = [
    {
      id: 1,
      name: "Chandeliers",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/1stop/homepage/category/cat-sbr-dining.jpg",
    },
    {
      id: 2,
      name: "Ceiling Lights",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/1stop/homepage/category/cat-sbr-kitchen.jpg",
    },
    {
      id: 3,
      name: "Wall Lights",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/1stop/homepage/category/cat-sbr-bed.jpg",
    },
    {
      id: 4,
      name: "Fans",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/1stop/homepage/category/cat-sbr-living.jpg",
    },
    {
      id: 5,
      name: "Outdoor",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/1stop/homepage/category/cat-sbr-foyer.jpg",
    },
    {
      id: 6,
      name: "More",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/1stop/homepage/category/cat-sbr-office.jpg",
    },
  ];

  return (
    <>
      <section className="shop-by-category bg-white py-16 px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Shop by Room Type
          </h2>
        </div>

        {/* Categories in a single line */}
        <div className="flex justify-between gap-8">
          {categories.map((category) => (
            <div key={category.id} className="category-item text-center w-1/6">
              <div className="circle-image-container mb-4">
                <img
                  src={category.imgSrc}
                  alt={category.name}
                  className="category-image rounded-full w-40 h-40 object-cover mx-auto"
                />
              </div>
              <p className="text-lg text-gray-700">{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ShopByRoomType;
