import RestaurantCard from "./RestaurantCard";
import RestDataList from "../utils/mockdata";
const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {

                    RestDataList.map((restaurant) => <RestaurantCard key={restaurant.info.id} restData = {restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;