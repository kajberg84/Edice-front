// imports
import * as React from "react";
import Link from "next/link";

// styles
import styles from "./ProductCategoryCard.module.scss";

export const ProductCategoryCard = ({ category }) => {
  return (
    <>
      <Link href={category.url}>
        <a>
          <div className={styles.card_wrapper}>
            <div className={styles.card_img_wrapper}>
              <img src={category.image} alt={category.title} />
            </div>
            <div className={styles.card_content_wrapper}>
              <h2 className={styles.card_title}>{category.title}</h2>
              <p className={styles.card_description}>{category.description}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};
