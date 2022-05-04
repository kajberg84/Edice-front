// imports
import React from 'react';
import { useRouter } from 'next/router';

// context

// components
import { removeLocalStorage } from '../../../../utils/localStorageHandler';
import { NavbarItem } from './NavbarItem';

// helpers
import { RoutingPath } from '../../../../helpers/RoutingPath';
// import { NavbarItems } from './NavbarItems';

// Styles
import styles from './HeaderNavbar.module.scss';

export const HeaderNavbar = ({ navbarItems }) => {
  const router = useRouter();

  // Logout function
  const handleLogout = () => {
    removeLocalStorage('edice-user');
    setUser(null);
    router.push(RoutingPath.Login);
  };

  return (
    <>
      <nav className={styles.nav}>
        {navbarItems.map((item, index) => (
          <NavbarItem key={index} linkUrl={item.link} linkText={item.name} />
        ))}
      </nav>
    </>
  );
};
