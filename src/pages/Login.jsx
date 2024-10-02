
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const [role, setRole] = useState("customer");
    const [passMatch, setPassMatch] = useState(true);
  const [isRegister, setIsRegister] = useState(true);
  // const { createUser, signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirm_password = form.confirm_password.value;

    // if (password !== confirm_password) {
    //   setPassMatch(false);
    // }

    console.log(email, password);

    createUser(email, password).then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: name,
        };
        fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        // .then((data) => localStorage.setItem("token", data?.token));
      }
    });
    if (user) {
      navigate(from);
    }
  };

  const handleToggleForm = () => {
    setIsRegister(!isRegister); // Toggle between register and login
  };

    return (
      <div style={{ maxWidth: "400px", margin: "60px auto", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <h3 
          style={{ marginRight: "10px", color: isRegister ? "#ccc" : "#333", fontWeight: !isRegister ? "bold" : "normal", cursor: "pointer" }} 
          onClick={handleToggleForm}
        >
          Login
        </h3>
        <h3 
          style={{ color: isRegister ? "#333" : "#ccc", fontWeight: isRegister ? "bold" : "normal", cursor: "pointer" }} 
          onClick={handleToggleForm}
        >
          Register
        </h3>
      </div>

      {isRegister ? (
        <div>
          <p>There are many advantages to creating an account: the payment process is faster, shipment tracking is possible, and much more.</p>
          <form>
            <input type="text" placeholder="Username *" style={inputStyle} />
            <input type="email" placeholder="Email address *" style={inputStyle} />
            <input type="password" placeholder="Password *" style={inputStyle} />

            <div style={{ textAlign: "left", marginTop: "10px" }}>
              <label>
                <input
                  type="radio"
                  value="customer"
                  checked={role === "customer"}
                  onChange={() => setRole("customer")}
                  style={{ marginRight: "5px" }}
                />
                I am a customer
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="vendor"
                  checked={role === "vendor"}
                  onChange={() => setRole("vendor")}
                  style={{ marginRight: "5px" }}
                />
                I am a vendor
              </label>
            </div>

            <p style={{ fontSize: "12px", marginTop: "20px" }}>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" style={{ color: "#6a2fda" }}>privacy policy</a>.
            </p>

            <button type="submit" style={buttonStyle}>Register</button>
          </form>
        </div>
      ) : (
        <div>
          <p>If you have an account, sign in with your username or email address.</p>
          <form>
            <input
              type="text"
              placeholder="Username or email address *"
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password *"
              style={inputStyle}
            />
            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <label>
                <input type="checkbox" style={{ marginRight: "5px" }} />
                Remember me
              </label>
              <a href="#" style={{ float: "right", color: "#6a2fda" }}>Lost your password?</a>
            </div>
            <button type="submit" style={buttonStyle}>Log in</button>
          </form>
        </div>
      )}
    </div>
    );
};

export default Login;

const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
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
  