import React from 'react';
import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { RoutingPath } from '../../../helpers/RoutingPath';

import { UserContext } from '../../../context/UserContext';
import { CartContext } from '../../../context/CartContext';
import { Modal } from '../../../utils/modal/Modal';
import { removeLocalStorage } from '../../../utils/localStorageHandler';
import { Cart } from '../cart/Cart';
// import CustomLink from '../../../utils/CustomLink';

// Styles
import styles from './Navbar.module.scss';

export const Navbar = (props) => {
  const { navPosition } = props;

  const [navPositionClicked, setNavPositionClicked] = useState('');
  const { user, setUser } = useContext(UserContext);

  const [modalVisible, setModalvisible] = useState(false);

  const { cart } = useContext(CartContext);

  const router = useRouter();

  const [itemsInCart, setItemsInCart] = useState(
    cart.map((item) => item.quantity)
  );

  const updateItemsInCart = () => {
    setItemsInCart(cart.map((item) => item.quantity));
  };

  useEffect(() => {
    updateItemsInCart();
  }, [cart]);

  // Logout function
  const handleLogout = () => {
    removeLocalStorage('edice-user');
    setUser(null);
    router.push(RoutingPath.Login);
  };

  // Navbar links if not logged in.
  const unAuthNavbar = () => {
    return (
      <>
        <Link href={RoutingPath.Login}>
          <a className={styles.nav_item}>Login</a>
        </Link>
        <Link href={RoutingPath.Register}>
          <a className={styles.nav_item}>Register</a>
        </Link>
      </>
    );
  };

  //Navbar links if logged in
  const authNavbar = () => {
    return (
      <>
        <Link href={RoutingPath.Account}>
          <a className={styles.nav_item}>Account</a>
        </Link>
        <button className={styles.nav_button} onClick={handleLogout}>
          Logout
        </button>
      </>
    );
  };

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
      <nav className={styles.nav}>
        <Link href={RoutingPath.Home}>
          <a className={styles.nav_item}>Shop</a>
        </Link>
        <Link href={RoutingPath.Checkout}>
          <a className={styles.nav_item}>Checkout</a>
        </Link>
        {user ? authNavbar() : unAuthNavbar()}
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
      </nav>
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
