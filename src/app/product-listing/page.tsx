import React from "react";

const List = () => {
    const products = [
        { name: "The Dandy Chair", price: "£250", image: "/chair.avif" },
        { name: "Rustic Vase Set", price: "£155", image: "/Parent.png" },
        { name: "The Silky Vase", price: "£125", image: "/Parent 2.png" },
        { name: "The Lucy Lamp", price: "£399", image: "/Parent 3.png" },
        { name: "The Dandy Chair", price: "£250", image: "/parent 4.png" },
        { name: "Rustic Vase Set", price: "£155", image: "/Parent 5.png" },
        { name: "The Silky Vase", price: "£125", image: "/Parent 6.png" },
        { name: "The Lucy Lamp", price: "£399", image: "/Photo.png" },
        { name: "Sofa", price: "£350", image: "/1 sofa.jpeg" },
        { name: "Chair", price: "£200", image: "/2chair.jpeg" }, 
        { name: "Bed", price: "£450", image: "/bed.jpeg" }, 
        { name: "greenbed", price: "£650", image: "/green.jpg" }, 
      ];
  return (
    <div className="bg-white min-h-screen p-8">
        <div className="mb-8">
        <img
          src="/Frame 143.png" // Path to the first image
          alt="Frame 143"
          className="w-[1440px] h-[209px] object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="w-[1440px] h-[64px] bg-white">
        
      <div className="bg-white w-full flex items-start justify-start p-4">
  {/* Category Dropdown */}
  <div className="flex items-center">
    <label htmlFor="category" className="mr-2 text-sm text-gray-700">Category</label>
    <select id="category" className="border p-2 rounded-md text-sm">
      <option value="all">All Categories</option>
      <option value="furniture">Furniture</option>
      <option value="vases">Vases</option>
      <option value="lighting">Lighting</option>
    </select>
  </div>

  {/* Product Type Dropdown */}
  <div className="flex items-center">
    <label htmlFor="product-type" className="mr-2 text-sm text-gray-700">Product type</label>
    <select id="product-type" className="border p-2 rounded-md text-sm">
      <option value="all">All Types</option>
      <option value="modern">Modern</option>
      <option value="classic">Classic</option>
      <option value="minimalist">Minimalist</option>
    </select>
  </div>

  {/* Price Dropdown */}
  <div className="flex items-center">
    <label htmlFor="price" className="mr-2 text-sm text-gray-700">Price</label>
    <select id="price" className="border p-2 rounded-md text-sm">
      <option value="all">All Prices</option>
      <option value="low">Low to High</option>
      <option value="high">High to Low</option>
    </select>
  </div>

  {/* Brand Dropdown */}
  <div className="flex items-center">
    <label htmlFor="brand" className="mr-2 text-sm text-gray-700">Brand</label>
    <select id="brand" className="border p-2 rounded-md text-sm">
      <option value="all">All Brands</option>
      <option value="avelon">Avelon</option>
      <option value="luxury">Luxury</option>
      <option value="eco">Eco-Friendly</option>
    </select>
  </div>


 {/* Sorted By Dropdown */}
 <div className="flex-center ml-80">
    <label htmlFor="sort-by" className="mr-2 text-sm text-gray-700">Sorted By</label>
    <select id="sort-by" className="border p-2 rounded-md text-sm">
      <option value="date">Date Added</option>
      <option value="price">Price</option>
      <option value="popularity">Popularity</option>
    </select>
  </div>

  {/* Date Added Dropdown */}
  <div className="flex-center">
    <label htmlFor="date-added" className="mr-2 text-sm text-gray-700">Date Added</label>
    <select id="date-added" className="border p-2 rounded-md text-sm">
      <option value="all">All Dates</option>
      <option value="last-week">Last Week</option>
      <option value="last-month">Last Month</option>
      <option value="last-year">Last Year</option>
    </select>
  </div>


  </div>
</div>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm h-[462px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-[305px] h-[375px] object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;


