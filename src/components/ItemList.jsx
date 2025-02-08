import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //  Dispatch an action
    dispatch(addItem(item));
  };

  const handleReomveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img
              src={IMG_URL + item.card.info.imageId}
              className="w-full rounded-md shadow-lg "
            />
            <div className="flex items-center justify-center">
              <button className="p-1 bg-black text-white shadow-sm  rounded-lg">
                <span onClick={() => handleReomveItem(item)}>➖</span> Cart
                <span onClick={() => handleAddItem(item)}>➕</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
