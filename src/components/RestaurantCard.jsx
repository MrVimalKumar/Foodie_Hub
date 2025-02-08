import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, areaName } =
    resdata?.info;
  return (
    <div className="m-4 p-4 w-[250px]  bg-gray-100  hover:bg-gray-300 rounded-lg">
      <img
        className="rounded-lg w-[250px] h-[150px]"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold pt-2">{name}</h3>
      <h4>Ratings : {avgRating}</h4>
      <h4>Cusines:{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>Area : {areaName}</h4>
    </div>
  );
};

// Higher Order Component
// input ==> Compnent(Resataurant Card) that returns output RestaurantPromoted Card.

export const withPromoted = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white mx-4 my-2 p-3 rounded-lg" >Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
