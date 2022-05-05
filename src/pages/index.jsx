// components
import { Seo } from '../components/seo/Seo';
import { Hero } from '../components/general/hero/Hero';
import { ProductsWrapper } from '../components/general/productsWrapper/ProductsWrapper';

// helpers
import { RoutingPath } from '../helpers/RoutingPath';

// style
import style from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <Seo
        title="E-dice Home page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />

      <>
        <Hero title="A store of dices">
          <p>
            All our dice sets contain one of each of these types of dice: d4,
            d6, d8, d10, d12, d20 and a d10 procentile dice.
          </p>
          <p>
            You can use them for roleplaying games like Dungeons and Dragons,
            Pathfinder, Call of Cthulhu, Coriolis and many more.
          </p>
        </Hero>
        <ProductsWrapper />
      </>
    </>
  );
}
