import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restData} = props;
    // console.log(restData);
    const {name, cuisines, avgRating,totalRatingsString, costForTwo} = restData?.info;
    // const {avgtime} = restData?.info?.sla;
    // console.log(restData.info);  //bcs getting error
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
            <img className="rounded-lg"
            alt="cards-image" 
            src={CDN_URL + restData.info.cloudinaryImageId} />
            <h3 className="font-bold py-4">{name}</h3>
            <span className="py-2 block">{cuisines.join(', ')}</span>
            <span className="py-2">Avarage Rating - {avgRating}</span>
            <span className="px-2">{totalRatingsString}</span>
            <span className="ced_card_span">{costForTwo}</span>
            <span className="ced_card_span">{restData.info.sla.slaString}</span>
        </div>
    )
}

// high order component
export const withOpenedLabel = (RestaurantCard) => {
 return(props) => {
    return (
        <div className="">
            <label className="p-2  bg-black text-white rounded-lg absolute">Opened</label>
            <RestaurantCard {...props}/>  
        </div>
    )
 }
} 
export default RestaurantCard;