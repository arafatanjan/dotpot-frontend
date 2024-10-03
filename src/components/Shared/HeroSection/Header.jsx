import React, { useState, useEffect } from "react";
import './Header.css'
import sale from "../../../assets/sale.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import banner from "../../../assets/banner.png";

const subcategory = [
    { name: "Fruits & Vegetables", icon: "fas fa-apple-alt" },
    { name: "Meats & Seafood", icon: "fas fa-drumstick-bite" },
    { name: "Breakfast & Dairy", icon: "fas fa-egg" },
    { name: "Breads & Bakery", icon: "fas fa-bread-slice" },
    { name: "Beverages", icon: "fas fa-coffee" },
    { name: "Frozen Foods", icon: "fas fa-snowflake" },
    { name: "Biscuits & Snacks", icon: "fas fa-cookie-bite" },
    { name: "Grocery & Staples", icon: "fas fa-seedling" },
    { name: "Household Needs", icon: "fas fa-home" },
    { name: "Healthcare", icon: "fas fa-heartbeat" },
    { name: "Baby & Pregnancy", icon: "fas fa-baby" }
  ]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div style={{ display: "flex", }}>
      {/* Sidebar */}

      <div style={{ width: "auto", backgroundColor: "#fff", paddingLeft: "0px", }}>
      <div className="dropdown">
      <p
                  className="dropdown-toggle"
                  onClick={toggleDropdown}
                  style={{ fontSize: "18px",cursor: 'pointer', fontWeight: '500', lineHeight: "1", whiteSpace: "nowrap" }}
                >
                  All Categories
                </p>
                {/* <ul style={{ listStyleType: "none", border: "2px solid #c9c6c5", padding:'3px' }}> */}
                {isOpen && (
  <ul
    className="dropdown-menu"
    style={{ listStyleType: "none", border: "", padding: "0px", width:'110%', margin:'0px',fontSize: "12px"  }}
  >
    {subcategory.map((item) => (
      <li key={item.name} style={{ display: "flex", alignItems: "center", padding: "10px", border: ".5px solid #c9c6c5" }}>
        <i className={item.icon} style={{ marginRight: "10px" }}></i>
        {item.name}
        <span style={{ marginLeft: "auto" }}>&gt;</span>
      </li>
    ))}
  </ul>
)}
        </div>
      </div>

  
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <ul style={{ display: "flex", listStyleType: "none", gap: "15px", margin: 0, padding: 0 }}>
            <li><Link className="" to={"/"} style={{textDecoration: 'none' }}>Home</Link></li>
            <li><Link className="" to={"/category"} style={{ textDecoration: 'none'}}>Shop</Link></li>
            <li><Link className="" to={"/category"} style={{ textDecoration: 'none'}}>Fruits & Vegetables</Link></li>
            <li><Link className="" to={"/category"} style={{ textDecoration: 'none'}}>Beverages</Link></li>
            <li><Link className="" to={""} style={{textDecoration: 'none' }}>Blog</Link></li>
            <li><Link className="" to={""} style={{textDecoration: 'none' }}>Contact</Link></li>
            
          </ul>
          <div>
          <ul style={{ display: "flex", listStyleType: "none", gap: "15px", margin: 0, padding: 0 }}>
          <li><Link className="" to={""} style={{textDecoration: 'none' }}>Trending Products</Link></li>
          <li > <Link className="" to={""} style={{ color: "#b53c14", textDecoration: 'none' }}>Almost Finished</Link></li>  
          <img src={sale} alt="sale" style={{ height: "15px" }} />
          </ul>
            
          </div>
        </nav>

        {/* Promotional Banner */}
        {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <div>
            <span style={{ backgroundColor: "green", color: "white", padding: "3px 8px", borderRadius: "5px", fontSize: "12px" }}>Weekend Discount</span>
            <h2>Get the best quality products at the lowest prices</h2>
            <p>We have prepared special discounts for you on grocery products. Don't miss these opportunities.</p>
            <button style={{ padding: "10px 20px", backgroundColor: "#6A2FDA", color: "white", border: "none", borderRadius: "5px" }}>Shop Now</button>
          </div>
          <div>
            <img src="product-image.jpg" alt="Promotion" style={{ width: "300px", borderRadius: "10px" }} />
          </div>
        </div> */}

<div style={{ display: "flex", justifyContent: "end" }}>
        <img
          src={banner}
          alt="Logo"
          style={{ height: "482.46px", width: "100%" }}
        />
      </div>
      </div>
    </div>
    );
};

export default Header;