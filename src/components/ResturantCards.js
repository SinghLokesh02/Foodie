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
    <div className="food-card w-80 p-5 rounded hover:shadow-2xl">
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

// Higher Order Component -> Take Input a component and Return a Component
// Input -> RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">Promoted</label>
        <ResturantCards {...props} />
      </div>
    );
  };
};

export const withFlatTag = (ResturantCards) => {
  return (props) => {
    // console.log(props.ResData.info.aggregatedDiscountInfoV3);
    const { header, subHeader } = props.ResData.info.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <ResturantCards {...props} />
        <div className="label flex justify-center font-medium text-white mb-3">
          <label
            htmlFor=""
            className="absolute top-40 text-center  bg-slate-500 w-4/5 rounded "
          >
            {header + "  " + subHeader}
          </label>
        </div>
      </div>
    );
  };
};
export default ResturantCards;
