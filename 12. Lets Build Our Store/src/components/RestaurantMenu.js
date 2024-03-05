import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantsMenu(resId);
    // console.log(resInfo);
    const [showIndex, setshowIndex] = useState(0);
    if(resInfo === null) {
        return (
            <Shimmer/>
        );
    }
    const categories = ('cards',resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) => 
            category.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

    // console.log(categories);

    const {id, name, avgRatingString, cloudinaryImageId, costForTwoMessage, cuisines, sla, totalRatingsString} =   resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(',')}</p>
            {/* build accordin  */}
            {categories.map((category, index) =>(
                // it's a aontrolled component
                <RestaurentCategory 
                key = {category?.card.card.title}
                data={category?.card?.card}
                showItems = {index == showIndex && true}
                setshowIndex={()=>setshowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;