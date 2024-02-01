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
        <div className="user-card w-[600px] border-black rounded-lg bg-[#f0f0f0] flex flex-col justify-center items-center leading-[1.2rem] mb-[10px]">
            <h1 className="font-bold">Using Functional Component</h1>
            <h3>{props.contact}</h3>
            <p>Feel free to contact ub on Instagram for geniun review</p>
        </div>
    );
};
export default User;