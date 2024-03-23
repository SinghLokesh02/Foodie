// Header Component
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlinestatus = useOnlineStatus();
  return (
    <div className="header flex justify-between px-5 bg-orange-600 shadow-lg">
      <div className="logo w-20 my-auto">
        <img src={LOGO_URL} alt="" className="rounded-full" />
      </div>

      <div className="nav-items font-medium mr-5">
        <ul className="ul flex py-10 gap-7">
          <li className="list-items hover:text-white">
            Online status :{onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="list-items hover:text-white">
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          {/* Wrong Practice */}
          {/* <li><a href="about">About Us</a></li> */}

          <li className="list-items hover:text-white">
            {" "}
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="list-items hover:text-white">
            {" "}
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li className="list-items hover:text-white">
            {" "}
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li className="list-items hover:text-white">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
