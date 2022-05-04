import React from 'react';
// imports
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// context
import { CartContext } from '../../../../context/CartContext';

// components
import { Modal } from '../../../../utils/modal/Modal';
import { Cart } from '../../cart/Cart';

// helpers
import { RoutingPath } from '../../../../helpers/RoutingPath';

// Styles
import styles from './HeaderCart.module.scss';

export const HeaderCart = ({ navPosition }) => {
  const { cart } = useContext(CartContext);
  const [navPositionClicked, setNavPositionClicked] = useState('');
  const [modalVisible, setModalvisible] = useState(false);

  const router = useRouter();

  const [itemsInCart, setItemsInCart] = useState(
    cart.map((item) => item.quantity)
  );

  useEffect(() => {
    const updateItemsInCart = () => {
      setItemsInCart(cart.map((item) => item.quantity));
    };
    updateItemsInCart();
  }, [cart]);

  //Shopping cart modal
  const showModal = () => {
    setModalvisible(!modalVisible);
    setNavPositionClicked(navPosition);
  };

  // Checkoutbutton in shopping cart modal
  const handleToCheckout = () => {
    router.push(RoutingPath.Checkout);
    setModalvisible(false);
  };
  return (
    <>
      <div className={styles.nav_icon_wrapper} onClick={showModal}>
        <button className={styles.nav_button}>
          {cart.length <= 0 ? (
            <img
              className={styles.cart_icon}
              src="/icons/shopping_cart_icon.svg"
              alt="Icon for the cart"
            />
          ) : (
            <img
              className={styles.cart_icon}
              src="/icons/shopping_cart_plus.svg"
              alt="Icon for the cart"
            />
          )}
        </button>
        <p>
          (
          {itemsInCart.length > 0
            ? itemsInCart.reduce((total, price) => total + price)
            : '0'}
          )
        </p>
      </div>
      {modalVisible && (
        <Modal
          passedPosition={navPositionClicked}
          title="Shopping cart"
          content={<Cart />}
          actions={
            <div>
              <button onClick={() => setModalvisible(false)}>close</button>
              <button onClick={() => handleToCheckout()}> to Checkout</button>
            </div>
          }
        />
      )}
    </>
  );
};
