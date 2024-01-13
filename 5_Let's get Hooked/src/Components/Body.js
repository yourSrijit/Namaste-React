import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState  } from "react";
const Body=()=>{
    // Local State variaable 
    const [list,setList]=useState(resList);  //State variable
  
    //  const arr=useState(resList)   both are same
    // const [List,setList]=arr;


    // const list =[]  Normal JS variable
    return (
    <div  className="body">
    <div className="search">
        <input id="ipsearch" type="text" placeholder="Search food" style={{marginRight:"10px"}}></input>
        <button className="filter-btn" onClick={()=>{
             const filteredList=list.filter((res)=> res.data.avgRating>4);
             setList(filteredList);
        }}>Top rated Restaurant</button> 
        
    </div>

    <div className="res-container">
     {list.map((resturant,index)=>(
      <RestaurantCard key={/*resturant.data.id or we can use index*/ index} resData={resturant}/>
     ))}
    </div>
    </div>

    )
};
export default Body;