// imports
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// context
import { UserContext } from '../../../context/UserContext';
import { CartContext } from '../../../context/CartContext';

// components
import { Modal } from '../../../utils/modal/Modal';
import { removeLocalStorage } from '../../../utils/localStorageHandler';
import { Cart } from '../cart/Cart';
import { ActiveLink } from '../../../utils/ActiveLink';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

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
        <ActiveLink linkUrl={RoutingPath.Login} linkText="Login" />
        <ActiveLink linkUrl={RoutingPath.Register} linkText="Register" />
      </>
    );
  };

  //Navbar links if logged in
  const authNavbar = () => {
    return (
      <>
        <ActiveLink linkUrl={RoutingPath.Account} linkText="Account" />
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
        <ActiveLink linkUrl={RoutingPath.Home} linkText="Shop" />
        <ActiveLink linkUrl={RoutingPath.Checkout} linkText="Checkout" />

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
