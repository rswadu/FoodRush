import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDNLink } from "../utils/constants";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ResMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({});
  const [itemInfo, setIteminfo] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2960587&lng=85.8245398&restaurantId="+id+"&submitAction=ENTER"
    );

    const json = await data.json();
  
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

    let obj3 = json?.data?.cards[2];
   
    
    obj3=obj3?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
      //  console.log(obj3);
      setIteminfo(obj3);
    
  }
  const dispatch=useDispatch();
  const addFoodItem=(item)=>{
    dispatch(addItem(item));
  }

  return !restaurant.cloudinaryImageId ? (
    <Shimmer />
  ) : (
    <div className="flex p-2 m-2">
      <div className="w-72 h-full bg-emerald-400 m-5">
        <div className="m-2 font-semibold">
          <img src={CDNLink + restaurant.cloudinaryImageId} />
        <h1>restaurant id:{id}</h1>
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.locality}</h1>
        <h1>{restaurant.areaName}</h1>

        <h1>{restaurant.costForTwo / 100} rupees for two</h1>
        </div>
        
        <div>
        {/* <button className="p-2 m-2 bg-green-200" onClick={()=>{
          dispatch(addItem("apple"));
        }}>add item</button> */}
      </div>
      </div>
      

      <div>
        <h1 className="font-semibold text-center">menu</h1>
        <hr />
        <div className="border border-black p-2">
           <ul >
          {Object.values(itemInfo).map((obj) => (
            <li  key={obj?.card?.info?.id} className="pt-2">{obj?.card?.info?.name} <button className=" bg-green-200" onClick={()=>{
              addFoodItem(obj.card.info)
            }}>addItem</button> </li>
          ))}
        </ul>
        </div>
       
      </div>
    </div>
  );
};
export default ResMenu;
