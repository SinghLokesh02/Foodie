import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, isOpen, setShowIndex }) => {
  function handleClick() {
    setShowIndex();
  }

  return (
    <div>
      <div className="main-container  bg-gray-200 my-4 mx-auto md:w-6/12">
        {/* Header */}
        <div
          className="header p-4 flex justify-between w-full hover:cursor-pointer"
          onClick={handleClick}
        >
          <span className="mx-2 font-bold text-large font-serif">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="mx-2">{isOpen ? "🔼" : "🔽"}</span>
        </div>
        {/* Accordian Body */}

        <div className="accordian-body">
          {isOpen && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
