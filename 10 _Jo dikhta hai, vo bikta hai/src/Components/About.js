import User from "./User";
import UserClass from "./UserClass";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const About=()=>{
    const resInfo =useRestaurantMenu();
    console.log(resInfo);
    return(
        <div >
        <h1>About Us</h1>
        <h2>Hi i am srijit bera</h2>
        {resInfo ? (
                <h3>{resInfo.quote.body}</h3>
            ) : ( 
                <p>Fetching...</p>
            )}

        <User contact={"Contact :Intagram @yourSrijit using (functional)"}/>
        <UserClass contact={"Contact :Intagram @yourSrijit using(class)"}/>
        </div>
    ); 
}
export default About;