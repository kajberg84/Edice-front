import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { RoutingPath } from '../../helpers/RoutingPath';

import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
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
  );
}
