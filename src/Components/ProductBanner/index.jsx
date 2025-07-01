// components/ProductBanner.jsx
import React from "react";

function ProductBanner({ product }) {
  const { title, subtitle, image, textColor, button ,textposition , gradient } = product;

  return (
    <section className="relative w-full h-[100vh] md:h-[80vh] overflow-hidden p-4 rounded-lg shadow-lg">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Grid Wrapper */}
      <div className="relative z-10 grid place-items-center w-full h-full px-4 py-2 ">
        {/* Overlay Content */}
        <div className={`${textposition} ${textColor} p-4 text-center`}>
          <h1 className="text-4xl md:text-6xl font-semibold ">{title}</h1>
          <p className="text-lg md:text-xl mb-6">
            {subtitle} <sup>2</sup>
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full">
              Learn more
            </button>
            <button className={ `${button} border border-white text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition`}>
              Buy
            </button>
          </div>
        </div>
      </div>

    {/* Gradient Overlay */}
      <div className={`${gradient} py-2 px-4 rounded-[1.5rem] absolute bottom-8 left-1/2 transform -translate-x-1/2`}>
        <p className="text-lg font-medium pt-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-orange-400">
            Built for Apple Intelligence.
          </span>
        </p>
      </div>
    </section>
  );
}

export default ProductBanner;
