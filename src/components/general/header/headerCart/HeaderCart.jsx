import * as React from "react";

// imports
import { useRouter } from "next/router";

// context
import { CartContext } from "../../../../context/CartContext";

// components
import { Modal } from "../../../../utils/modal/Modal";
import { Cart } from "../../cart/Cart";
import { OnClickButton } from "../../buttons";

// helpers
import { RoutingPath } from "../../../../helpers/RoutingPath";

// Styles
import styles from "./HeaderCart.module.scss";

export const HeaderCart = ({ navPosition }) => {
  const { cart } = React.useContext(CartContext);
  const [navPositionClicked, setNavPositionClicked] = React.useState("");
  const [modalVisible, setModalvisible] = React.useState(false);

  const router = useRouter();

  const [itemsInCart, setItemsInCart] = React.useState(
    cart.map((item) => item.quantity)
  );

  React.useEffect(() => {
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
            : "0"}
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
    </>
  );
};
