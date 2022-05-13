// imports
import React from 'react';

// components

// styles
import styles from './ProductsCard.module.scss';

export const ProductsCard = ({ product }) => {
  return (
    <>
      <div className={styles.card_wrapper}>
        <div className={styles.card_img_wrapper}>
          <img src={`/images/${product.img}`} alt={product.title} />
        </div>
        <div className={styles.card_content_wrapper}>
          <h2 className={styles.card_title}>{product.title}</h2>
          <p className={styles.card_description}>{product.description}</p>
          <p className={styles.card_material}>Material: {product.material}</p>
          <h3 className={styles.card_price}>{product.price} $</h3>
        </div>
      </div>
    </>
  );
};
