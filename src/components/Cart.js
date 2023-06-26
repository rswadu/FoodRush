import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";
// import store from "../utils/store";

//
const Cart = () => {
  const cartitem = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
   const handleClear=()=>{
    dispatch(clearCart());
   }
  return (
    <>
      {/* <h1>this is cart</h1> */}
      <button onClick={()=>{
        handleClear()
       }}    className="bg-red-300 m-1 p-1">clear cart</button>
       <div className="flex flex-wrap ">
         {cartitem.map((item) => (
        <CartCard key={item.id} {...item} />
      ))}
      </div>
     
    </>
  );
};
export default Cart;
