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
          <img src="/logos/Edice_logo_side.svg" alt="E-Dice logo" />
        </div>
        <Navbar navPosition="Bottom" />
        <nav className={styles.footer_nav}>
          <ActiveLink
            linkUrl={RoutingPath.Terms}
            linkText="Terms and conditions"
          />
          <ActiveLink linkUrl={RoutingPath.Privacy} linkText="Privacy" />
        </nav>
      </div>
    </footer>
  );
};
