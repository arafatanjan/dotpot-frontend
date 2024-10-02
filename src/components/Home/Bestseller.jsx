import React from "react";
import a from "../../assets/a1.png";
import b from "../../assets/b1.png";
import c from "../../assets/c1.png";
import d from "../../assets/d1.png";
import e from "../../assets/e1.png";
import f from "../../assets/f1.png";
import g from "../../assets/g1.png";
import h from "../../assets/h1.png";
import i from "../../assets/i1.png";
import j from "../../assets/j1.png";
import promo from "../../assets/promo.png";

import "./Bestseller.css";
const products = [
  {
    title: "Philadelphia Original Cream Cheese Spread – 12oz",
    price: "$5.00",
    oldPrice: "$6.13",
    discount: "19%",
    imgSrc: a,
    rating: 3,
  },
  {
    title: "Cantaloupe Melon Fresh Organic Cut",
    price: "$1.25",
    oldPrice: "$2.88",
    discount: "59%",
    imgSrc: b,
    label: "ORGANIC",
    rating: 3,
  },
  {
    promo: true,
    title: "We are always here to help you with your grocery",
    subtitle: "A different kind of grocery store",
    buttonText: "Shop Now",
    imgSrc: c,
  },
  {
    title: "Pearl Milling Company Original Syrup – 24 fl oz",
    price: "$2.38",
    oldPrice: "$3.38",
    discount: "30%",
    imgSrc: d,
    rating: 3,
  },
  {
    title: "Evolve Plant-Powered Protein Shake – Double Chocolate",
    price: "$14.69",
    oldPrice: "$17.89",
    discount: "17%",
    imgSrc: e,
    rating: 3,
  },
  {
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    price: "$8.99",
    oldPrice: "$9.89",
    discount: "11%",
    imgSrc: f,
    label: "COLD SALE",
    rating: 3,
  },
  {
    title: "California Pizza Kitchen Margherita, Crispy Thin Crust",
    price: "$11.77",
    oldPrice: "$14.77",
    discount: "21%",
    imgSrc: g,
    label: "COLD SALE",
    rating: 3,
  },
  {
    promo: true,
    title: "With your favorite food, we will make your mood",
    subtitle: "Only this week. Don’t miss...",
    buttonText: "Shop Now",
    imgSrc: h,
  },
  {
    title: "Thomas' Everything Bagels – 20oz 6ct",
    price: "$2.50",
    oldPrice: "$4.59",
    discount: "45%",
    imgSrc: i,
    rating: 3,
  },
  {
    title: "Take And Bake Baguettes – 14oz 2ct",
    price: "$1.75",
    oldPrice: "$2.75",
    discount: "37%",
    imgSrc: j,
    rating: 3,
  },
];

const Bestseller = () => {
  return (
    <div>   
      <div style={{ display: "flex", gap: "10px" }}>
        <h3>Best Sellers</h3>
        <p style={{ color: "#a19c9c", paddingTop: "5px" }}>
          Some of the new products arriving this weeks.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "0px",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "0px",
              borderRadius: "0px",
              border: "1px solid #E5E7EB",
              width: product.promo ? "27%" : "18%",
              // textAlign: "center",
              position: "relative",
              height: "343px",
            }}
          >
            {product.promo ? (
              <>
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  style={{
                    width: "100%",
                    borderRadius: "0px",
                    marginTop: "0px",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    padding: "10px",
                  }}
                >
                  <h3
                    style={{
                      color: "#F05A28",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    Only This Week
                  </h3>
                  <h2 style={{ color: "", fontWeight: "", fontSize: "22px" }}>
                    {product.title}
                  </h2>
                  <p style={{ color: "#a19c9c", fontSize: "10px" }}>
                    {product.subtitle}
                  </p>
                  <button
                    style={{
                      backgroundColor: "#fff",

                      color: "#000",
                      border: "1px solid #000",
                      borderRadius: "20px",
                      padding: "10px 20px",
                      cursor: "pointer",
                      fontSize: "10px",
                    }}
                  >
                    {product.buttonText} &rarr;
                  </button>
                </div>
              </>
            ) : (
              <>
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
                    width: "90%",
                    borderRadius: "10px",
                    margin: "0px 0",
                  }}
                />
                <h4 style={{ margin: "2px", padding: "0px" }}>
                  {product.title}
                </h4>
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "2px",
                    padding: "2px",
                  }}
                >
                  {product.price}{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "#888" }}
                  >
                    {product.oldPrice}
                  </span>
                </p>
                {product.rating && (
                  <p style={{ margin: "2px", padding: "0px" }}>
                    Rating: {product.rating}/5
                  </p>
                )}
                <button style={buttonStyle}>
                  <span style={{ marginRight: "auto", fontSize: "13px" }}>
                    Add to cart
                  </span>
                  <span style={iconStyle}>+</span>
                </button>
              </>
            )}
          </div>
        ))}
        <div>
          <img
            src={promo}
            alt="promo"
            style={{ width: "100%", borderRadius: "0px", margin: "10px 0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Bestseller;


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
  marginRight:'20px',
  marginTop:'20px'
};

const iconStyle = {
  fontWeight: "bold",
  fontSize: "10px",
};