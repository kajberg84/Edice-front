// imports
import * as React from 'react';

// components
import { Seo } from '../../../components/seo/Seo';
import { ProductPage } from '../../../components/products/ProductPage/ProductPage';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';
import { getData } from '../../../helpers/FetchHelper';
import { filterProductsOnCategory } from '../../../helpers/FilterHelper';

export default function DiceProductPage({ productData }) {
  const product = productData[0];

  return (
    <>
      <Seo
        title={product.title}
        description={product.description}
        image="/vercel.svg"
        pageUrl={RoutingPath.DiceCategory + '/' + product.slug}
      />

      <>
        <ProductPage product={product} />
      </>
    </>
  );
}

export async function getStaticPaths() {
  const products = await getData('product');

  // Filtrera produkter efter kategori
  const categoryProducts = filterProductsOnCategory(products, 'dice');

  const paths = categoryProducts.map((product) => {
    return { params: { slug: product.slug } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const data = await getData(`product/slug/?slug=${context.params.slug}`);

  return {
    props: {
      productData: data,
    },
  };
}
