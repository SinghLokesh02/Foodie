import ResturantCards from "./ResturantCards";
import ResList from "../utils/mockdata";

import { useState } from "react";

// Body Component
const Body = () => {
  // State Variable -> Super Powerful Variable
  const [List_of_resturant, setList_of_resturant] = useState(ResList);

  // Normal Js Variables
  // let List_of_resturant;

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="top-rated"
          onClick={() => {
            FilteredList = ResList.filter((res) => res.info.avgRating > 4.3);
            setList_of_resturant(FilteredList);
          }}
        >
          Top Restuarants
        </button>
      </div>
      <div className="resturant-container">
        {/* Resturant Card Component */}

        {/*
          Instead of Writing It Again and Again write a loop for this
  
           <ResturantCards ResData={ResList[0]} />
          <ResturantCards ResData={ResList[1]} />
          <ResturantCards ResData={ResList[2]} />
          <ResturantCards ResData={ResList[3]} />
          <ResturantCards ResData={ResList[4]} />
          <ResturantCards ResData={ResList[5]} />
          <ResturantCards ResData={ResList[6]} />
          <ResturantCards ResData={ResList[7]} />
          <ResturantCards ResData={ResList[8]} />
          <ResturantCards ResData={ResList[9]} />
          <ResturantCards ResData={ResList[10]} />
          <ResturantCards ResData={ResList[11]} /> 
          */}

        {/* By Loops */}
        {
          // Mapping All the Data
          List_of_resturant.map((resturant) => (
            <ResturantCards key={resturant.info.id} ResData={resturant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
