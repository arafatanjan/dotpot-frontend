import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';

import k from '../assets/k1.png'
import l from '../assets/l1.png'
import m from '../assets/m1.png'
import n from '../assets/n1.png'
import o from '../assets/o1.png'
import p from '../assets/p1.png'

const products = [
    {
      title: "Large Garden Spinach & Herb Wraps",
      price: "$27.90",
      oldPrice: "$32.00",
      discount: "16%",
      imgSrc: k,
      inStock: true,
      rating: 3,
    },
    {
      title: "Peach - each",
      price: "$0.75",
      oldPrice: "$1.75",
      discount: "58%",
      imgSrc: l,
      inStock: true,
      rating: 3,
    },
    {
      title: "Yellow Potatoes - 5lb Bag",
      price: "$0.50",
      oldPrice: "$1.00",
      discount: "75%",
      imgSrc: m,
      inStock: true,
      rating: 4,
    },
    {
      title: "Fresh Cauliflower - each",
      price: "$12.79",
      oldPrice: "$14.78",
      discount: "14%",
      imgSrc: n,
      inStock: true,
      rating: 2,
    },
    {
      title: "Fresh Broccoli Crowns - each",
      price: "$11.54",
      oldPrice: "$17.88",
      discount: "36%",
      imgSrc: o,
      inStock: true,
      rating: 3,
    },
    {
      title: "Fresh Purple Eggplant - each",
      price: "$2.99",
      oldPrice: "$3.99",
      discount: "26%",
      imgSrc: p,
      inStock: true,
      rating: 3,
    },
  ];

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState('description');
    const data = useLoaderData();
    console.log(data)

  const calculateTimeLeft = () => {
    let difference = +new Date("2023-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
     
      <div style={{ flex: "1" }}>
        <img
          src={data?.imgSrc}
          alt="Market Fresh Organic Bananas"
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {/* <img
            src="banana-small1.jpg"
            alt="Banana Thumbnail 1"
            style={{ width: "50px" }}
          />
          <img
            src="banana-small2.jpg"
            alt="Banana Thumbnail 2"
            style={{ width: "50px" }}
          /> */}
        </div>
      </div>

      {/* Product Details Section */}
      <div style={{ flex: "1" }}>
        <h1>{data?.title}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>⭐⭐⭐ 3.00</span>
          <span>(2 reviews)</span>
          <span>SKU: EFR96H0</span>
        </div>
        <p style={{ color: "#f05a28", fontSize: "24px", fontWeight: "bold" }}>
          $0.89{" "}
          <span style={{ textDecoration: "line-through", color: "#888" }}>
            $1.89
          </span>
        </p>
        <button
          style={{
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            marginBottom: "20px",
          }}
        >
          Order on WhatsApp
        </button>
        <div
          style={{
            backgroundColor: "#FDF1E8",
            padding: "10px 20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span
            style={{
              color: "#F05A28",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Special Offer:
          </span>
          <div style={{ display: "flex", gap: "5px" }}>
            <div style={boxStyle}>{timeLeft.days || "00"}</div>
            <div style={boxStyle}>{timeLeft.hours || "00"}</div>
            <div style={boxStyle}>{timeLeft.minutes || "00"}</div>
            <div style={boxStyle}>{timeLeft.seconds || "00"}</div>
          </div>
          <span style={{ marginLeft: "10px", color: "#666" }}>
            Remains until the end of the offer.
          </span>
        </div>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px", marginTop: "20px" }}>
          <input
            type="number"
            defaultValue="1"
            style={{
              width: "60px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              backgroundColor: "#f05a28",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Add to cart
          </button>
          <button
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
            }}
          ><Link style={{color:'white', textDecoration: 'none'}} to={`/booking`}>
            Buy Now
            </Link>
          </button>
        </div>

        <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #ccc", margin: "20px 0" }}>
      <div style={warrantyStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={iconStyle}>💳</div> {/* Payment Icon Placeholder */}
          <p><strong>Payment:</strong> Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment</p>
        </div>
      </div>
      <div style={{ ...boxStyle, borderTop: "1px solid #ccc" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={iconStyle}>🛡️</div> {/* Warranty Icon Placeholder */}
          <p><strong>Warranty:</strong> The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
        </div>
      </div>
    </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              background: "none",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Add to wishlist
          </button>
          <button
            style={{
              background: "none",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Share this product
          </button>
          <button
            style={{
              background: "none",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Compare
          </button>
        </div>
      </div>
      </div>  
<div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
        <button
          onClick={() => setActiveTab('description')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '16px',
            fontWeight: activeTab === 'description' ? 'bold' : 'normal',
            borderBottom: activeTab === 'description' ? '2px solid black' : 'none',
            cursor: 'pointer',
          }}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '16px',
            fontWeight: activeTab === 'reviews' ? 'bold' : 'normal',
            borderBottom: activeTab === 'reviews' ? '2px solid black' : 'none',
            cursor: 'pointer',
          }}
        >
          Reviews (2)
        </button>
      </div>

      {activeTab === 'description' && (
        <div>
          <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla...
          </p>
          <p>
            Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque...
          </p>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div>
          <p>Review 1: Lorem ipsum dolor sit amet...</p>
          <p>Review 2: Vivamus nisi sapien, elementum sit amet eros...</p>
        </div>
      )}
   
   </div>

   <div>
   <div style={{ display: "flex", gap: "20px", justifyContent: "space-between", flexWrap: "wrap" }}>
      {products.map((product, index) => (
        <div key={index} style={{
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "10px",
          width: "10%",
          textAlign: "center",
          color: "#000",
          position: "relative",
        }}>
          <img src={product.imgSrc} alt={product.title} style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
          <span style={{ backgroundColor: "red", padding: "5px 10px", borderRadius: "10px", position: "absolute", top: "10px", right: "10px", color: "#fff", }}>{product.discount}</span>
          <h4>{product.title}</h4>
          <p style={{ color: "red", fontWeight: "bold" }}>{product.price} <span style={{ textDecoration: "line-through", color: "#888" }}>{product.oldPrice}</span></p>
          <p style={{ margin: "10px 0", color: "#4CAF50" }}>{product.inStock ? "IN STOCK" : "OUT OF STOCK"}</p>
          <button style={{
            backgroundColor: "#4CAF50",
            color: "#000",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"
          }}>Add to cart</button>
        </div>
      ))}
    </div>
   </div>
    </div>
  );
};

export default ProductDetails;


const boxStyle = {
    backgroundColor: "#F8D6B4",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#F05A28",
  };

  const warrantyStyle = {
    padding: "15px",
    backgroundColor: "#f9f9f9",
  };
  
  const iconStyle = {
    backgroundColor: "#e9ecef",
    padding: "10px",
    borderRadius: "50%",
  };
  
