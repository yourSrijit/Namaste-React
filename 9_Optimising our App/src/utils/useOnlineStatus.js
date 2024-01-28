import { useEffect,useState } from "react";

const useOnlineStatus=()=>{
   let [onlineStatus,setOnlineStatus] =useState(true);
   useEffect(()=>{
         window.addEventListener("offline",()=>{
            setOnlineStatus(false);
         })

         window.addEventListener("online",()=>{
            setOnlineStatus(true);
         })
   },[])
              ///Boolean
    return onlineStatus;
}

export default useOnlineStatus;