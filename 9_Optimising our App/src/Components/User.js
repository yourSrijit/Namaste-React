import { useEffect, useState } from "react";

const User=(props)=>{
    
useEffect(()=>{
    time1=setInterval(()=>{
     console.log('Namaste React function ');
    },1000)

    return()=>{
        clearInterval(time1);
        console.log('Componentwillunmount is invoked inside functional componnet');
    }
},[])
    return(
        <div className="user-card">
            <h1>Using Functional Component</h1>
            <h3>{props.contact}</h3>
            <p>Feel free to contact ub on Instagram for geniun review</p>
        </div>
    );
};
export default User;