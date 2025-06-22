import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, locality } =
    resData?.info;
  const deliveryTime = resData?.info?.sla?.deliveryTime + " minutes";
  const cuisines = resData?.info?.cuisines.join(", ");
  const imageUrl = CDN_URL + cloudinaryImageId;
  return (
    <div className="rounded shadow-lg m-4 p-4 w-80 h-100">
      <img className="w-40" src={imageUrl} alt="Restaurant Logo" />
      <h3 className="text-xl font-bold underline">{name}</h3>
      <h5>
        {avgRating} <span className="text-gray-700">{deliveryTime}</span>
      </h5>
      <h5 className="text-gray-400">{cuisines}</h5>
      <h5>{costForTwo}</h5>
      <h5>{locality}</h5>
    </div>
  );
};
export default RestaurantCard;
// This component displays a restaurant card with its details such as name, rating, delivery time, cuisines, cost for two, and locality.
// It uses the CDN_URL to fetch the restaurant's image and displays it along with the other details.
