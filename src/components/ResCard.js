import { CDNLink } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/UserContext";
const ResCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data;
  // const context=useContext(userContext);
  return (
    <div className="m-4 w-64 h-80 p-1  bg-emerald-400">
      
        <img className="" src={CDNLink + cloudinaryImageId} alt="" />
        <h2 className="resCardTitle">{name}</h2>
        <h3 className="cuisine">{cuisines.join(", ")}</h3>
        <div className="desc">
          <div className="star">{avgRating} stars</div>
          <div className="deliveryTime">{deliveryTime} mins</div>
          <div className="price">{costForTwo / 100} for two</div>
        </div>
        {/* <div>{context.name} {context.email}</div> */}
      </div>
    
  );
};
export default ResCard;
