import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo />
          </div>
        </Link>
        <div className="nav-links-container ">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;