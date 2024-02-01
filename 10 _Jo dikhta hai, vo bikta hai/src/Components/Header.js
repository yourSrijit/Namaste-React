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
      <div className="flex justify-between bg-gradient-to-r from-indigo-500">
        <div className="flex items-center  cursor-pointer">         
            <img className="inline-block mr-[10px] w-28" src={LOGO_URL}alt="logo"/>
            <h1 className="inline-block m-0 font-bold text-white text-lg leading-[1.2rem">
              Full Stack Biriyani
            </h1>
        </div>
  
        <div className="flex items-center px-4">
          <ul className="flex p-4 mx-4 items-center justify-evenly">
            <li className="mx-4 font-bold text-xl ">Online{isOnline ?"🟢" :"🔴"}</li>
            <li className="mx-4  text-xl flex justify-center w-full h-10 font-bold  item-center"><Link to="/">Home</Link></li>
            <li  className="mx-4  text-xl justify-center  w-full h-10 item-center"><Link to="/about" className=" font-bold">About</Link></li>
            <li  className="mx-4  text-xl justify-center w-full h-10 font-bold  item-center"><Link to="/contact">Contact</Link></li>
            <li  className="mx-4  text-xl justify-center w-full h-10 font-bold  item-center"><Link to="/cart">Cart</Link></li>
            <li className="mx-4  text-xl justify-center w-full h-10 font-bold  item-center"><Link to="/grocery">Grocery</Link></li>
            <li className="mx-4  text-xl justify-center w-full h-10 font-bold  item-center" ><button className="login" onClick={()=>{
             btnNameReact ==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
            }}>{btnNameReact}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header