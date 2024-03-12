import ResturantCards from "./ResturantCards";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    return (
    <div className="body">
      <div className="filter-btn">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search Here"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
              e.target.value == ""
                ? fetchData()
                : setList_of_resturant(List_of_resturant);
            }}
          />
          <button onClick={() => FilterRestaurants()} className="search-item-btn" >
            Search
          </button>
        </div>
        <button
          className="top-rated"
          onClick={() => {
            FilteredList = List_of_resturant.filter((res) => res.info.avgRating > 4);
            setList_of_resturant(FilteredList);
          }}
        >
          Top Restuarants
        </button>
      </div>
      <div className="resturant-container">
        {
          // Mapping All the Data
          List_of_resturant.map((resturant) => (
            <Link key={resturant.info.id}  
            to={"/restaurants/"+resturant.info.id}><ResturantCards ResData={resturant} /></Link>
            
          ))
        }
      </div>
    </div>
  );
};

export default Body;
