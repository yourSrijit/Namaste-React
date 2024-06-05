// import React, { useEffect, useState } from 'react';

// const UseOnlineStatus = () => {
//     const [onlineStatus,setOnlineStatus]=useState(true);
//     useEffect(()=>{
//         window.addEventListener("offline",()=>{
//             setOnlineStatus(false); 
//         })
//         window.addEventListener("online",()=>{
//             setOnlineStatus(true); 
//         })
//     },[])
   
//     return onlineStatus; //Boolean value
// }

// export default UseOnlineStatus;

import React, { useEffect, useState } from 'react';

const UseOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setOnlineStatus(true);
        };

        const handleOffline = () => {
            setOnlineStatus(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return onlineStatus; // Boolean value
}

export default UseOnlineStatus;
