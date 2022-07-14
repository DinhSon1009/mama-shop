import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import {
  Arrow,
  CheckoutItemContainer,
  Image,
  ImageContainer,
  Quantity,
  QuantityValue,
  RemoveButton,
  Title,
} from "./CheckoutItemStyles";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Title>{name}</Title>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Title> {price}</Title>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
