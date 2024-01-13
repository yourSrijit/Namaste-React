import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>  
          </ul>
        </div>
      </div>
    );
  };
  export default Header