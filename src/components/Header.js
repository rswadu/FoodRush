import { logoUrl } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import store from "../utils/store";

const loggedInUser = () => {
  return false;
};

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState();
  // const cartItems = useSelector((store) => store.cart.items);
  const cartItems=useSelector(store=>store.cart.items);
  console.log(cartItems);
  return (
    <div>
    <div className="flex justify-between items-center bg-emerald-400">
      <Link to={"/foodrush"}>
         <div className="logoContainer">
        <img className="h-24 p-2" src={logoUrl} alt="" />
      </div>
      </Link>
     
      <div className="py-6 px-10">
        <ul className="flex space-x-7 text-white">
          <Link to={"/foodrush"}>
            <li className="navItem">Home</li>
          </Link>
          <Link to={"/About"}>
            <li className="navItem">About</li>
          </Link>

          <Link to={"/instamart"}>
            <li className="navItem">InstaMart</li>
          </Link>
          <Link to={"/cart"}>
            <li className="navItem">Cart{cartItems.length}</li>
          </Link>
          {isLoggedIn ? (
            <li className="navItem" onClick={() => setisLoggedIn(false)}>
              logout
            </li>
          ) : (
            <li className="navItem" onClick={() => setisLoggedIn(true)}>
              login
            </li>
          )}
        </ul>
      </div>
    </div>
    <Outlet/>
    </div>
  );
};
export default Header;
