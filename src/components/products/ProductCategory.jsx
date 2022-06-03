// imports
import * as React from "react";

// components
import { Hero } from "../general/hero/Hero";
import { ProductsWrapper } from "./productswrapper/ProductsWrapper";

// helpers
import { products } from "../../api/tomte";

export const ProductCategory = ({ title, productsData }) => {
  return (
    <>
      <Hero title={title}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eaque,
          unde hic enim doloribus facere rerum placeat id excepturi,
          consequatur, velit labore ullam suscipit quia eveniet. Velit nobis
          quae non laboriosam quisquam pariatur ad, excepturi adipisci
          consectetur necessitatibus. Voluptatem, magni.
        </p>
      </Hero>
      <ProductsWrapper productsData={productsData} />
    </>
  );
};
