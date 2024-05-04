import RestaurantCard from "./RestaurantCard";

import { useContext } from "react";
import userContext from "../context/userContext";
import Simmer from "./Simmer";
import Search from "./Search";
import {Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";




export let Body=()=>{
  const onlineStatus=UseOnlineStatus();

if(onlineStatus ===false){
  return <Offline/>
}
  const {listOfRestaurant,filteredRestaurant} =useContext(userContext);
  //Simmer UI
  if(listOfRestaurant.length===0){
   return <Simmer/>
  }
    return(
        <div className="body">
        <div className="search"> <Search/> </div>
        <div className="res-container">
        {
          filteredRestaurant.map((restaurant) =>(
            <Link 
            className="cardLink" 
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info.id} 
             >
            <RestaurantCard  resData={restaurant}/>
            </Link>
          ))
        }
        </div>
        </div>
    )
}
