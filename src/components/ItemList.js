import { CDN_LINK } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div className="itemlist p-3 pt-0">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex my-3 p-5 justify-between gap-3 h-fit border-b-2 border-gray-400"
        >
          <div className="details flex flex-col justify-center w-9/12">
            <h1 className="font-bold text-left font-serif">{item.card.info.name}</h1>
            <h1 className="text-sm text-left font-serif">{item.card.info.description}</h1>
            <h1 className="text-left">
              Rs <span className="font-bold text-left">{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</span>{" "}
              /-
            </h1>
          </div>
          <div className="image w-3/12 flex justify-center items-center h-[150px]">
            {item.card.info.imageId && (
              <img
                src={CDN_LINK + item.card.info.imageId}
                alt=""
                className="rounded h-full"
                style={{ objectFit: 'cover', width: '100%' }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
