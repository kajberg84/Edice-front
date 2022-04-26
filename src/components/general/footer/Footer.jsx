// imports
import Link from 'next/link';

// components
import { Navbar } from '../navbar/Navbar';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

// styles
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo}>
          <img src="/logos/Edice_logo_side.svg" alt="E-Dice logo" />
        </div>
        <Navbar navPosition="Bottom" />
        <nav className={styles.footer_nav}>
          <Link href={RoutingPath.Terms}>
            <a className={styles.footer_nav_item}>Terms and conditions</a>
          </Link>
          <Link href={RoutingPath.Privacy}>
            <a className={styles.footer_nav_item}>Privacy</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};
