// Header Component
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedinUser } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState("Login");
  const onlinestatus = useOnlineStatus();

  // Selector (It is a Hook)
  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header justify-between px-5 pb-0 shadow-xl flex flex-col md:flex-row">
      <div className="logo sm:w-10 md:w-20 md:my-auto p-2 m-auto md:m-0">
        <img src={LOGO_URL} alt="" className="rounded-full" />
      </div>

      <div className="nav-items font-medium mr-5 block md:flex md:items-center">
        <ul className="ul flex flex-col md:flex-row py-5 md:py-2 gap-3 font-serif font-bold ">
          <li className="list-items  py-3 px-2 rounded-xl text-center font-serif md:text-base md:text-left">
            Online status: {onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="list-items hover:bg-red-500 py-3 px-2 rounded-xl text-center font-serif md:text-base md:text-left">
            <Link to="/">Home</Link>
          </li>
          <li className="list-items hover:bg-red-500 py-3 px-2 rounded-xl text-center font-serif md:text-base md:text-left">
            <Link to="/about">About Us</Link>
          </li>
          <li className="list-items hover:bg-red-500 py-3 px-2 rounded-xl text-center font-serif md:text-base md:text-left">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="list-items hover:bg-red-500 py-3 px-2 rounded-xl text-center font-serif md:text-base md:text-left hidden">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="list-items hover:bg-red-500 py-3 px-2 rounded-xl text-center font-serif md:text-base md:text-left relative">
            <Link to="/cart">Cart</Link>
            {cartItems.length > 0 && (
              <span className="absolute top-[-18px] right-[-20px] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs bg-lime-500">
                <span className="inline-block align-middle">
                  {cartItems.length}
                </span>
              </span>
            )}
          </li>

          <li
            className="list-items hover:bg-red-500 py-3 px-2 rounded-xl cursor-pointer font-serif md:text-base text-center md:text-left"
            onClick={() => {
              loginInfo === "Login"
                ? setLoginInfo("Logout")
                : setLoginInfo("Login");
            }}
          >
            {loginInfo}
          </li>
          <li className="list-items hover:bg-red-500 py-3 px-2 rounded-xl text-center md:text-left font-serif md:text-base hidden">
            {loggedinUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
