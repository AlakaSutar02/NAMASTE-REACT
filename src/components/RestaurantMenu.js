import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_API_URL,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(RESTAURANT_API_URL + resId);
      const json = await response.json();

      console.log("Restaurant data fetched:", json);
      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);
      console.log("Restaurant data set:", restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];
      console.log("Menu items data fetched:", menuItemsData);
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
    }
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="m-2 p-1">
      <div className="shadow-lg p-4">
        <img
          className="w-35"
          src={CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div>
          <h2 className="text-lg underline font-bold">{restaurant?.name}</h2>
          <p className="">{restaurant?.cuisines?.join(", ")}</p>
          <div className="flex flex-wrap">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="mr-1">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="mr-1">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="shadow-lg p-4 mt-4 ">
        <div className="flex flex-wrap">
          <div className="w-full mb-4">
            <h3 className="text-xl font-medium">Recommended</h3>
            <p className="text-gray-500">{menuItems.length} ITEMS</p>
          </div>
          <div className="flex flex-wrap">
            {menuItems.map((item) => (
              <div
                className="shadow-lg p-2  m-3 flex flex-col justify-between w-100"
                key={item?.id}
              >
                <div className="">
                  <h3 className="font-bold text-md">{item?.name}</h3>
                  <p className="font-semibold text-sm lining-nums">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="w-fit text-sm italic">{item?.description}</p>
                </div>
                <div className="">
                  {item?.imageId && (
                    <img
                      className="w-70 "
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="bg-gray-300 hover:bg-gray-400 rounded-md p-2 float-end text-sm font-semibold">
                    {" "}
                    Add +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
