import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/Group 70.png";
import location from "../../../assets/Link.png";
import Link1 from "../../../assets/Link1.png";
import { useLoaderData } from "react-router-dom";
import NewArraival from "../../Home/NewArraival";
// import { SearchContext } from '../../../hooks/SearchContext';                                 

const Navbar = ({ onChecked }) => {
  const [filterproduct, setFilterproduct] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const data = useLoaderData();               


  
  useEffect(() => {
    setSearchResult(data); 
  }, [data]); 


  const handleSearchClick = () => {
    // Perform the search based on the input value
    const match = data.filter((product) =>
      product?.title?.toLowerCase().includes(searchText.toLowerCase()) // Safely check if 'product.title' exists
    );
    setSearchResult(match); // Update the search results
    
  };

  // console.log(searchResult)
  onChecked(searchResult)

  return (
    
    <div>
      <div
        className="main-navbar"
      >
        <div className="logo-location">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
          />
        </div>

        {/* Location */}
        <div className="location-icon">
          <img src={location} alt="location" style={{ height: "26px" }} />
          <div style={{ textAlign: "center", fontSize: "11px" }}>
            Deliver to <br />
            <span style={{ fontWeight: "bold" }}>all</span>
          </div>
        </div>
        </div>

        {/* Search Bar */}
        <div
          className="search-bar"
        >
          <input
             type="text"
             value={searchText} 
             onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for products, categories or brands..."
           className="search-input"
          />
          <button
            type="button"
            onClick={handleSearchClick}
            className="search-icon"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Icons and Sign In */}
        <div className="icon-signin">
          <div>
            <img src={Link1} alt="link" style={{ height: "15px" }} />
          </div>

          <Link style={{ textDecoration: "none" }} to={`/login`}>
            <div style={{ textAlign: "center", fontSize: "11px" }}>
              <p style={{ margin: "0" }}>Sign In</p>
              <p style={{ margin: "0", fontWeight: "bold" }}>Account</p>
            </div>
          </Link>

          <i
            className="fa fa-heart"
            aria-hidden="true"
            style={{
              color: "black",
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></i>

          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{
              color: "black",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          ></i>
        </div>
      </div>

      {/* <NewArraival searchResult={searchResult} /> */}
    </div>
    
  );
};

export default Navbar;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6c4bb7", // Hex color close to the one in the image
    padding: "10px 20px",
    color: "white",
    fontSize: "16px",
  },
  text: {
    fontWeight: "bold",
  },
  timer: {
    fontFamily: "monospace",
  },
};
