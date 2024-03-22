import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true);

    // Check if Online

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])
    

    // Boolean Value
    return onlineStatus;
}

export default useOnlineStatus;
