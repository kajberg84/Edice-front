import * as React from "react";

// components
import { AddToCartButton } from "../../general/addToCartButton/AddToCartButton";

import styles from "./ProductPage.module.scss";

export const ProductPage = ({ product }) => {
  console.log(product);
  return (
    <div className={styles.content}>
      <div className={styles.content_img_wrapper}>
        <img src={`/images/${product.img}`} alt={product.title} />
      </div>

      <div className={styles.content_wrapper}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.material}>Material: {product.material}</p>
        <h3 className={styles.price}>{product.price} $</h3>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};
