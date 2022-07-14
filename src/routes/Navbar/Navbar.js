import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import CartIcon from "../../components/CartIcon/CartIcon";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firsebase/firebase.utils";
import "./Navbar.scss";
const Navbar = () => {
  const { currentUSer } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
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
          {currentUSer ? (
            <span onClick={signOutUser} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
