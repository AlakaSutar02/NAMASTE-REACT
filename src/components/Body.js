import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  console.log(listOfRestaurants)
  return (
    <div className="body">
      <div className="filter-container">
        <button className="filter-btn" onClick={()=>{
          const filteredList= resList.filter((res)=> res.info.avgRating == 4.5);
          console.log("Filtered list", filteredList);
          setListOfRestaurants(filteredList);
        }}>Filter top rated restaurant</button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;