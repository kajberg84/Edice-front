// imports
import * as React from 'react';

// components
import { Seo } from '../../../components/seo/Seo';
import { ProductCategory } from '../../../components/products/ProductCategory';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';
import { getData } from '../../../helpers/FetchHelper';
import { filterProductsOnCategory } from '../../../helpers/FilterHelper';

// style
import style from '../../../styles/pages/Shop.module.scss';

export default function DiceCategory({ categoryProducts }) {
  return (
    <>
      <Seo
        title="E-dice shop dice category"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.DiceCategory}
      />

      <>
        <ProductCategory title="Dices" productsData={categoryProducts} />
      </>
    </>
  );
}

export async function getStaticProps() {
  // Fetcha produkter från servern
  const products = await getData('product');

  // Filtrera produkter efter kategori
  const categoryProducts = filterProductsOnCategory(products, 'dice');

  return {
    props: {
      categoryProducts,
    },
  };
}
