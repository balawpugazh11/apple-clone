import React from "react";
import heroBg from "../../assets/hero_1_max.jpg"; // Optional: your repeating background
import MacbookImg from "../../assets/MacbookImg.png"; // Optional: image of MacBook
import iPadImg from "../../assets/IpadImg.png"; // Optional: image of iPad
import StudentEmoji from "../../assets/emoji.png"; // Optional: image of student emoji


const index = () => {
  return (
  <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="text-center space-y-4 z-10 flex flex-col items-center justify-center p-6">
        {/* First bubble with Mac + iPad */}
        <div className="relative inline-block bg-[#0071e3] text-white text-5xl font-bold px-4 py-4 rounded-[2rem] leading-snug max-w-md text-left">
          <span>Buy Mac <br/>or iPad <br /> for college</span>
          <div className="absolute -top-6 right-0 flex gap-1">
            <img src={MacbookImg} alt="Mac" className="w-20" />
            <img src={iPadImg} alt="iPad" className="w-14" />
          </div>
        </div>

        {/* Second bubble */}
        <div className="bg-[#0071e3] text-white text-base font-medium px-6 py-2 rounded-full inline-block max-w-fit">
          with education savings*
        </div>

        {/* Third bubble with emoji */}
        <div className="relative inline-block bg-[#0071e3] text-white text-4xl font-bold px-6 py-6 rounded-[2rem] leading-snug max-w-md text-left">
          <div className="absolute -left-5 -top-5 w-10 h-10">
            <img src={StudentEmoji} alt="emoji" className="w-full h-full rounded-full " />
          </div>
          Choose <br /> AirPods or <br />an eligible <br />accessory¹
        </div>

        {/* CTA Button */}
        <button className="mt-4 border border-[#0071e3] text-[#0071e3] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#0071e3] hover:text-white transition">
          Shop
        </button>
      </div>
    </section>
  );
};

export default index;
