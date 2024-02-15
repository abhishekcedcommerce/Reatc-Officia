import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restData} = props;
    const {name, cuisines, avgRating,totalRatingsString, costForTwo} = restData?.info;
    // const {avgtime} = restData?.info?.sla;
    // console.log(restData.info);  //bcs getting error
    return(
        <div className="res-card">
            <img className="res-logo"
            alt="cards-image" 
            src={CDN_URL + restData.info.cloudinaryImageId} />
            <h4>{name}</h4>
            <span className="ced_card_span">{cuisines.join(', ')}</span>
            <span className="ced_card_span">{avgRating}</span>
            <span className="ced_card_span">{totalRatingsString}</span>
            <span className="ced_card_span">{costForTwo}</span>
            <span className="ced_card_span">{restData.info.sla.slaString}</span>
        </div>
    )
}

export default RestaurantCard;