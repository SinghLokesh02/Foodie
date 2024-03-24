// Header Component
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { loggedinUser } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState("Login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="header justify-between px-5 pb-0 bg-orange-600 shadow-lg flex flex-col md:flex-row">
      <div className="logo sm:w-15 md:w-20 md:my-auto p-2 m-auto md:m-0">
        <img src={LOGO_URL} alt="" className="rounded-full" />
      </div>

      <div className="nav-items font-medium mr-5 block md:flex md:items-center">
        <ul className="ul flex flex-col md:flex-row py-5 md:py-0 gap-7">
          <li className="list-items hover:text-white text-center font-serif text-2xl md:text-base md:text-left">
            Online status: {onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="list-items hover:text-white text-center font-serif text-2xl md:text-base md:text-left">
            <Link to="/">Home</Link>
          </li>
          <li className="list-items hover:text-white text-center font-serif text-2xl md:text-base md:text-left">
            <Link to="/about">About Us</Link>
          </li>
          <li className="list-items hover:text-white text-center font-serif text-2xl md:text-base md:text-left">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="list-items hover:text-white text-center font-serif text-2xl md:text-base md:text-left">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="list-items hover:text-white text-center font-serif text-2xl md:text-base md:text-left">
            Cart
          </li>
          <li
            className="list-items hover:text-white cursor-pointer font-serif text-2xl md:text-base text-center md:text-left"
            onClick={() => {
              loginInfo === "Login"
                ? setLoginInfo("Logout")
                : setLoginInfo("Login");
            }}
          >
            {loginInfo}
          </li>
          <li className="list-items hover:text-white text-center md:text-left font-serif text-2xl md:text-base">
            {loggedinUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
