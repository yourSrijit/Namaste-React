import { useContext } from "react";
import userContext from "../context/userContext";
import { toast } from 'react-toastify';

let Search=()=>{
    const {searchText,setSearchText,setFilteredRestaurant,listOfRestaurant}=useContext(userContext)
    let noResult=()=>{
        toast.error("No results found 😪",{
            position:"bottom-right"
            });
    }
    return(
        <div className="search-container">
            <input id="ipsearch" className="search-input" type="text" placeholder="Search a restaurant you want.." value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
        <button  className="search-btn" onClick={()=>{
        let searchRestaurant=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))

        if(searchRestaurant.length ===0){
            noResult();
        }
            setFilteredRestaurant(searchRestaurant);
        }}>Search</button>
        
        </div>
    )
}
export default Search;