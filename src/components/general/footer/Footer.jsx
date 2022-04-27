// imports
import Link from 'next/link';

// components
import { Navbar } from '../navbar/Navbar';
import { ActiveLink } from '../../../utils/ActiveLink';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

// styles
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo}>
          <Link href={RoutingPath.Home}>
            <a>
              <img src="/logos/Edice_logo_side.svg" alt="E-Dice logo" />
            </a>
          </Link>
        </div>
        <Navbar navPosition="Bottom" isFooter="true" />
        <nav className={styles.footer_nav}>
          <ActiveLink
            linkUrl={RoutingPath.Terms}
            linkText="Terms and conditions"
            small="true"
          />
          <ActiveLink
            linkUrl={RoutingPath.Privacy}
            linkText="Privacy"
            small="true"
          />
        </nav>
      </div>
    </footer>
  );
};
