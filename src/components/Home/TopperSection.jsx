import React from "react";
import { Link } from 'react-router-dom';
import photo1 from "../../assets/banner-01.png";
import photo2 from "../../assets/banner-02.png";
import photo3 from "../../assets/banner-03.png";


const promoData = [
  {
    title: "Quality eggs at an",
    title2: "affordable price",
    subtitle: "Eat one every day",
    buttonText: "Shop Now",
    imgSrc: photo1,
  },
  {
    title: "Snacks that nourishes",
    title2: " our mind and body",
    subtitle: "Shine the morning...",
    buttonText: "Shop Now",
    imgSrc: photo2,
  },
  {
    title: "Unbeatable quality, ",
    title2: " unbeatable prices.",
    subtitle: "Only this week. Don't miss...",
    buttonText: "Shop Now",
    imgSrc: photo3,
  },
];

const TopperSection = () => {
  return (
    <div
      style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
    >
      {promoData.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "30%",
            textAlign: "left",
            position: "relative", 
            
          }}
        >
          <img
            src={item.imgSrc}
            alt={item.title1}
            style={{ width: "100%", borderRadius: "5px", marginTop: "20px" }}
          />
          {/* Text and Button Overlay */}
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "20px",
              color: "black",
            //   backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "5px",
              fontSize:'12px'
            }}
          >
            <span style={{ color: "#F05A28", fontWeight: "bold" }}>
              Only This Week
            </span>
            <h2 style={{margin:'0px'}}>{item.title}</h2>
            <h2 style={{margin:'0px'}}>{item.title2}</h2>
            <p style={{ fontSize:'10px'}}>{item.subtitle}</p>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                fontSize:'8px',
                border: "1px solid #000",
                borderRadius: "20px",
                padding: "10px 20px",
                cursor: "pointer",
                width:"auto",
                button:'small'
              }}
              
            ><Link to={`/products/${item.title}`}> 
              {item.buttonText} &rarr;
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopperSection;
