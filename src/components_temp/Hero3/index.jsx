import React from 'react';
import heroBg from "../../assets/hero_3_max.jpg";

function Hero3() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-blue-100 to-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center max-w-2xl space-y-4 text-center p-6 mt-[-18rem]">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">MacBook Air</h1>
        <p className="text-lg md:text-xl text-gray-800">Sky blue colour.</p>
        <p className="text-lg md:text-xl text-gray-800">Sky high performance with M4.</p>
        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full text-base transition">
            Learn more
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-5 rounded-full text-base transition">
            Buy
          </button>
        </div>
      </div>
      {/* Gradient Overlay */}
      <div className="py-2 px-4 rounded-[1.5rem] absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-lg font-medium pt-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-orange-400">
            Built for Apple Intelligence.
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero3;
