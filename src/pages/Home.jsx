import React from "react";
import Topbar from "../components/Shared/HeroSection/Topbar";
import Navbar from "../components/Shared/HeroSection/Navbar";
// import Banner from "../components/Home/Banner";
import TopperSection from "../components/Home/TopperSection";
import NewArraival from "../components/Home/NewArraival";
import FeatureProducts from "../components/Home/FeatureProducts";
import Bestseller from "../components/Home/Bestseller";
import Popularcompanies from "../components/Home/Popularcompanies";
import Footer from "../components/Shared/HeroSection/Footer";
import Header from "../components/Shared/HeroSection/Header";

const Home = () => {
  return (
    <div>
        <Header />
      {/* <Banner />
      <TopperSection />
      <NewArraival /> */}
      <FeatureProducts />
      <Bestseller />
      <Popularcompanies />
     
    </div>
  );
};

export default Home;
