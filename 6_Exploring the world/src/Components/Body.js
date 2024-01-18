import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
    // Local State variaable 
    const [listOf,setListOf]=useState(resList);  //State variable
    const[filterRestaurant,setFilterRestaurant]=useState([]);
    //  const arr=useState(resList)   both are same
    // const [List,setList]=arr;
   const [SearchText,setSearchText] =useState("");


    // useEffect(()=>{
    //     fetchData();
    // },[]);  //callback ,dependency array

    
    const fetchData=async ()=>{
        const data=await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        console.log(json);
        setListOf(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    // Conditional rendering
    if(resList.length==0){
        return <Shimmer/>;
    }

    return resList.length==0 ? (<Shimmer/>) :(
    <div  className="body">
    <div className="filter">
        <div className="search">
        <input id="ipsearch" type="text" className="search-box" placeholder="Search Food" value={SearchText} style={{marginRight:"10px"}} onChange={(e)=>{
        setSearchText(e.target.value)
        }}></input>
        <button className="bbtn" onClick={()=>{
            console.log(SearchText);
            const filteredRestaurant=listOf.filter((res)=>res.data.name.toLowerCase().includes(SearchText.toLowerCase())
            );
            setFilterRestaurant(filteredRestaurant);
        }}>Search</button>
        </div>
        
        <button className="filter-btn bbtn" onClick={()=>{
             const filteredList=listOf.filter((res)=> res.data.avgRating>4);
             setFilterRestaurant(filteredList);
        }}>Top rated Restaurant
        </button> 
    </div>

    <div className="res-container">
        {filterRestaurant.length > 0
          ? filterRestaurant.map((restaurant, index) => (
              <RestaurantCard
                key={/*restaurant.data.id or we can use index*/ index}
                resData={restaurant}
              />
            ))
          : listOf.map((restaurant, index) => (
              <RestaurantCard
                key={/*restaurant.data.id or we can use index*/ index}
                resData={restaurant}
              />
            ))}
      </div>
    </div>
  );
};
export default Body;