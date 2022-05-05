// imports
import React from 'react';
import { useRouter } from 'next/router';

// context
import { UserContext } from '../../../../context/UserContext';
import { CartContext } from '../../../../context/CartContext';

// components
import { Modal } from '../../../../utils/modal/Modal';
import { Cart } from '../../cart/Cart';
import { ActiveLink } from '../../../../utils/ActiveLink';
import { OnClickButton } from '../../buttons';
import { FooterExtraLinksItems } from '../FooterItems';

// helpers
import { RoutingPath } from '../../../../helpers/RoutingPath';

// Styles
import styles from './FooterNavbar.module.scss';
import { FooterNavbarItems } from './FooterNavbarItems';

export const FooterNavbar = ({ navPosition, navItems }) => {
  const router = useRouter();

  // Context
  const { user, setUser } = React.useContext(UserContext);
  const { cart } = React.useContext(CartContext);

  // State
  const [navPositionClicked, setNavPositionClicked] = React.useState('');
  const [modalVisible, setModalvisible] = React.useState(false);
  const [itemsInCart, setItemsInCart] = React.useState(
    cart.map((item) => item.quantity)
  );

  React.useEffect(() => {
    setItemsInCart(cart.map((item) => item.quantity));
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

  // Render footer nav items
  const renderFooterNavigation = () => {
    return navItems.map((item) => {
      return (
        <>
          <ActiveLink key={item.id} linkUrl={item.link} linkText={item.name} />
        </>
      );
    });
  };

  return (
    <>
      <nav className={styles.nav}>
        {/* <div className={styles.nav_items}>{renderFooterNavigation()}</div> */}
        <FooterNavbarItems items={navItems} />

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
                <OnClickButton
                  onClickHandler={() => setModalvisible(false)}
                  text="close"
                  type="primary"
                />
                <OnClickButton
                  onClickHandler={() => handleToCheckout()}
                  text="to Checkout"
                  type="primary"
                />
              </div>
            }
          />
        )}
      </nav>
    </>
  );
};
