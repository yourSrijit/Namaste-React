import { useState,useEffect } from "react";
import resList from "../utils/mockData";


const RestaurantMenu=()=>{
    const[resInfo,SetResInfo] =useState(resList);

    //  When we use online api 
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    
    // const fetchMenu= async()=>{
    //     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
    //     const json=await data.json();
    //     console.log(json);
    //     SetResInfo(json.data);

    // }

       return (
        <div className="menu">
        {resInfo.map((restaurant, index) => (
          <h1 key={index}>{restaurant?.data?.name}</h1>
        ))}
      </div>
    );
};
export default RestaurantMenu;