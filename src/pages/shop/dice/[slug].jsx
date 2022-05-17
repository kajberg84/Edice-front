// imports
import * as React from 'react';

// components
import { Seo } from '../../../components/seo/Seo';
import { ProductPage } from '../../../components/products/ProductPage/ProductPage';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

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
  const res = await fetch('https://mattis-test.herokuapp.com/resource/getall');
  const products = await res.json();

  // Filtrera produkter efter kategori
  const categoryProducts = products.filter((product) => {
    return product.category === 'dice';
  });

  const paths = categoryProducts.map((product) => {
    return { params: { slug: product.slug } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // skapa funktionalitet i backend att kunna fetcha på en produkts slug
  const res = await fetch(
    `https://mattis-test.herokuapp.com/resource/?slug=${context.params.slug}`
  );
  const data = await res.json();

  return {
    props: {
      productData: data,
    },
  };
}
