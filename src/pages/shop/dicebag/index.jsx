// imports

// components
import { Seo } from "../../../components/seo/Seo";
import { ProductCategory } from "../../../components/products/ProductCategory";

// helpers
import { RoutingPath } from "../../../helpers/RoutingPath";
import { filterProductsOnCategory } from "../../../helpers/FilterHelper";

// style
import style from "../../../styles/pages/Shop.module.scss";

export default function DiceBagCategory({ categoryProducts }) {
  console.log(categoryProducts);

  return (
    <>
      <Seo
        title="E-dice shop dicebag category"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.DiceBagCategory}
      />

      <>
        <ProductCategory title="Dicebag" productsData={categoryProducts} />
      </>
    </>
  );
}

export async function getStaticProps() {
  // Fetcha produkter från servern
  const res = await fetch("https://edice-back.herokuapp.com/product");
  const products = await res.json();

  // Filtrera produkter efter kategori
  const categoryProducts = filterProductsOnCategory(products, "dicebag");

  return {
    props: {
      categoryProducts,
    },
  };
}
