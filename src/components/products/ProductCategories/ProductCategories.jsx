// imports
import * as React from 'react';

// components
import { ProductCategoryCard } from './ProductCategoryCard/ProductCategoryCard';
// helpers
import { ProductCategoryItems } from './ProductCategoryItems';

// styles
import styles from './ProductCategories.module.scss';

export const ProductCategories = () => {
  console.log(ProductCategoryItems);
  return (
    <div className={styles.wrapper}>
      {ProductCategoryItems.map((category) => (
        <ProductCategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};
