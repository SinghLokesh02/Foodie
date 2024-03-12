import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const Items_data = await fetch(MENU_API + resId);
    const Raw_data = await Items_data.json();
    setResInfo(Raw_data.data);
  };

  if (resInfo === null) {
    return (
      <div className="h1">
        <h1>Not Data is Yet !!!</h1>
      </div>
    );
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  console.log(name);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="container">
      <div className="hotel">
        <h1>{name}</h1>
        <h1>{cuisines}</h1>
        <h1>{costForTwoMessage}</h1>
      </div>
      <div className="dishesh">
        <ul>
          {itemCards.map((card) => (
            <li key={card.card.info.id}>
              {card.card.info.name}{" "}
              <b>Price - Rs {card.card.info.price / 100}/- </b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
