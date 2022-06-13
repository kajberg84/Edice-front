import Link from "next/link";
import { useContext } from "react";

// context
import { UserContext } from "../context/UserContext";

// components
import { Seo } from "../components/seo/Seo";
import { Hero } from "../components/general/hero/Hero";
import { ProductCategoryCard } from "../components/products/ProductCategories/ProductCategoryCard/ProductCategoryCard";
import { NavBtn } from "../components/general/buttons/NavButtons";

// helpers
import { ProductCategoryItems } from "../components/products/ProductCategories/ProductCategoryItems";
import { RoutingPath } from "../helpers/RoutingPath";

// style
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Seo
        title="E-dice Home page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />

      <>
        <Hero title="Welcome to Edice">
          <p>A store with love for roleplaying games.</p>
        </Hero>

        <div className={`${styles.home_wrapper} ${styles.home_wrapper_shop}`}>
          <div className={styles.home_wrapper_content}>
            <Link href={RoutingPath.Shop}>
              <a>
                <h2>Visit our Shop</h2>
              </a>
            </Link>
            <div className={styles.wrapper}>
              {ProductCategoryItems.map((category) => (
                <ProductCategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.home_wrapper}>
          <div className={styles.home_wrapper_content}>
            <h2>Join the Edice family</h2>
            <p>Make checkout easier, sign up and create an account!</p>
            <NavBtn link={RoutingPath.Register} btnText={"Register now"} />
          </div>
        </div>
      </>
    </>
  );
}
