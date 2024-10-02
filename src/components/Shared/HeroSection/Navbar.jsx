import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar";
import logo from "../../../assets/Group 70.png";
import location from "../../../assets/Link.png";
import Link1 from "../../../assets/Link1.png";

const Navbar = () => {
  const [filterproduct, setFilterproduct] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      // setLoading(true);
      const response = await fetch("services.json");
      if (componentMounted) {
         setFilterproduct(await response.json());
        // setLoading(false);
        //console.log(filterproduct);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const handleSearchChange = event => {
    setSearchText(event.target.value);
    const match = filterproduct.filter(product => product?.title.toLowerCase().includes(searchText.toLowerCase()));
  console.log(match)
    setSearchResult(match);
}


  return (
    <div>
<div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: '20px', border: '1px solid #E5E7EB', padding:'15px' }}>
  {/* Logo */}
  <div>
    <img src={logo} alt="Logo" style={{ width: "154px", height: "38.63px" }} />
  </div>

  {/* Location */}
  <div style={{ display: "flex", alignItems: "center", gap: '5px' }}>
    <img src={location} alt="location" style={{ height: "26px" }} />
    <div style={{ textAlign: "center", fontSize: "11px" }}>
      Deliver to <br />
      <span style={{ fontWeight: "bold" }}>all</span>
    </div>
  </div>

  {/* Search Bar */}
  <div className="search-bar" style={{ position: 'relative', flex: '1', marginRight: "20px", }}>
    <input
      type="text"
      placeholder="Search for products, categories or brands..."
      style={{ padding: "10px", width: '100%', borderRadius: '5px', border: '1px solid #ececec' }}
    />
    <button
      type="button"
      onClick={handleSearchChange}
      style={{
        position: 'absolute',
        right: '-20px',
        top: '1px',
        bottom: '0',
        padding: '10px 20px',
        backgroundColor: '#fff',
        color: '#333',
        border: 'none',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer',
        height: '10px'
      }}
    >
      <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>

  {/* <div className="my-16 flex flex-wrap gap-4">
        {searchResult.map((course) => (
          <SingleProductCardDashboard
            key={course._id}
            course={course}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div> */}

  {/* Icons and Sign In */}
  <div style={{ display: "flex", alignItems: "center", gap: '15px' }}>
    <div>
      <img src={Link1} alt="link" style={{ height: "15px" }} />
    </div>

    <Link style={{ textDecoration: 'none' }} to={`/login`}>
  <div style={{ textAlign: 'center', fontSize: '11px' }}>
    <p style={{ margin: '0' }}>Sign In</p>
    <p style={{ margin: '0', fontWeight: 'bold' }}>Account</p>
  </div>
</Link>
  
    <i
      className="fa fa-heart"
      aria-hidden="true"
      style={{
        color: 'black',
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '50%',
        cursor: 'pointer'
      }}
    ></i>

    
    <i
      className="fa fa-shopping-cart"
      aria-hidden="true"
      style={{ color: 'black', backgroundColor: 'white', cursor: 'pointer' }}
    ></i>
  </div>
</div>

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
