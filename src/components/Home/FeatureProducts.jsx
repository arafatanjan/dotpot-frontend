import React from "react";
import { Link } from 'react-router-dom';
import o from "../../assets/o.png";
import p from "../../assets/p.png";
import q from "../../assets/q.png";
import r from "../../assets/r.png";
import s from "../../assets/s.png";
import t from "../../assets/t.png";
import u from "../../assets/u.png";
import v from "../../assets/v.png";

const products = [
  {
    title: "Marketside Fresh Organic Bananas, Bunch",
    price: "$0.89",
    oldPrice: "$1.98",
    discount: "56%",
    imgSrc: o,
    label: "ORGANIC",
    rating: 2,
  },
  {
    title: "Lay's Classic Potato Snack Chips, Party Size, 13 oz Bag",
    price: "$1.00",
    oldPrice: "$1.98",
    discount: "50%",
    imgSrc: p,
    label: "ORGANIC",
    rating: 2,
  },
  {
    title: "Great Value Classic Crust Pepperoni Microwave Frozen…",
    price: "$1.99",
    oldPrice: "$3.99",
    discount: "50%",
    imgSrc: q,
    label: "ORGANIC",
    rating: 2,
  },
  {
    title: "All Natural 85.15 Ground Beef – 1lb",
    price: "$7.75",
    oldPrice: "$8.75",
    discount: "12%",
    imgSrc: r,
    label: "ORGANIC",
    rating: 2,
  },
  {
    title: "ACT Anticavity Fluoride Mouthwash with Zero Alcohol",
    price: "$2.33",
    oldPrice: "$4.33",
    discount: "47%",
    imgSrc: s,
    label: "ORGANIC",
    rating: 2,
  },
  {
    title: "FireSmith Flame Grilled Chicken Breast",
    price: "$15.91",
    oldPrice: "$17.81",
    discount: "12%",
    imgSrc: t,
    label: "ORGANIC",
    rating: 2,
  },
];

const productData = [
  {
    title1: "Make your grocery",
    title2: "shopping easy with us",
    subtitle: "Only this week. Don’t miss...",
    buttonText: "Shop Now",
    imgSrc: v,
  },
  {
    title1: "Get your everyday ",
    title2: "needs here with us",
    subtitle: "A different kind of grocery store",
    buttonText: "Shop Now",
    imgSrc: u,
  },
];

const FeatureProducts = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <h3>Featured Products</h3>
        <p style={{ color: "#a19c9c", paddingTop: "5px" }}>
          Do not miss the current offers until the end of March.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0px",
          // overflowX: "auto",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: "0px",
              width: "auto",
              textAlign: "left",
              position: "relative",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex:'1' }}>
                <span
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    padding: "3px 5px",
                    borderRadius: "5px",
                  }}
                >
                  {product.discount}
                </span>
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  style={{
                    width: "50%",
                    borderRadius: "10px",
                    margin: "10px 0",
                  }}
                />
              </div>
              <div style={{ flex:'1' }}>
                <h4 style={{ fontSize:'14px' }}>{product.title}</h4>
                <p style={{ color: "red", fontWeight: "bold" }}>
                  {product.price}{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#888" }}
                  >
                    {product.oldPrice}
                  </span>
                </p>
                {/* {product.rating && <p>Rating: {product.rating}/5</p>} */}
                <Link style={{textDecoration:'none'}} to={`/products/${product.title}`}><button style={buttonStyle}>
      <span style={{ marginRight: "auto", fontSize:'13px' }}>Add to cart</span>
      <span style={iconStyle}>+</span>
      </button>
      </Link>
    
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {productData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "0px",
              borderRadius: "10px",
             
              width: "48%", 
              textAlign: "left",
              position: "relative",
            }}
          >
             <img
              src={item.imgSrc}
              alt={item.title1}
              style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
            />
             <div 
             style={{position: "absolute",
             top: "20px",
             left: "8px",}}
            >
            <h3 style={{ color: "#F05A28", fontWeight: "bold" }}>
              Only This Week
            </h3>
            <h2 style={{margin:'0px'}}>{item.title1}</h2>
            <h2 style={{margin:'0px'}}>{item.title2}</h2>
            <p style={{fontSize: "16px", color:'#a19c9c'}}>{item.subtitle}</p>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #000",
                borderRadius: "20px",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "12px"
              }}
            >
              {item.buttonText} &rarr;
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;


const buttonStyle = {
  display: "flex",
  alignItems: "center",
  width:'90%',
  padding: "5px 5px",
  borderRadius: "30px",
  border: "1px solid #634C9F",
  backgroundColor: "transparent",
  color: "#6a2fda",
  fontWeight: "bold",
  cursor: "pointer",
  marginRight:'20px'
};

const iconStyle = {
  fontWeight: "bold",
  fontSize: "10px",
};
