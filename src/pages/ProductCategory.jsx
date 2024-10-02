import React, { useState } from 'react';
import banner from "../assets/banner1.png";
import { Link } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
const categories = [
    'Fruits & Vegetables',
    'Baby & Pregnancy',
    'Beverages',
    'Meats & Seafood',
    'Biscuits & Snacks',
    'Breads & Bakery',
    'Breakfast & Dairy',
    'Frozen Foods',
    'Grocery & Staples',
    'Healthcare',
    'Household Needs',
  ];

  const products = [
    {
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      price: "$0.50",
      oldPrice: "$1.98",
      discount: "75%",
      imgSrc: banner,
      label: "ORGANIC",
    },
    {
      title: "Great Value Rising Crust Frozen Pizza, Supreme",
      price: "$8.99",
      oldPrice: "$9.89",
      discount: "11%",
      imgSrc: banner,
      label: "COLD SALE",
    },
    {
      title: "Simply Orange Pulp Free Juice – 52 fl oz",
      price: "$2.45",
      oldPrice: "$4.13",
      discount: "41%",
      imgSrc: banner,
      label: "COLD SALE",
    },
    {
      title: "California Pizza Kitchen Margherita, Crispy Thin Crust",
      price: "$11.77",
      oldPrice: "$14.77",
      discount: "21%",
      imgSrc: banner,
      label: "COLD SALE",
    },
    {
      title: "Cantaloupe Melon Fresh Organic Cut",
      price: "$1.25",
      oldPrice: "$2.88",
      discount: "59%",
      imgSrc: banner,
      label: "ORGANIC",
    },
    {
      title: "Angel Soft Toilet Paper, 9 Mega Rolls",
      price: "$14.12",
      oldPrice: "$17.12",
      discount: "18%",
      imgSrc: banner,
      label: "ORGANIC",
    },
  ];

const ProductCategory = () => {
    const [price, setPrice] = useState([0, 30]);
  const [selectedCategory, setSelectedCategory] = useState('Fruits & Vegetables');
  const [selectedColor, setSelectedColor] = useState('Green');
  const [selectedBrand, setSelectedBrand] = useState('Fresh');
  const [inStock, setInStock] = useState(false);
  const data = useLoaderData();

    return (
        <div>
            <div>
            <nav style={navStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}>Home <span>▼</span></li>
        <li style={navItemStyle}>Shop <span>▼</span></li>
        <li style={navItemStyle}>Fruits & Vegetables</li>
        <li style={navItemStyle}>Beverages</li>
        <li style={navItemStyle}>Blog</li>
        <li style={navItemStyle}>Contact</li>
      </ul>
      <ul style={navListStyle}>
        <li style={navItemStyle}>Trending Products <span>▼</span></li>
        <li style={{ ...navItemStyle, color: "red" }}>
          Almost Finished <span style={saleStyle}>SALE</span> <span>▼</span>
        </li>
      </ul>
    </nav>
            </div>
            <div style={{display:'flex'}}>
            <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h3>Widget price filter</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="number"
          value={price[0]}
          onChange={(e) => setPrice([Number(e.target.value), price[1]])}
          min="0"
          max="30"
          style={{ width: "48%" }}
        />
        <input
          type="number"
          value={price[1]}
          onChange={(e) => setPrice([price[0], Number(e.target.value)])}
          min="0"
          max="30"
          style={{ width: "48%" }}
        />
      </div>
      {/* <p>Price: ${price[0]} — ${price[1]}</p> */}
      <p>Price:</p>
      <button style={{ padding: "10px", marginTop: "10px", width: "100%" }}>Filter</button>

      <div>
      <h4>Product Categories</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {categories.map((category, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                style={{ marginRight: '10px' }}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>

      <h4>Filter by Color</h4>
      <div>
        <input type="radio" checked={selectedColor === 'Green'} onChange={() => setSelectedColor('Green')} />
        Green
      </div>

      <h4>Filter by Brands</h4>
      <div>
        <input type="radio" checked={selectedBrand === 'Fresh'} onChange={() => setSelectedBrand('Fresh')} />
        Fresh
      </div>

      <h4>Product Status</h4>
      <div>
        <input type="checkbox" checked={inStock} onChange={() => setInStock(!inStock)} />
        In Stock
      </div>
    </div>

<div style={{ display:"flex", flexDirection:'column', maxWidth: "939px", padding:'0px', }}>

 <div >
        <img
          src={banner}
          alt="Logo"
          style={{ height: "auto", maxWidth: "939px" }}
        />
      </div>

      
      <div style={{ display: "flex", gap: "0px", flexWrap: "wrap", fontSize: "14px" }}>
        {data.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: "15px",
              width: "124px",
              textAlign: "",
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
                  height:'auto'
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
            ><Link to={`/products/${product.title}`}>
              Add to cart
              </Link>
            </button>
          </div>
        ))}
      </div>
</div>
            </div>
           
        </div>
    );
};

export default ProductCategory;

const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    fontSize:'15px',
    border: '1px solid #E5E7EB'
  };
  
  const navListStyle = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
    fontSize: '15px',
    fontWeight: '600'
  };
  
  const navItemStyle = {
    cursor: "pointer",
  };

  const saleStyle = {
    backgroundColor: "#f05a28",
    color: "white",
    padding: "2px 5px",
    borderRadius: "5px",
    marginLeft: "5px",
  };