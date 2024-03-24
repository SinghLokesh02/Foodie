import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(-1);
  if (resInfo === null) {
    return (
      <div className="h1">
        <h1>Not Data is Yet !!!</h1>
      </div>
    );
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // console.log(name);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // Category - Filter all the Cards
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="container">
      <div className="hotel text-center">
        <h1 className="font-bold m-5 text-2xl font-serif">{name}</h1>
        <p className="font-medium">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/* Category Accordian */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            isOpen={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
