import { useEffect, useState } from "react";
import {GIT_USER} from "../utils/constants"

const useRestaurantMenu=(resId)=>{
    const [resInfo,SetResInfo]=useState(null);
    
     //fetch data
     useEffect(()=>{
         fetchData();
     },[]);

     const fetchData=async ()=>{
        let data=await fetch(GIT_USER);
        let json= await data.json();
        SetResInfo(json);
    }
      return resInfo; //local variable
}
export default useRestaurantMenu;