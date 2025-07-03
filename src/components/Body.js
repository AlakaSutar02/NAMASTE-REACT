import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { use, useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
    // This is where you can fetch data from an API
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <h2>
        Looks like you are offline. Please check your internet connection!!
      </h2>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex space-between m-2 p-1">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="p-1.5 m-1.5 border border-gray-300 rounded-2xl"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 m-1 hover:bg-blue-700 text-white  py-2 px-4 rounded-full cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText)
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn m-1 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating == 4.5
            );
            setListOfRestaurants(filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Filter top rated restaurant
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center">
        <label>UserName : </label>
        <input
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
