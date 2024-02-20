import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantsMenu(resId);
    if(resInfo === null) {
        return (
            <Shimmer/>
        );
    }
    console.log(resInfo?.data?.cards[0]?.card?.card?.info);

    const {id, name, avgRatingString, cloudinaryImageId, costForTwoMessage, cuisines, sla, totalRatingsString} =   resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
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
            </ul>
        </div>
    )
}

export default RestaurantMenu;