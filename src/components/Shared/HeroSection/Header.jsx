import React, { useState, useEffect, useRef  } from "react";
import "./Header.css";
import sale from "../../../assets/sale.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import banner from "../../../assets/slider-01.png";
import weekend from "../../../assets/span.banner-badge.png";
import NewArraival from "../../Home/NewArraival";
import Banner from "../../Home/Banner";
import TopperSection from "../../Home/TopperSection";


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
  { name: "Baby & Pregnancy", icon: "fas fa-baby" },
];

const Header = () => {
  const newArrivalsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (newArrivalsRef.current) {
      newArrivalsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <div style={{ display: "flex" }}>
      {/* Sidebar */}

      <div
        style={{ width: "auto", backgroundColor: "#fff", paddingLeft: "0px" }}
      >
        <div className="dropdown">
          <p
            className="dropdown-toggle"
            onClick={toggleDropdown}
            style={{
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "500",
              lineHeight: "1",
              whiteSpace: "nowrap",
            }}
          >
            All Categories
          </p>
          {/* <ul style={{ listStyleType: "none", border: "2px solid #c9c6c5", padding:'3px' }}> */}
          {isOpen && (
            <ul
              className="dropdown-menu"
              style={{
                listStyleType: "none",
                border: "",
                padding: "0px",
                width: "110%",
                margin: "0px",
                fontSize: "12px",
              }}
            >
              {subcategory.map((item) => (
                <li
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    border: ".5px solid #c9c6c5",
                  }}
                >
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
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              gap: "15px",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link className="" to={"/"} style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className=""
                to={"/category"}
                style={{ textDecoration: "none" }}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className=""
                to={"/category"}
                style={{ textDecoration: "none" }}
              >
                Fruits & Vegetables
              </Link>
            </li>
            <li>
              <Link
                className=""
                to={"/category"}
                style={{ textDecoration: "none" }}
              >
                Beverages
              </Link>
            </li>
            <li>
              <Link className="" to={""} style={{ textDecoration: "none" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="" to={""} style={{ textDecoration: "none" }}>
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                gap: "15px",
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <Link className="" to={"/#"} style={{ textDecoration: "none" }} onClick={handleScroll}>
                  Trending Products
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className=""
                  to={""}
                  style={{ color: "#b53c14", textDecoration: "none" }}
                >
                  Almost Finished
                </Link>
              </li>
              <img src={sale} alt="sale" style={{ height: "15px" }} />
            </ul>
          </div>
        </nav>

        {/* Promotional Banner */}
        <div style={{ display: "flex", position: "relative" }}>
          <img
            src={banner}
            alt="Promotion"
            style={{ height: "482.46px", width: "100%" }}
          />

          <div style={{ position: "absolute", top: "58px", left: "60px" }}>
            <img
              src={weekend}
              alt="weekend"
              style={{ width: "20%", marginBottom: "20px" }}
            />
            <h2
              style={{
                fontSize: "35px",
                fontWeight: "900",
                color: "#513275",
                margin: "0",
              }}
            >
              Get the best quality products{" "}
            </h2>
            <h2
              style={{
                fontSize: "35px",
                fontWeight: "900",
                color: "#513275",
                margin: "0",
              }}
            >
              {" "}
              at the lowest{" "}
            </h2>
            <h2
              style={{
                fontSize: "35px",
                fontWeight: "900",
                color: "#513275",
                margin: "0",
              }}
            >
              {" "}
              prices
            </h2>
            <p style={{ margin: "20px 0 0px 0" }}>
              We have prepared special discounts for you on grocery{" "}
            </p>
            <p style={{ margin: "0 0 50px 0" }}>
              {" "}
              products. Don't miss these opportunities....
            </p>


            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
                className=""
                to={"/category"}
                style={{ textDecoration: "none" }}>
  <button
    style={{
      padding: "10px 20px",
      backgroundColor: "#6A2FDA",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Shop Now
  </button>
  </Link>
  <div>
    <span style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
      $27.99
    </span>
    <span
      style={{
        textDecoration: "line-through",
        color: "#666",
        marginLeft: "10px",
        fontSize: "18px",
      }}
    >
      $56.67
    </span>
    <p style={{ color: "#666", fontSize: "12px", margin: "5px 0 0 0" }}>
      Don't miss this limited time offer.
    </p>
  </div>
</div>


          </div>
        </div>

        {/* <div style={{ display: "flex", justifyContent: "end" }}>
        <img
          src={banner}
          alt="Logo"
          style={{ height: "482.46px", width: "100%" }}
        />
      </div> */}
      </div>
      
    </div>
    <Banner />
      <TopperSection />
    <NewArraival ref={newArrivalsRef}/>
    </div>
  );
};

export default Header;
