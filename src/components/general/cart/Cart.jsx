import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import style from './Cart.module.scss';
// import plus from '/icons/add_white_24dp.svg';
// import minus from '/icons/remove_white_24dp.svg';

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  //Funktionalitet för att öka eller minska antalet producter i varukorgen.
  const incrementQuantity = (product) => {
    product.quantity += 1;
    const updatedCart = cart.slice();
    setCart(updatedCart);
  };
  const decrementQuantity = (product) => {
    const checkCartForProduct = cart.findIndex(
      (item) => item.title === product.title
    );
    if (product.quantity > 1) {
      product.quantity -= 1;
      const updatedCart = cart.slice();
      setCart(updatedCart);
    } else if (product.quantity === 1) {
      cart.splice(checkCartForProduct, 1);
      const updatedCart = cart.slice();
      setCart(updatedCart);
    }
  };

  //Functions for adding prices for a total.
  const multiply = (a, b) => {
    return a * b;
  };

  const allPrices = cart.map((product) =>
    multiply(product.price, product.quantity)
  );

  return (
    <div>
      {cart.length <= 0 && <p>Your shopping cart is empty...</p>}
      <ul>
        {cart.map((product, index) => (
          <li className={style.li_style} key={index}>
            <span className={style.cart_name}>
              {product.quantity} {product.title}
            </span>
            <div className={style.cart_incdecbuttons}>
              <img
                src="/icons/add_white_24dp.svg"
                alt="increase quantity by 1"
                className={style.cart_button}
                onClick={() => incrementQuantity(product)}
              />

              <img
                src="/icons/remove_white_24dp.svg"
                alt="reduce quantity by 1"
                className={style.cart_button}
                onClick={() => decrementQuantity(product)}
              />
            </div>

            <p className={style.cart_price}>
              {' '}
              {product.price * product.quantity} $
            </p>
          </li>
        ))}
        <div className={style.total_wrapper}>
          <p className={style.total}> Total: </p>
          <p className={style.total}>
            {allPrices.length > 0
              ? allPrices.reduce((total, price) => total + price)
              : '0'}{' '}
            $
          </p>
        </div>
      </ul>
    </div>
  );
};
