// styles
import styles from './ProductCardSmall.module.scss';

export const ProductCardSmall = ({ title, description, quantity, price }) => {
  return (
    <div className={styles.product_card_small_wrapper}>
      <div
        className={`${styles.product_card_small_items} ${styles.product_card_title}`}
      >
        <h4>Product:</h4>
        <p>{title}</p>
      </div>
      <div
        className={`${styles.product_card_small_items} ${styles.product_card_description}`}
      >
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
      {quantity > 0 && (
        <div className={styles.product_card_small_items}>
          <h4>Quantity:</h4>
          <p>{quantity}</p>
        </div>
      )}

      <div
        className={`${styles.product_card_small_items} ${styles.product_card_price}`}
      >
        <h4>Price:</h4>
        <p>{price} $</p>
      </div>
    </div>
  );
};
