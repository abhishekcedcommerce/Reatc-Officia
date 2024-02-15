import RestaurantCard from "./RestaurantCard";
import RestDataList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  // state variable - Super Powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(RestDataList);
  //  hooks os just a JS normal function
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            // filter logic here
            const FilteredRestDataList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setlistOfRestaurants(FilteredRestDataList);
            // console.log(res.info.avgRating);
            console.log(FilteredRestDataList);
          }}
          onMouseOver={() => {
            console.log("hovered");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
