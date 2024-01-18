import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header = () => {
  // let btnName="Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
      return (
      <div className="Header">
        <div className="logo-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="logo"
              src={LOGO_URL}
              style={{ display: "inline-block", marginRight: "10px" }}
              alt="logo"
            />
            <h1 style={{ display: "inline-block", margin: 0 }}>
              Full Stack Biriyani
            </h1>
          </div>
        </div>
  
        <div className="nav-item">
          <ul>
            <li className="nav">Home</li>
            <li  className="nav">About Us</li>
            <li  className="nav">Contact Us</li>
            <li  className="nav">Cart</li>
            <li ><button className="login" onClick={()=>{
             btnNameReact ==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
            }}>{btnNameReact}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header