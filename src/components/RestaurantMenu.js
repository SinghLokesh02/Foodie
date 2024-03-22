import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);


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
