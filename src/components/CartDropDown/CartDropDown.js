import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropDownStyles";

function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
}

export default CartDropDown;
