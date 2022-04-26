import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import styles from './addToCartButton.module.scss';

export const AddToCartButton = (props) => {
  const { cart, setCart } = useContext(CartContext);

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
      <button className={styles.card_button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </>
  );
};
