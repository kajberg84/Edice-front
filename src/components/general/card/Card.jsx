// imports
import * as React from "react";

// components
import { ProductModal } from "../productmodal/ProductModal";
import { AddToCartButton } from "../addToCartButton/AddToCartButton";

// styles
import styles from "./Card.module.scss";

export const Card = ({ product }) => {
  const [showModal, setShowModal] = React.useState(false);

  // disable scrolling the page when modal is open
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  const handleModal = () => {
    setShowModal(true);
    lockScroll();
  };

  const closeModal = () => {
    setShowModal(false);
    unlockScroll();
  };

  return (
    <>
      <div onClick={handleModal} className={styles.card_wrapper}>
        <div className={styles.card_img_wrapper}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={styles.card_content_wrapper}>
          <h2 className={styles.card_title}>{product.title}</h2>
          <p className={styles.card_description}>{product.description}</p>
          <p className={styles.card_material}>Material: {product.material}</p>
          <h3 className={styles.card_price}>{product.price} $</h3>
        </div>
      </div>
      {showModal && <ProductModal product={product} closeModal={closeModal} />}
    </>
  );
};
