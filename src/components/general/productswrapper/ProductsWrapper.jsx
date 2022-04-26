import React from 'react';
import { Card } from '../card/Card';
import { products } from '../../../api/EcomData';
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
