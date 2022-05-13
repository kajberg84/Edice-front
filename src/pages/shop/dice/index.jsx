// components
import { Seo } from '../../../components/seo/Seo';
import { Hero } from '../../../components/general/hero/Hero';
import { ProductsWrapper } from '../../../components/general/productsWrapper/ProductsWrapper';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

// style
import style from '../../../styles/pages/Shop.module.scss';
import { ProductCategory } from '../../../components/products/ProductCategory';

export default function DiceCategory({ categoryProducts }) {
  console.log(categoryProducts);

  return (
    <>
      <Seo
        title="E-dice shop page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.shop}
      />

      <>
        <ProductCategory title="Dices" productsData={categoryProducts} />
      </>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://mattis-test.herokuapp.com/resource/getall');
  const products = await res.json();

  const categoryProducts = products.filter((product) => {
    return product.category === 'dice';
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      categoryProducts,
    },
  };
}
