import RestaurantCard from "./RestaurantCard";
// import RestDataList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // local state variable - Super Powerful variable
  // react re-render the component, once we clickicng something in search box its re-rendering the whole body component -- reconcilation cycle 
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filteredRestraunts, setfilteredRestraunts] = useState([]);

  const [searchText, setsearchText] = useState("");
  // useEffect -- after render the component
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);
  console.log("Body Renderd"); // 1st it will execut then the useeffect will call

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants   its not a good way -- so we will go with optional chainig
    // setlistOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    // optional chaining
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const OnlineStatus = useOnlineStatus();
  if(OnlineStatus === false) {
    return <h1>Looks like you are offline, please check your internet Connection</h1>
  }

  // by using ternary operator
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          
          
          <input type="text" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value);
          }} />

          <button onClick={()=> {
              console.log(searchText);
              // want to write the filter logic 
            const filterdListOfRestro =   listOfRestaurants.filter(
              (restro)=> restro.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredRestraunts(filterdListOfRestro);
            }}>
            Search Button
          </button>


        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            // filter logic here
            const FilteredRestDataList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilteredRestraunts(FilteredRestDataList);
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
        {filteredRestraunts.map((restaurant) => (
          <Link to={"restaurants/"+restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
