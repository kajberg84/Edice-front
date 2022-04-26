import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { RoutingPath } from '../../../helpers/RoutingPath';
import { Navbar } from '../navbar/Navbar';
// import logo from '../../assets/images/Edice_logo_side.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo}>
          <img src="/logos/Edice_logo_side.svg" alt="E-Dice logo" />
        </div>
        <Navbar navPosition="Bottom" />
        <nav className={styles.footer_nav}>
          <Link className={styles.footer_nav_item} href={RoutingPath.Terms}>
            <a>Terms and conditions</a>
          </Link>
          <Link className={styles.footer_nav_item} href={RoutingPath.Privacy}>
            <a>Privacy</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};
