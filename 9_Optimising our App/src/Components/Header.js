import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {

  let isOnline=useOnlineStatus();
  // let btnName="Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

// if no depemdency array =>useEffect is called on every render
// if empty depemdency array =>useEffect is called only once on initial render
// if notempty depemdency array like [btnReact] =>useEffect is called every time when the btnReact changes


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
            <li>Online status :{isOnline ?"🟢" :"🔴"}</li>
            <li className="nav"><Link to="/">Home</Link></li>
            <li  className="nav"><Link to="/about">About</Link></li>
            <li  className="nav"><Link to="/contact">Contact Us</Link></li>
            <li  className="nav"><Link to="/cart">Cart</Link></li>
            <li className="nav"><Link to="/grocery">Grocery</Link></li>
            <li ><button className="login" onClick={()=>{
             btnNameReact ==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
            }}>{btnNameReact}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header