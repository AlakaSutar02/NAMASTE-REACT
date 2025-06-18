import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData}=  props;
  const {cloudinaryImageId, name, avgRating, costForTwo, locality} = resData?.info;
  const deliveryTime = resData?.info?.sla?.deliveryTime + " minutes";
  const cuisines = resData?.info?.cuisines.join(", ");
  const imageUrl = CDN_URL + cloudinaryImageId;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={imageUrl}
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <h5>{avgRating} <span>{deliveryTime}</span></h5>
      <h5 className="cuisines">{cuisines}</h5>
      <h5>{costForTwo}</h5>
      <h5>{locality}</h5>
    </div>
  );
};
export default RestaurantCard;