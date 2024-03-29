import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import RestaurantCategoryShimmer from "./RestaurantCategoryShimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(-1);
  if (resInfo === null) {
    return  <RestaurantCategoryShimmer/>
  };

 
  const { name, cuisines, costForTwoMessage,cloudinaryImageId, city } =
    resInfo?.cards[2]?.card?.card?.info;

  console.log(resInfo?.cards[2]?.card?.card?.info);
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // Category - Filter all the Cards
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);


 return(
  <div className="container">
  <div className="hotel text-center flex justify-center gap-3 my-3 bg-black text-white py-3">
    <div className="image">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
      className="md:h-[150px] md:w-[200px] rounded-xl md:object-cover h-[100px] w-[150px] md:m0 m-3"/>
    </div>
   <div className="text-hotel my-auto">
   <h1 className="font-bold md:m-5 md:text-2xl font-serif text-md m-1">{name}</h1>
    <p className="font-medium text-sm md:text-md">
      {cuisines.join(", ")} - {costForTwoMessage}
    </p>
    <p className="font-serif">{city}</p>
   </div>
    </div>
    {/* Category Accordian */}
    {categories.map((category, index) => (
      <RestaurantCategory
        key={category.card.card.title}
        data={category?.card?.card}
        isOpen={index === showIndex}
        setShowIndex={() => setShowIndex(index)}
        currentIndex={index} // Passing the Current Index
      />
    ))}
</div>
);
};
export default RestaurantMenu;
