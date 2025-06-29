
import React from "react";

function ProductSection({ image, title, lines, textColor, descColor, bgColor }) {
  return (
    <section className={`w-full min-h-screen flex flex-col items-center justify-start text-center py-16 px-4 ${bgColor}`}>
      <div className="max-w-xl space-y-2 mt-12">
        <h1 className={`text-4xl md:text-6xl font-semibold ${textColor}`}>{title}</h1>
        {lines.map((line, i) => (
          <p key={i} className={`text-lg md:text-xl ${descColor}`}>
            {line}
          </p>
        ))}

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <button className="text-blue-600 hover:underline font-medium text-sm">
            Learn more &gt;
          </button>
          <button className="text-blue-600 hover:underline font-medium text-sm">
            Buy &gt;
          </button>
        </div>
      </div>

      <img
        src={image}
        alt={title}
        className="mt-10 max-w-[650px] w-full h-auto object-contain"
      />

      <p className={`text-base mt-8 ${textColor}`}>
        Built for{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">
          Apple Intelligence
        </span>
      </p>
    </section>
  );
}

export default ProductSection;
