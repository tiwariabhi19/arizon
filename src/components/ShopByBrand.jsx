const ShopByBrand = () => {
  const categories = [
    {
      id: 1,
      name: "Chandeliers",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/3-ddb-elk.jpg",
    },
    {
      id: 2,
      name: "Ceiling Lights",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/3-ddb-quorum.jpg",
    },
    {
      id: 3,
      name: "Wall Lights",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/3-ddb-quoizel.jpg",
    },
    {
      id: 4,
      name: "Fans",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/3-ddb-uttermost.jpg",
    },
    {
      id: 5,
      name: "Outdoor",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/3-ddb-maxim.jpg",
    },
    {
      id: 6,
      name: "More",
      imgSrc:
        "https://images.canadalightingexperts.com/site/common/canada/content/3-ddb-euro.jpg",
    },
  ];

  return (
    <>
      <section className="shop-by-category bg-white py-16 px-4 sm:px-8 lg:px-16">
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800">Shop by Brand</h2>
  </div>

  {/* Categories in a single line */}
  <div className="flex justify-between items-center space-x-4">
    {categories.map((category) => (
      <div
        key={category.id}
        className="category-item text-center w-1/6"
      >
        <div className="image-container mb-4">
          <img
            src={category.imgSrc}
            alt={category.name}
            className="category-image w-48 h-auto object-cover mx-auto"
          />
        </div>
      </div>
    ))}
  </div>
</section>


      <hr className="my-4 border-t-4 border-gray-300" />

      <section className="bg-white-100 p-8 text-center rounded-lg px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          People Who Viewed Items You Browsed Also Viewed
        </h1>

        <div className="flex flex-col items-center text-center">
          <img
            className="max-w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            src="https://images.canadalightingexperts.com/supplier/Maxim-Lighting/products/52105PC_1k.jpg/200/200/1"
            alt="Viewed Item"
          />

          <div className="mt-4">
            <p className="text-lg text-gray-600">Maxim Lighting</p>
            <span className="text-xl text-blue-600 font-semibold">52100</span>
          </div>
        </div>
      </section>

      <hr className="my-4 border-t-4 border-gray-300" />
    </>
  );
};

export default ShopByBrand;
