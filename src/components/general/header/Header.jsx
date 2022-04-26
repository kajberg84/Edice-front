import React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import { RoutingPath } from '../../../helpers/RoutingPath';
import { Navbar } from '../navbar/Navbar';
import { UserContext } from '../../../context/UserContext';
// Styles
import styles from './Header.module.scss';

// Images
// import logo from '../../assets/images/Edice_full_logo.svg';

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Link href={RoutingPath.Home}>
            <a>
              <img
                src="/logos/Edice_full_logo.svg"
                alt="E-Dice logo"
                className={styles.header_logo}
              />
            </a>
          </Link>
        </div>
        {user ? <p>Hello {user.fname}</p> : <p>Guest</p>}
        <Navbar navPosition="Top" />
      </div>
    </header>
  );
};
