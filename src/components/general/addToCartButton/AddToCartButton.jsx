// imports
import * as React from "react";

// context
import { CartContext } from "../../../context/CartContext";

// components
import { OnClickButton } from "../buttons";

export const AddToCartButton = (props) => {
  const { cart, setCart } = React.useContext(CartContext);

  const { product } = props;

  // Add to cart, if product already in cart, increment quantity instead.

  const addToCart = (product) => {
    const checkCartForProduct = cart.findIndex(
      (item) => item.title === product.title
    );

    if (checkCartForProduct !== -1) {
      cart[checkCartForProduct].quantity += 1;
      const updatedCart = cart.slice();
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <>
      <OnClickButton
        onClickHandler={() => addToCart(product)}
        text="Add to Cart"
        type="primary"
      />
    </>
  );
};
