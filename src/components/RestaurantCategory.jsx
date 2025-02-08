import ItemList from "./itemList"
import { useState } from "react";
const RestaurantCategory = ({data, showItems,setShowIndex}) => {
  const handleClick = () =>{
    setShowIndex();
  }
  return (
    <div className='bg-gray-100 w-6/12 rounded-lg mx-auto my-4 p-4  '>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}> 
        <span className=''>{data.title} ({data.itemCards.length})</span>
        <span> 🔽</span>
        </div>
        <div>

          {showItems && <ItemList items={data.itemCards}/>}
        </div>
        
    </div>
  )
}

export default RestaurantCategory