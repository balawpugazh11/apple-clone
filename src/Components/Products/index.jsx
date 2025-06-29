import React from "react";
import ipad from "../../assets/ipad_air.jpg";
import iphone from "../../assets/iphone.jpg";
import macbook from "../../assets/macbook.jpg";
import ipadpro from "../../assets/ipad_pro.jpg";
import airpods from "../../assets/airpods.jpg";
import tradein from "../../assets/tradein.jpg";
import ProductSection from "../../Components/productSection";


function Index() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      <ProductSection
        image={ipad}
        title="iPad Air"
        lines={["Powerful and versatile.", "Now with M1 chip."]}
        textColor="text-gray-900"
        descColor="text-gray-800"
        bgColor="bg-white"
      />

      <ProductSection
        image={iphone}
        title="iPhone"
        lines={["The iPhone 16 family."]}
        textColor="text-gray-900"
        descColor="text-gray-800"
        bgColor="bg-gray-100"
      />

      <ProductSection
        image={macbook}
        title="MacBook Pro"
        lines={["A work of smart."]}
        textColor="text-white"
        descColor="text-white"
        bgColor="bg-black"
      />

      <ProductSection
        image={ipadpro}
        title="iPad Pro"
        lines={["Thin. Powerful. Pro."]}
        textColor="text-white"
        descColor="text-white"
        bgColor="bg-black"
      />

<ProductSection
  image={airpods}
  title="Airpods 4"
  lines={[
    "Iconic. Now supersonic.",
    "Available with Active Noise Cancellation. 2"
  ]}
  textColor="text-white"
  descColor="text-white"
  bgColor="bg-black"
/>

      <ProductSection
        image={tradein}
        title="Trade In"
        lines={["Upgrade and save. It’s that easy."]}
        textColor="text-white"
        descColor="text-white"
        bgColor="bg-black"
      />
    </div>
  );
}

export default Index;
