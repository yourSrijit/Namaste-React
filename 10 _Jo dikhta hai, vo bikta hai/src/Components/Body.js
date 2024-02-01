import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import onlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";


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
    const isOnline=onlineStatus();
    if(isOnline==false){
      console.log(isOnline);
       return(
        <h1>Looks like you are offline.Please check your internet</h1>
       )

    }

    let PromotedCard=withPromotedLabel(RestaurantCard);
    
    return resList.length==0 ? (<Shimmer/>) :(
    <div  className="body">
    <div className="filter flex items-center">
        <div className="search">
        <input id="ipsearch" type="text" className="search-box w-[400px] h-[30px] rounded-xl border border-solid border-black m-10" placeholder="Search Food" value={SearchText} style={{marginRight:"10px"}} onChange={(e)=>{
        setSearchText(e.target.value)
        }}></input>
        <button className=" w-24 h-10 text-white font-bold rounded-[18px] bg-cyan-500 hover:bg-cyan-600" 
        onClick={()=>{
            // console.log(SearchText);
            const filteredRestaurant=listOf.filter((res)=>res.data.name.toLowerCase().includes(SearchText.toLowerCase())
            );setFilterRestaurant(filteredRestaurant);
        }}>Search </button>
        </div>
        
        <button className="filter-btn bbtn w-[200px] h-10 m-5 text-white font-bold rounded-[18px] bg-green-500 hover:bg-cyan-600" onClick={()=>{
             const filteredList=listOf.filter((res)=> res.data.avgRating>4);
             setFilterRestaurant(filteredList);
        }}>Top rated Restaurant
        </button> 
    </div>

    <div className="res-container flex flex-wrap justify-center">
        {filterRestaurant.length > 0
          ? filterRestaurant.map((restaurant, index) => (
            <Link 
               key={restaurant.data.id}
               to={"/res/" + restaurant.data.id} >
               {restaurant.data.promoted ? <PromotedCard key={restaurant.data.id} resData={restaurant}/> 
               :<RestaurantCard
                key={restaurant.data.id}
                resData={restaurant}
              />
               }
               </Link>
            ))
          : listOf.map((restaurant, index) => (
            <Link 
               key={restaurant.data.id}
               to={"/res/" + restaurant.data.id} >
               {restaurant.data.promoted ? <PromotedCard key={restaurant.data.id}  resData={restaurant}/> 
               :<RestaurantCard
                key={restaurant.data.id}
                resData={restaurant}
              />
               }
               </Link>
            ))}
      </div>
    </div>
  );
};
export default Body;