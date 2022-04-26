///// ==== Ej refaktoriserad bara grund uppsatt


// components
import { Seo } from '../../components/seo/Seo';
import { Hero } from '../../components/general/hero/Hero';

// helpers
import { RoutingPath } from '../../helpers/RoutingPath';

// styles
import styles from './Register.module.scss';

export default function Register() {
  return (
    <>
      <Seo
        title="E-dice Home page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />

      <>
        <Hero title="Register"></Hero>
        <div className={styles.regiser_wrapper}></div>
      </>
    </>
  );
}
