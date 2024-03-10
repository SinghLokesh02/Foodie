import { CDN_LINK } from "../utils/constants";


// Resturant Card

const ResturantCards = ({ ResData }) => {
  if (!ResData?.info) {
    // Handle the case where ResData.info is undefined
    console.error("ResData or ResData.info is undefined");
    return null;
  }
  const { name, cloudinaryImageId, cuisines, avgRating } = ResData.info;

  return (
    <div className="food-card">
      <div className="image">
        <img src={CDN_LINK + cloudinaryImageId} alt="" id="card-image" />
      </div>
      <h1 className="res-name">{name}</h1>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <div className="minute-details">
        <div className="star-rating">
          <i className="ri-star-fill"></i>
          <h3 className="start">{avgRating}</h3>
        </div>
        <h3 className="time">. {ResData.info.sla.lastMileTravelString}</h3>
      </div>
      <p className="address">{ResData.info.locality}</p>
    </div>
  );
};

export default ResturantCards;
