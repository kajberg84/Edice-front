// imports
import { useContext } from 'react';
import Link from 'next/link';

// context
import { UserContext } from '../../../context/UserContext';

// components
import { Navbar } from '../navbar/Navbar';

// helpers
import { RoutingPath } from '../../../helpers/RoutingPath';

// Styles
import styles from './Header.module.scss';

export const UserHeader = () => {
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
        <p>Hello John</p>
        <Navbar navPosition="Top" />
      </div>
    </header>
  );
};
