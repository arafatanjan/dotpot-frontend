import React,  { forwardRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../hooks/SearchContext';

import "./NewArraival.css";
import e from "../../assets/e.png";
import f from "../../assets/f.png";
import g from "../../assets/g.png";
import h from "../../assets/h.png";
import i from "../../assets/i.png";
import j from "../../assets/j.png";
import k from "../../assets/k.png";
import l from "../../assets/l.png";
import m from "../../assets/m.png";
import n from "../../assets/n.png";



const NewArraival = forwardRef((props, ref) => {
 
  // const newArrivalsRef = useRef(null);
  const searchResult = useContext(SearchContext);
  
  // console.log(searchResult)

  if (!searchResult || searchResult.length === 0) {
    return <p>Loading new arrivals...</p>; 
  }

  return (
    <div  ref={ref}>
      <div style={{ display: "flex", gap: "10px" }}>
        <h3>New Arrivals</h3>
        <p style={{ color: "#a19c9c", paddingTop: "5px" }}>
          Don't miss this opportunity at a special discount just for this week.
        </p>
      </div>
      <div style={{ display: "flex", gap: "0px", overflowX: "auto", fontSize: "14px" }}>
        {searchResult?.slice(0, 6).map((product, id) => (
          <div
            key={id}
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
              textAlign: "start",
            }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src={product.imgSrc}
                alt={product.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  margin: "10px 0",
                }}
              />
              {product.discount && (
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "8px",
                    backgroundColor: "red",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    fontSize: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {product.discount}
                </span>
              )}
            </div>
            <h4>{product.title}</h4>
            <p style={{ color: "red", fontWeight: "bold" }}>
              {product.price}{" "}
              <span style={{ textDecoration: "line-through", color: "#888" }}>
                {product.oldPrice}
              </span>
            </p>
            <p style={{ color: "#cfb17e", fontWeight: "bold" }}>-----<span style={{ color: "#a19c9c", fontSize: "12px" }}> 3</span></p>
            <button
              style={{
                border: "1px solid #634C9F",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "20px",
                cursor: "pointer",
                width:'100%',
                textAlign: "start",
                fontSize:'13px'
              }}
            ><Link style={{textDecoration:'none'}} to={`/products/${product.title}`}>
              Add to cart
              </Link>
            </button>
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
        {promoData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "0px",
              borderRadius: "0px",
              // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "23%",
              textAlign: "left",
              position: "relative",
            }}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
            />
            <div 
             style={{position: "absolute",
             top: "20px",
             left: "8px",}}
            >
            <h3 style={{ color: "#F05A28", fontWeight: "bold", fontSize: "12px" }}>
              Only This Week
            </h3>
            <h2 style={{  fontSize: "20px" }}>{item.title}</h2>
            <p style={{  fontSize: "13px", color: "#6B7280",  }}>{item.subtitle}</p>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #000",
                borderRadius: "20px",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "13px"
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
}
);

export default NewArraival;

const products = [
  {
    title: "100 Percent Apple Juice – 64 fl oz Bottle",
    price: "$0.50",
    oldPrice: "$1.98",
    discount: "75%",
    imgSrc: e,
    label: "ORGANIC",
  },
  {
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    price: "$8.99",
    oldPrice: "$9.89",
    discount: "11%",
    imgSrc: f,
    label: "COLD SALE",
  },
  {
    title: "Simply Orange Pulp Free Juice – 52 fl oz",
    price: "$2.45",
    oldPrice: "$4.13",
    discount: "41%",
    imgSrc: g,
    label: "COLD SALE",
  },
  {
    title: "California Pizza Kitchen Margherita, Crispy Thin Crust",
    price: "$11.77",
    oldPrice: "$14.77",
    discount: "21%",
    imgSrc: h,
    label: "COLD SALE",
  },
  {
    title: "Cantaloupe Melon Fresh Organic Cut",
    price: "$1.25",
    oldPrice: "$2.88",
    discount: "59%",
    imgSrc: i,
    label: "ORGANIC",
  },
  {
    title: "Angel Soft Toilet Paper, 9 Mega Rolls",
    price: "$14.12",
    oldPrice: "$17.12",
    discount: "18%",
    imgSrc: j,
    label: "ORGANIC",
  },
];

const promoData = [
  {
    title: "Provides you experienced quality products",
    subtitle: "Feed your family the best",
    buttonText: "Shop Now",
    imgSrc: k,
  },
  {
    title: "Shopping with us for better quality and the best price",
    subtitle: "Only this week. Don’t miss...",
    buttonText: "Shop Now",
    imgSrc: l,
  },
  {
    title: "Get the best quality products at the lowest prices",
    subtitle: "A different kind of grocery store",
    buttonText: "Shop Now",
    imgSrc: m,
  },
  {
    title: "Where you get all favorite brands under one roof",
    subtitle: "Only this week. Don’t miss...",
    buttonText: "Shop Now",
    imgSrc: n,
  },
];
