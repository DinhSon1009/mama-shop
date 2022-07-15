import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropDown/CartDropDown";
import { CartContext } from "../../context/cartContext";
import { signOutUser } from "../../utils/firsebase/firebase.utils";
import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./NavbarStyles";
import { selectCurrentUser } from "../../store/user/userSelector";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <NavbarContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
