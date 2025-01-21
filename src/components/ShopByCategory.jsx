import ShopByBrand from "./ShopByBrand";
import ShopByRoomType from "./ShopByRoomType.JSX";

const ShopByCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Chandeliers",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/cle-chandelier-category.jpg",
    },
    {
      id: 2,
      name: "Ceiling Lights",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/cle-outdoor-category.jpg",
    },
    {
      id: 3,
      name: "Wall Lights",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/cle-wall-category.jpg",
    },
    {
      id: 4,
      name: "Fans",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/cle-fans-category.jpg",
    },
    {
      id: 5,
      name: "Outdoor",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/cle-fans-category.jpg",
    },
    {
      id: 6,
      name: "More",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/cle-pendant-category.jpg?v2",
    },
  ];

  return (
    <>
      <section className="shop-by-category bg-white py-16 px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
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

      <ShopByRoomType />

      <section>
        <div className="flex items-center justify-center gap-4 mx-auto px-4 sm:px-8 lg:px-16">
          <div className="image-container w-full sm:w-1/2 lg:w-1/2">
            <img
              src="https://images.canadalightingexperts.com/site/common/canada/content/3-new-arrivals-hp.jpg"
              alt="Image 1"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="image-container w-full sm:w-1/2 lg:w-1/2">
            <img
              src="https://images.canadalightingexperts.com/site/common/canada/content/3-discounts-hp.jpg?v3"
              alt="Image 2"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="shop-by-category bg-white py-16 text-center mb-12 px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Shop With Confidence From Us
        </h1>
        <p className="text-gray-700">
          <span className="hover:text-[#f1cdae] cursor-pointer">
            3 Day Delivery or You Get $25
          </span>
          {"     |     "}
          <span className="hover:text-[#f1cdae] cursor-pointer">
            No Restocking Fees
          </span>
          {"     |     "}
          <span className="hover:text-[#f1cdae] cursor-pointer">
            Low Price Guarantee
          </span>
        </p>
      </section>

      <section>
        <ShopByBrand />
      </section>
    </>
  );
};

export default ShopByCategory;
