import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    
    return(
        <div >
        <h1>About Us</h1>
        <h2>Hi i am srijit</h2>
        <User contact={"Contact :Intagram @yourSrijit using (functional)"}/>
        <UserClass contact={"Contact :Intagram @yourSrijit using(class)"}/>
        </div>
    ); 
}
export default About;