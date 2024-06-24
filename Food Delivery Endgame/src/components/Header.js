import { FaShoppingCart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { LOGO_URL } from "../utils/constant";
import { useContext, useEffect } from "react";
import userContext from "../context/userContext";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

// //Selector (Subscribing the sore use selector)




const Header=()=>{
    // let cartItemsLengthFromLS=JSON.parse(localStorage.getItem("cart"))?.length;
  
    let {listOfRestaurant,setFilteredRestaurant}=useContext(userContext);
    let showFilteredRestaurant=()=>{
        let topRestaurant=listOfRestaurant.filter((e)=>e.info.avgRatingString>4.5);
        setFilteredRestaurant(topRestaurant);
    }

    const { loginWithRedirect,logout,user, isAuthenticated, isLoading  } = useAuth0();

    const status=()=>{
        toast.success(`${user.name} can I order a Biriyani for you 😋? `, {
            position:"bottom-right"
            });
    }

    useEffect(() => {
        if (isAuthenticated) {
           status();
        }
    }, [isLoading, isAuthenticated, user])

    //OnliNE Status
    const onlineStatus=UseOnlineStatus();


    const cartItems=useSelector((store)=> store.cart.items);

    // console.log(cartItems); 

    return(
        <div className="header">
        <div className="logo-container">
        <NavLink to="/" onClick={()=>{
            setFilteredRestaurant(listOfRestaurant);
        }}><img className="logo" src={LOGO_URL}/></NavLink>
            
        </div>
        <div className="nav-items">
            <ul>
                <button className="top-btn" onClick={showFilteredRestaurant}>Top Rated</button>
                <li><NavLink to="/" className="navlinks" onClick={()=>{
                    setFilteredRestaurant(listOfRestaurant);
                }} >Home </NavLink></li>
                <li><NavLink to="/about" className="navlinks">About </NavLink></li>
                <li><NavLink to="/contact" className="navlinks">Contact </NavLink></li>
                <li><NavLink to="/cart" className="navlinks cart"> <FaShoppingCart/> <div className="cartNotification">{cartItems.length}</div></NavLink></li>


                {/* If you are online show green dot  */}
               { !isLoading && onlineStatus &&
                <p>
                    {
                    isAuthenticated  ?
                   <li className="button-2" role="button" onClick={()=>{
                   logout({ logoutParams: { returnTo: window.location.origin } })
               }}>Logout < GoDotFill style={{ color: 'rgb(0,173,29)'}}/>
               </li> :
               <li className="button-2" role="button" onClick={()=>{
                    loginWithRedirect() 
                }}>Login < GoDotFill style={{ color: 'rgb(0,173,29)' }}/></li>
                    }
                </p>
                }

                {/* If you are offline show green dot  */}
                { !isLoading && !onlineStatus &&
                <p>
                    {
                    isAuthenticated  ?
                   <li className="button-2" role="button" onClick={()=>{
                   logout({ logoutParams: { returnTo: window.location.origin } })
               }}>Logout < GoDotFill style={{ color: 'red'}}/>
               </li> :
               <li className="button-2" role="button" onClick={()=>{
                    loginWithRedirect() 
                }}>Login < GoDotFill style={{ color: 'red' }}/></li>
                    }
                </p>}
                
            </ul>
        </div>
       
        </div>
    )
    }

    export default Header;