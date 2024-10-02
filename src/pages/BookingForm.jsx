import React, { useState } from "react";

const BookingForm = () => {
  const [shipping, setShipping] = useState("Flat rate: $15.00");
  const [payment, setPayment] = useState("Direct Bank Transfer");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const form = e.target;
    //const id = form.id.value;
    const name = 'Mr. X';
    
    const price = 15.89;
    

    const data = { name, price };
    //console.log(data)
    if (!window.confirm("Are you sure you want to place order?")) {
      return;
    }
    await fetch(`https://dotpot-server-ten.vercel.app/order`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
         window.location.replace(data.url);
      
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        
      });
  };

  return (
    <div >
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

       {/* Cupon */}
    <div style={cuponcontainerStyle}>
      {!showInput ? (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setShowInput(true)}>
          <span style={cuponiconStyle}>🏷️</span>
          <p style={{ margin: 0 }}>Have a coupon? Click here to enter your code</p>
        </div>
      ) : (
        <input type="text" placeholder="Enter your coupon code" style={cuponinputStyle} />
      )}
    </div>

          {/* flex 4 */}
          {/* orange */}
           <form style={{  margin: "0px 0px" }} onSubmit={handleSubmit}> 
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "4", maxWidth: "700px",  }}>
        <div style={containerStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={iconStyle}>📦</span>
        <p style={{ margin: 0, fontSize:'13px' }}>
          Add <span style={{ color: "red", fontWeight: "bold" }}>$299.11</span> to cart and get free shipping!
        </p>
      </div>
      <div style={progressBarContainer}>
        
      </div>
    </div>

           {/* Billing details */}
          
            <h3>Billing details</h3>
            <div style={{ display: "flex", gap: "35px", maxWidth: "", }}>
              <div style={{ flex: "1" }}>
                <label>First name *</label>
                <input
                  type="text"
                  placeholder="First name"
                  style={inputStyle}
                  name="name"
                />
              </div>
              <div style={{ flex: "" }}>
                <label>Last name *</label>
                <input
                  type="text"
                  placeholder="Last name"
                  
                  style={inputStyle}
                />
              </div>
            </div>

            <label>Company name (optional)</label>
            <input type="text" placeholder="Company name" style={inputStyle} />

            <label>Country / Region *</label>
            <select  style={inputStyle}>
              <option value="US">United States (US)</option>
              
            </select>
            <label>Street address *</label>
            <input
              type="text"
              placeholder="House number and street name"
              
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc. (optional)"
              style={inputStyle}
            />

            <label>Town / City *</label>
            <input type="text"  style={inputStyle} />

            <label>State *</label>
            <select  style={inputStyle}>
              <option value="California">California</option>
              
            </select>

            <label>ZIP Code *</label>
            <input type="text"  style={inputStyle} />

            <label>Phone *</label>
            <input type="tel"  style={inputStyle} />

            <label>Email address *</label>
            <input type="email"  style={inputStyle} />

            <div>
              <label>
                <input type="checkbox" />
                Create an account?
              </label>
            </div>

            <div>
              <label>
                <input type="checkbox" />
                Ship to a different address?
              </label>
            </div>

            <label>Order notes (optional)</label>
            <textarea
              placeholder="Notes about your order, e.g., special notes for delivery."
              style={inputStyle}
            ></textarea>
         
        </div>
        
        {/* Your Order */}
        <div
          style={{
            maxWidth: "300px",
            margin: "0 0",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            // flex: "1",
          }}
        >
          <h3>Your order</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              fontSize: "12px",
              color: "#888",
            }}
          >
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <hr />
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Marketside Fresh Organic Bananas, Bunch ×1</span>
              <span>$0.89</span>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12px", color: "#888" }}>Subtotal</span>
              <span>$0.89</span>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4 style={{ fontSize: "12px", color: "#888" }}>Shipping</h4>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Flat rate: $15.00"
                    checked={shipping === "Flat rate: $15.00"}
                    onChange={(e) => setShipping(e.target.value)}
                  />
                  Flat rate: $15.00
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value="Local pickup"
                    checked={shipping === "Local pickup"}
                    onChange={(e) => setShipping(e.target.value)}
                  />
                  Local pickup
                </label>
              </div>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12px", color: "#888" }}>Total</span>
              <span>$15.89</span>
            </div>
          </div>
          <hr />
          <div style={{ marginBottom: "20px" }}>
            <label>
              <input
                type="radio"
                value="Direct Bank Transfer"
                checked={payment === "Direct Bank Transfer"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Direct Bank Transfer
            </label>
            <p style={{ fontSize: "12px", color: "#888" }}>
              Make your payment directly into our bank account. Your order will
              not be shipped until the funds have cleared.
            </p>
            <label>
              <input
                type="radio"
                value="Check Payments"
                checked={payment === "Check Payments"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Check Payments
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Cash On Delivery"
                checked={payment === "Cash On Delivery"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Cash On Delivery
            </label>
          </div>
          <p style={{ fontSize: "12px", color: "#888" }}>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <div style={{ marginBottom: "20px" }}>
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              I have read and agree to the website{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>

          <button style={buttonStyle} type="submit" >
            Place order
          </button>
        </div>
       
      </div>
      </form>
    </div>
  );
};

export default BookingForm;

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#6a2fda",
  color: "#fff",
  padding: "12px 20px",
  border: "none",
  borderRadius: "5px",
  width: "100%",
  cursor: "pointer",
  fontWeight: "bold",
};

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

  const containerStyle = {
    padding: "15px",
    backgroundColor: "#fdf1f0",
    border: "1px solid red",
    borderRadius: "5px",
    fontFamily: "Arial, sans-serif",
    margin:'15px 15px 15px 0px'
  };
  
  const iconStyle = {
    fontSize: "20px",
    marginRight: "10px",
  };
  
  const progressBarContainer = {
    marginTop: "10px",
    height: "5px",
    width: "100%",
    backgroundColor: "#f1e0de",
    borderRadius: "10px",
  };
  
  const progressBar = {
    width: "60%",
    height: "100%",
    backgroundColor: "#f05a28",
    borderRadius: "10px",
  };

  const cuponcontainerStyle = {
    padding: '10px',
    backgroundColor: '#f8f8f8',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    width: '98%',
    margin:'20px 0px'
  };
  
  const cuponiconStyle = {
    color: 'red',
    marginRight: '10px',
  };
  
  const cuponinputStyle = {
    width: '95%',
    padding: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
  };
  