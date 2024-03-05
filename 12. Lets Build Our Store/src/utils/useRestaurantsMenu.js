import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestaurantsMenu = (resId) =>{
    // we will fetch the data 
    const [resInfo, setResInfo] = useState(null);
    // two arguments- 1. callback function , 2. array dependency 
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async() => {
        const data = await fetch(
            MENU_API_URL + resId);
            const json = await data.json();
            setResInfo(json);
    }
    return resInfo;
}

export default useRestaurantsMenu;