// Header Component
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";




const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="" />
      </div>

      <div className="nav-items">
        <ul className="ul">
        <li className="list-items"> <Link to= '/'>Home</Link> </li>
          {/* Wrong Practice */}
          {/* <li><a href="about">About Us</a></li> */}

          <li className="list-items"> <Link to= '/about'>About Us</Link> </li>
          <li className="list-items"> <Link to= '/contact'>Contact Us</Link> </li>
          <li className="list-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
