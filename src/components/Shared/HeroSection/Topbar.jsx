import React, { useEffect, useState, useRef } from "react";
import "./Topbar.css";
import logo from "../../../assets/Group 70.png";
import location from "../../../assets/Link.png";
import Link1 from "../../../assets/Link1.png";

const Topbar = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [timer, setTimer] = useState();
  const intervalRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  // const saleEndDate = new Date();
  // saleEndDate.setDate(saleEndDate.getDate() + 47);

  const endDate = "21 July 2025 08:20:00 PM";
  const end = new Date(endDate);
  //console.log(end)

  useEffect(() => {
    const countdown = setInterval(() => {
      // const now = new Date().getTime();
      // const distance = saleEndDate.getTime() - now;
      const now = new Date();
      const distance = end - now;
      //console.log(distance)

      if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdown);
        setTimeLeft({}); // 'Sale ended!'
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileOpen(false);
    }
};

useEffect(() => {
    if (mobileOpen) {
        document.addEventListener("mousedown", handleClickOutside);
    } else {
        document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [mobileOpen]);

  return (
    <div>
      <div className="topper-maincontainer">
        <div className="topper-container">
          <div className=".topper-text">
            {/* FREE delivery & 40% Discount  */}
            <div className="news-container">
              <ul>
                <li>
                  FREE delivery & 40% Discount for next 3 orders! Place your 1st
                  order in.
                </li>
              </ul>
            </div>
          </div>
          <div className="topper-timer">
            {timeLeft.days !== undefined ? (
              <>
                Until the end of the sale: {timeLeft.days} days {timeLeft.hours}{" "}
                hours {timeLeft.minutes} minutes {timeLeft.seconds} sec.
              </>
            ) : (
              <span>Sale Ended</span>
            )}
          </div>
        </div>
      </div>

     
        {/* Top Navigation */}
        <div className="top-navigation">
          <div style={{ display: "flex", gap: "15px" }}>
            <span>About Us</span>
            <span>My Account</span>
            <span>Wishlist</span>
            <span>|</span>
            <span>
              We deliver to you every day from{" "}
              <span style={{ color: "#F05A28" }}>7:00 to 23:00</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <span>English</span>
            <span>USD</span>
            <span>Order Tracking</span>
          </div>
        </div>

        <div className="drawer">
     <div class="navbar-brand"></div> 
    
    <button className="menu-toggle" onClick={handleDrawerToggle}>☰</button>
    <div className={`nav-links ${mobileOpen ? 'active' : ''}`} ref={navRef}>
                <span>About Us</span>
                <span>My Account</span>
                <span>Wishlist</span>
                <span>English</span>
                <span>USD</span>
                <span>Order Tracking</span>
            </div>

</div>
    </div>
  );
};

export default Topbar;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6c4bb7",
    padding: "0px 110px",
    color: "white",
    fontSize: "12px",
  },
  text: {
    fontWeight: "bold",
  },
  timer: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
  },
};
