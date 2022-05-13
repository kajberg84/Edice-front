// imports
import * as React from 'react';

// components
import { Seo } from '../../../components/seo/Seo';
import { ProductCategory } from '../../../components/products/ProductCategory';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

// style
import style from '../../../styles/pages/Shop.module.scss';

export default function DiceCategory({ categoryProducts }) {
  console.log(categoryProducts);
  console.log(categoryProducts[0].slug);

  React.useEffect(() => {
    // Fetcha produkter från servern
    const getProduct = async () => {
      const res = await fetch(
        `https://mattis-test.herokuapp.com/resource/627e84d7b1a54c00161e7ac2`
      );
      const product = await res.json();

      console.log(product);
    };
    getProduct();
  }, []);

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
  const res = await fetch('https://mattis-test.herokuapp.com/resource/getall');
  const products = await res.json();

  // Filtrera produkter efter kategori
  const categoryProducts = products.filter((product) => {
    return product.category === 'dice';
  });

  return {
    props: {
      categoryProducts,
    },
  };
}
