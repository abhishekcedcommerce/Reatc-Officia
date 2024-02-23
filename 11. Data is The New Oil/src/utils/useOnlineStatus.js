import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // jst try to check if online then restun online status 
    const [onslineStatus, setonslineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setonslineStatus(false);
        });
        window.addEventListener("online", ()=>{
            setonslineStatus(true);
        });
    }, [])

    // boolean value
    return onslineStatus;
}
export default useOnlineStatus;