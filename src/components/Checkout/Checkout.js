import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Span,
  Total,
} from "./CheckoutStyle";

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <Span>Product</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Description</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Quantity</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Price</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Remove</Span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
}
