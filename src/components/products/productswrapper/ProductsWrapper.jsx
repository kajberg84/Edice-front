// components
import { Card } from "../../general/card/Card";
import { ProductsCard } from "../ProductsCard/ProductsCard";

// helpers

// styles
import styles from "./ProductsWrapper.module.scss";

export const ProductsWrapper = ({ productsData }) => {
  return (
    <div className={styles.products_wrapper}>
      {productsData.map((product) => {
        return <ProductsCard key={product._id} product={product} />;
      })}
    </div>
  );
};
