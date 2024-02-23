import RestaurantCard , {withOpenedLabel} from "./RestaurantCard";
// import RestDataList from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  // local state variable - Super Powerful variable
  // react re-render the component, once we clickicng something in search box its re-rendering the whole body component -- reconcilation cycle 
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filteredRestraunts, setfilteredRestraunts] = useState([]);

  const RestuarantCradOpened = withOpenedLabel(RestaurantCard);

  const [searchText, setsearchText] = useState("");

  const {loggedInUser, setUserName} = useContext(UserContext);
  console.log(loggedInUser, setUserName);
  // useEffect -- after render the component
  // console.log(listOfRestaurants);
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);
  // console.log("Body Renderd"); // 1st it will execut then the useeffect will call

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
      <div className="flex">
        <div className="search">
          
          
          <input className="border border-solid border-black" type="text" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value);
          }} />

          <button className="px-4 py-1 bg-green-100 m-4" onClick={()=> {
              // console.log(searchText);
              // want to write the filter logic 
            const filterdListOfRestro =   listOfRestaurants.filter(
              (restro)=> restro.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredRestraunts(filterdListOfRestro);
            }}>
            Search Button
          </button>


        </div>
        <div className="flex items-center">
        <button
          className="px-4 py-1 bg-gray-200"
          onClick={() => {
            // console.log("button clicked");
            // filter logic here
            const FilteredRestDataList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilteredRestraunts(FilteredRestDataList);
            // console.log(res.info.avgRating);
            // console.log(FilteredRestDataList);
          }}
          onMouseOver={() => {
            console.log("hovered");
          }}
        >
          Top Rated Restaurants
        </button>
        </div>

        <div className="">
          <label className="px-2 py-1 m-4">User Name</label>
          <input className="px-2 py-1 bg-green-100 m-4 border border-black" 
          type="text" 
          value = {loggedInUser}
          onChange={(e)=> setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestraunts.map((restaurant) => (
          
          <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}>
            {restaurant.info.isOpen ? (<RestuarantCradOpened restData={restaurant}/>) : (<RestaurantCard key={restaurant.info.id} restData={restaurant}/> )}
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
