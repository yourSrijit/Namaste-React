import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
      const{cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo}=resData.data;
      return(
      <div className="res-container m-4 w-[240px] bg-gray-50 rounded-lg ">
          <div className="res-card ">
          <img  className="card-img rounded-lg" src={CDN_URL+
            cloudinaryImageId}></img>
           <h3 className="font-bold">{name}</h3>
           <h4>{cuisines.join(' ')}</h4>
           <h4>{avgRating} ⭐ {deliveryTime} minutes</h4>
           <h4>₹{costForTwo/100} For two</h4>
          </div>
      </div>
      )
  };

  //  Higher -order functon 
  // imnput RestaurantCard =>RestauranrCardPromoted
  export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{

        return(
          <div>
            <labe className="absolute p-2 mx-2 font-bold bg-black rounded-lg text-white">Promoted</labe>
            <RestaurantCard {...props}/>
          </div>
        )
    }
  }
  export default RestaurantCard;