import Head from 'next/head';
import Image from 'next/image';

// components
import { Seo } from '../components/seo/Seo';

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

      <main>
        <h1>Edice startsida</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </main>
    </>
  );
}
