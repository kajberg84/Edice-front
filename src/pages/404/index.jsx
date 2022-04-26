// imports
import Link from 'next/link';

// components
import { Seo } from '../../components/seo/Seo';

// helpers
import { RoutingPath } from '../../helpers/RoutingPath';

// styles
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <>
      <Seo
        title="E-dice - page not found"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />
      <div className={styles.notfound_wrapper}>
        <div className={styles.notfound_img_wrapper}>
          <img
            className={styles.notfound_img}
            src="/images/notfound.svg"
            alt="Page Not Found"
          />
        </div>
        <div className={styles.notfound_text_wrapper}>
          <h1>Page not Found - 404</h1>
          <Link href={RoutingPath.Home}>
            <a className={styles.notfound_button}>Go back to the homepage</a>
          </Link>
        </div>
      </div>
    </>
  );
}
