import "./CartDropDown.scss";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";

function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropDown;
