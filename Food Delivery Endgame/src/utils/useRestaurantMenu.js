import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constant";


const UseRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null); 

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo() {
        try {
          const response = await fetch(swiggy_menu_api_URL + resId);
          const json = await response.json();
    
          // Set restaurant data
          const restaurantData = json?.data?.cards?.map(x => x.card)?.
                                 find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
          setRestaurant(restaurantData);
    
          // Set menu item data
          const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                                groupedCard?.cardGroupMap?.REGULAR?.
                                cards?.map(x => x.card?.card)?.
                                filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                                map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
          
          const uniqueMenuItems = [];
          menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find(x => x.id === item.id)) {
              uniqueMenuItems.push(item);
            }
          })
          setMenuItems(uniqueMenuItems);
        } catch (error) {
          setMenuItems([]);
          setRestaurant(null);
          console.log(error);
        }
      }

   return restaurant;
}

export default UseRestaurantMenu;
