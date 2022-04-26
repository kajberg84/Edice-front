import Head from 'next/head';
import Image from 'next/image';

// components
import { Seo } from '../components/seo/Seo';
import { AddToCartButton } from '../components/general/addToCartButton/AddToCartButton';
import { Cart } from '../components/general/cart/Cart';
import { Footer } from '../components/general/footer/Footer';
import { Header } from '../components/general/header/Header';
import { Hero } from '../components/general/hero/Hero';

// helpers
import { RoutingPath } from '../helpers/RoutingPath';

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
      </>
    </>
  );
}
