import React, {  useEffect, useState } from 'react';
import userContext from './userContext';
import { swiggy_api_URL } from '../utils/constant';

const UserContextProvider = ({children}) => {
    let [listOfRestaurant,setListOfRestaurant] =useState([]);
    let [searchText,setSearchText]=useState([]);
    let [filteredRestaurant,setFilteredRestaurant]=useState([]);
    useEffect(()=>{
        fetchData();
       },[]);


    const fetchData=async ()=>{
        try{
            const data=await fetch(swiggy_api_URL);
            const json=await data.json();
            
            let checkJsonData=(json)=>{
                for(let i=0;i<json?.data?.cards.length;i++){
                    let checkData=json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                  if(checkData!== undefined){
                    return checkData;
                  }
                }
            }
            const resList=checkJsonData(json);// ⭐⭐ resList is data from api
            // console.log(resList); //data from the api
            setListOfRestaurant(resList ); 
            setFilteredRestaurant(resList);
        }
        catch(error){

        }
        
    }
    


    return (
        <userContext.Provider value={{ listOfRestaurant,setListOfRestaurant,searchText,setSearchText,filteredRestaurant,setFilteredRestaurant
            }}>
            {children}
        </userContext.Provider>
    );
}

export default UserContextProvider;
