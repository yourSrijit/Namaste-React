
import { FaStar } from "react-icons/fa";
import { IMG_CDN_URL } from "../utils/constant";



let RestaurantCard=(props)=>{
    let { resData }=props;
    let {cloudinaryImageId,name,cuisines,areaName,sla,costForTwo,avgRatingString}=resData?.info;
return(
    <div className="res-card">
    <img className="res-image" src={IMG_CDN_URL+cloudinaryImageId}/>

    <h3 className="title">{name}</h3>
    <h5 className="description">{cuisines.join(",")}</h5>
    <h5 className="location">{areaName}</h5>
    <span className="review">
        <h4 className="rating"> <FaStar/> {avgRatingString}</h4> 
        {/* need to change later ⭐⭐⭐ */}
        <h3>.</h3>
        <h4 className="txt">{sla.lastMileTravelString}</h4>
        <h3>.</h3>
        <h4 className="txt">{costForTwo}</h4>
    </span>
    </div>
)
}

export default RestaurantCard;