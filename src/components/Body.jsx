import RestaurantCard, { withPromoted } from "./RestaurantCard";
import resObj from "../utils/mock";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromoted } from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteringList, setFilteringList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantPromoted = withPromoted(RestaurantCard);
  console.log(filteringList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const json =  await data.json();
    // const reslist=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // setlistOfRestaurants(reslist)
    // setFilteringList(reslist)

    setTimeout(() => {
      setlistOfRestaurants(resObj);
      setFilteringList(resObj);
    }, 1000);
  };
  if (onlineStatus === false)
    return <h1 className="font-bold">You are Offline check internet connection</h1>;

  if (listOfRestaurants.length === 0) return <Shimmer />;
  return (
    <div className=" bg-white m-4 p-4 ">
      <div className="flex py-8 px-4 justify-center ">
        <div className="">
          <input
            type="text"
            className="border border-solid border-black px-4 py-2  rounded-md "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="ml-4">
          <button
            className="bg-green-100 border border-solid border-black rounded-lg px-4 py-2 ml-1 "
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteringList(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="">
          <button
            className="bg-green-100 border border-solid border-black px-4 py-2 rounded-lg ml-4"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.5;
              });
              setlistOfRestaurants(filteredList);
            }}
          >
            Top restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap m-4">
        {filteringList.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantPromoted resdata={restaurant} />
            ) : (
              <RestaurantCard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
