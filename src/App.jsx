import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import AppleNavbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Products from "./components/Products";
import ProductBanner from "./components/ProductBanner";
import Movieposter from "./components/MoviePoster";
import Footer from "./components/Footer";

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
        <Movieposter />
        <Footer />
      </div>
    </>
  );
}

export default App;
