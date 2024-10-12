import React, {useState } from "react";
// import Navbar from '../Components/home/NavbarPage';
import { Outlet, useLocation } from "react-router-dom";
// import Footer from '../Components/home/Footer';
// import Banner from "../components/Shared/HeroSection/Banner";
import Header from "../components/Shared/HeroSection/Header";
import Navbar from "../components/Shared/HeroSection/Navbar";
import Topbar from "../components/Shared/HeroSection/Topbar";
import TopperSection from "../components/Home/TopperSection";
import NewArraival from "../components/Home/NewArraival";
import FeatureProducts from "../components/Home/FeatureProducts";
import Bestseller from "../components/Home/Bestseller";
import Popularcompanies from "../components/Home/Popularcompanies";
import Footer from "../components/Shared/HeroSection/Footer";
import { useLoaderData } from "react-router-dom";
import { SearchContext } from '../hooks/SearchContext';   

const MainLayout = () => {
  const location = useLocation();
  const data = useLoaderData();
  const [check, setCheck] = useState([])
  const [newdata, setNewdata] = useState([])

  function onChecked(check){
    setNewdata(check)
}
// console.log(newdata)

  // const noNavbarRoutes = ['/merchantcorner'];



  return (
    <div style={{width:"85%", margin:'auto'}}>
      <Topbar style={{width:"115%", margin:'auto'}}/>
      <Navbar onChecked={onChecked}/>
      <SearchContext.Provider value={newdata}>
      <Outlet  />
      </SearchContext.Provider>
      <Footer />
    </div>
  );
};

export default MainLayout;
