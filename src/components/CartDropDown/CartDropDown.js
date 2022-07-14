import "./CartDropDown.scss";

import React from "react";
import Button from "../Button/Button";

function CartDropDown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropDown;
