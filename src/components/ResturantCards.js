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
    <div className="food-card w-80 p-5 rounded hover:shadow-2xl ">
      <div className="image">
        <img
          src={CDN_LINK + cloudinaryImageId}
          alt=""
          id="card-image"
          className="rounded h-40 w-80"
        />
      </div>
      <h1 className="res-name font-bold my-2 font-serif whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </h1>
      <h4 className="cuisines whitespace-nowrap overflow-hidden text-ellipsis font-serif">
        {cuisines.join(", ")}
      </h4>
      <div className="minute-details flex gap-2">
        <div className="star-rating flex gap-1.5">
          <i className="ri-star-fill text-green-600"></i>
          <h3 className="start">{avgRating}</h3>
        </div>
        <h3 className="time"> - {ResData.info.sla.lastMileTravelString}</h3>
      </div>
      <p className="address">{ResData.info.locality}</p>
    </div>
  );
};

export default ResturantCards;
