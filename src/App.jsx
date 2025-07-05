import "./App.css";
import AppleNavbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Products from "./components/Products";
import ProductBanner from "./components/ProductBanner";

function App() {
  return (
    <>
      <AppleNavbar />
      <div className="pt-16">
        <PromoBanner />
        <Hero />
        <Hero2 />
        <Hero3 />
        <Products />
        <ProductBanner />
        <h1 className="text-4xl font-bold text-center mt-20">Apple Clone</h1>
        <p className="text-center mt-4">If you can see this, the app is working!</p>
      </div>
    </>
  );
}

export default App;
