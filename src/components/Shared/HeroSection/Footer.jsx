import React from "react";
import google from "../../../assets/google.png";
import apple from "../../../assets/apple.png";
import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";


const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: "#f5f5f5", padding: "40px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "30%" }}>
            <h3>Join our newsletter for £10 off</h3>
            <p>
              Register now to get the latest updates on promotions & coupons.
              Don’t worry, we won’t spam!
            </p>
          </div>
          <div>
            <form style={{ display: "flex", gap: "10px" }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  padding: "10px",
                  width: "70%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#6a2fda",
                  color: "#fff",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                SEND
              </button>
            </form>
            <p style={{ fontSize: "12px" }}>
              By subscribing you agree to our <a href="#">Terms & Conditions</a>{" "}
              and <a href="#">Privacy & Cookies Policy</a>.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "20%" }}>
            <h4>Do You Need Help?</h4>
            <p>Monday–Friday: 08am–9pm</p>
            <p>
              <strong>0 800 300-353</strong>
            </p>
            <p>info@example.com</p>
          </div>
          <div style={{ width: "20%" }}>
            <h4>Make Money with Us</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Sell on Grogin</li>
              <li>Advertise Your Products</li>
              <li>Become an Affiliate</li>
            </ul>
          </div>
          <div style={{ width: "20%" }}>
            <h4>Let Us Help You</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Accessibility Statement</li>
              <li>Your Orders</li>
              <li>Returns & Replacements</li>
            </ul>
          </div>
          <div style={{ width: "20%" }}>
            <h4>Get to Know Us</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Careers for Grogin</li>
              <li>Investor Relations</li>
              <li>Social Responsibility</li>
            </ul>
          </div>
          <div style={{ width: "20%" }}>
            <h4>Download our app</h4>

            <div>
              <img
                src={apple}
                alt="App Store"
                style={{ marginRight: "10px", height: "40px" }}
              />
              <img src={google} alt="Google Play" style={{ height: "40px" }} />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 0",
            borderTop: "1px solid #ccc",
            marginTop: "20px",
          }}
        >
          <div>
            <p>&copy; 2024 Grogin. All rights reserved.</p>
            <div style={{display:'flex'}} >
            <img
              src={visa}
              alt="Payment options"
              style={{ maxWidth: "20%" }}
            />
            <img
              src={mastercard}
              alt="Payment options"
              style={{ maxWidth: "20%" }}
            />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
