import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const {resId} = useParams();
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
    if(resInfo === null) {
        return (
            <Shimmer/>
        );
    }
    console.log(resInfo?.data?.cards[0]?.card?.card?.info);

    const {id, name, avgRatingString, cloudinaryImageId, costForTwoMessage, cuisines, sla, totalRatingsString} =   resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>Average Rating - {avgRatingString} , Total Rating -{totalRatingsString} </p>
            <p>{cuisines.join(", ")} -- {costForTwoMessage}</p>
            <p>{sla.slaString}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(menuItems => <li key = {menuItems.card.info.id}>
                    {menuItems.card.info.name }
                     &nbsp; &nbsp; Price - {menuItems.card.info.price/100} Rs.
                     <div className="menu_discriptopn">{menuItems.card.info.description}</div>
                    </li>)}
                {/* <li>Biryani</li>
                <li>Burgers</li>
                <li>Cold Drinks</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;