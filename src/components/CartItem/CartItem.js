import {
  CartItemContainer,
  Image,
  ItemDetails,
  ItemName,
  ItemPrice,
} from "./CartItemStyle";

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>
          {quantity} x ${price}
        </ItemPrice>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
