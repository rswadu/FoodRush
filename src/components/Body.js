import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterData";
import checkOnline from "../utils/useCheckOnline"


const Body = () => {
  const [restaurantList, setresList] = useState([]);
  const [updatedList, setupdatedList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  // const online=checkOnline();
   

  // if(!online){
  //   return (
  //     <h1>please check your internet connection</h1>
  //   );
  // }

  

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setresList(json?.data?.cards[2]?.data?.data?.cards);
    setupdatedList(json?.data?.cards[2]?.data?.data?.cards);
  }
  if(!restaurantList){
    return null;
  }
  
  

  // if(updatedList.length==0){
  //   return <h2>no result matches your search</h2>
  // }

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="bodyContainer">
      <div className="flex justify-center my-10 ">
        <input
          className=" bg-emerald-400"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" bg-emerald-400 p-2 ml-3 rounded-md"
          onClick={() => {
            // const updatedData=filterData(searchText,restaurantList);
            const updatedData = filterData(searchText, restaurantList);
            setupdatedList(updatedData);
            if(updatedList.length===0){
               <h2>no result matches your search</h2>
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="ml-24">
        <button
          className=" bg-emerald-400 p-1 rounded-md"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setupdatedList(filteredList);
          }}
        >
          top rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap px-20">
        
       
        {(updatedList.length==0)?<h2>no result matches your search</h2>:
        updatedList.map((e) => (
          
          < Link key={e.data.id} to={"/restaurant/"+e.data.id}>
            <ResCard  resData={e} />
            </Link>
        ))
      }
      
        {/* <ResCard resData={restaurantList[0]} /> */}
        {/* <ResCard resCardTitle="Chai Tapri" cuisine="chai, coffee"/> */}
      </div>
    </div>
  );
};
export default Body;
