import ProductBanner from "../ProductBanner";
import Airpods from "../../assets/airpods.jpg";
import ipad from "../../assets/ipad_air.jpg";
import iphone from "../../assets/iphone.jpg";
import macbook from "../../assets/macbook.jpg";
import tradein from "../../assets/tradein.jpg"; 
import applewatch from "../../assets/apple watch.jpg";

const products = [
  {
    id: 1,
    title: "AirPods 4",
    subtitle: "Iconic. Now supersonic. Available with Active Noise Cancellation.",
    image: Airpods,
    textColor: "text-white",
    overlay: "from-black/60 via-black/30 to-transparent",
    textposition: "text-center mt-20"
  },
  {
    id: 2,
    title: "iPad Air",
    subtitle: "Now supercharged by the M3 chip.",
    image: ipad,
    textColor: "text-gray-900",
    overlay: "from-white/60 via-white/30 to-transparent",
    textposition: "text-center mb-96"
  },
  {
    id: 3,
    title: "iPhone 16 Pro",
    subtitle: "The ultimate iPhone experience.",
    image: iphone,
    textColor: "text-black",
    overlay: "from-black/60 via-black/30 to-transparent",
    textposition: "text-center mb-96",
    gradient: "hidden",
    button: "border border-black text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition"
  },
  {
    id: 4,
    title: "MacBook Pro",
    subtitle: "Powerful performance for professionals.",
    image: macbook, 
    textColor: "text-white",
    overlay: "from-white/60 via-white/30 to-transparent",
    textposition: "text-center mb-96",
  },
  {
    id: 5,
    title: "Trade In",
    subtitle: "Upgrade and save. It's that easy",
    image: tradein,
    textColor: "text-black",
    overlay: "from-black/60 via-black/30 to-transparent",
    textposition: "text-center mb-96",
    gradient: "hidden",
    button: "border border-black text-grey"
  },
  {
    id: 6,
    title: "Apple Watch",
    subtitle: "Your essential companion.",
    image: applewatch,
    textColor: "text-white",
    overlay: "from-black/60 via-black/30 to-transparent",
    textposition: "text-center mb-96",
    
  }
];

function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {products.map((product) => (
        <ProductBanner key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
