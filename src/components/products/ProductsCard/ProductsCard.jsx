// imports
import * as React from "react";
import Link from "next/link";

// components

// styles
import styles from "./ProductsCard.module.scss";

export const ProductsCard = ({ product }) => {
  return (
    <>
      <div className={styles.card_wrapper}>
        <Link href={`/shop/${product.category}/${product.slug}`}>
          <a>
            <div className={styles.card_img_wrapper}>
              <img
                src={`/images/${product.imagePrimary}`}
                alt={product.title}
              />
            </div>
            <div className={styles.card_content_wrapper}>
              <h2 className={styles.card_title}>{product.title}</h2>
              <p className={styles.card_description}>{product.description}</p>
              <p className={styles.card_material}>
                Material: {product.material}
              </p>
              <h3 className={styles.card_price}>{product.price} $</h3>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};
