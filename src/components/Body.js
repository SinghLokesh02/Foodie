import ResturantCards from "./ResturantCards";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// Create a function of search on click or Enter

// Body Component
const Body = () => {
  // State Variable -> Super Powerful Variable
  const [List_of_resturant, setList_of_resturant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const FilterRestaurants = () => {
    FilteredRes = List_of_resturant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setList_of_resturant(FilteredRes);
  };

  // UseEffect Hooks
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const cardData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setList_of_resturant(cardData);
  };

  // Checking Online Status
  if (!useOnlineStatus())
    return (
      <div className="center">
        <h1>You are Offline Bro !!! 😐😐😐</h1>
      </div>
    );
  else
    return (
      <div className="body">
        <div className="filter-btn flex gap-8 p-10 pb-0">
          <div className="search-container flex gap-10 ">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search Here"
              className="border-2 px-5 py-1 w-56"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
                e.target.value == ""
                  ? fetchData()
                  : setList_of_resturant(List_of_resturant);
              }}
            />
            <button
              onClick={() => FilterRestaurants()}
              className="search-item-btn bg-green-500 px-4 text-white rounded font-medium"
            >
              Search
            </button>
          </div>
          <button
            className="top-rated bg-red-500 px-4 text-white rounded font-medium"
            onClick={() => {
              FilteredList = List_of_resturant.filter(
                (res) => res.info.avgRating > 4
              );
              setList_of_resturant(FilteredList);
            }}
          >
            Top Restuarants
          </button>
        </div>
        <div className="resturant-container flex flex-wrap gap-10 justify-center p-10">
          {
            // Mapping All the Data
            List_of_resturant.map((resturant) => (
              <Link
                key={resturant.info.id}
                to={"/restaurants/" + resturant.info.id}
              >
                <ResturantCards ResData={resturant} />
              </Link>
            ))
          }
        </div>
      </div>
    );
};

export default Body;
