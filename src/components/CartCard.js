import { CDNLink } from "../utils/constants";

const CartCard = ({ id, imageId, name, description, price, rating }) => {
    console.log(imageId);
  return (
    <div className=" p-2 m-2 ">
        <div className="w-72 h-full bg-emerald-400 ">
      <img src={CDNLink + imageId} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
    </div>
    
  );
};
export default CartCard;
