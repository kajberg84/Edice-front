// components
import { Card } from '../card/Card';

// helpers
import { products } from '../../../api/EcomData';

// styles
import styles from './ProductsWrapper.module.scss';

export const ProductsWrapper = () => {
  return (
    <div className={styles.products_wrapper}>
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};
