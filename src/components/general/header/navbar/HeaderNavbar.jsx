// imports
import * as React from 'react';
import { useRouter } from 'next/router';

// context
import { UserContext } from '../../../../context/UserContext';

// components
import { removeLocalStorage } from '../../../../utils/localStorageHandler';
import { NavbarItem } from './NavbarItem';

// helpers
import { RoutingPath } from '../../../../helpers/RoutingPath';
import { NavbarItems } from './NavbarItems';

// Styles
import styles from './HeaderNavbar.module.scss';

export const HeaderNavbar = ({}) => {
  const router = useRouter();
  const { user, setUser } = React.useContext(UserContext);
  const [navItems, setNavItems] = React.useState(NavbarItems.guest);

  React.useEffect(() => {
    // const ediceUser = window.localStorage.getItem('edice-user');
    if (user) {
      setNavItems(NavbarItems.user);
    } else {
      setNavItems(NavbarItems.guest);
    }
  }, [user]);

  // Logout function
  const handleLogout = () => {
    removeLocalStorage('edice-user');
    setUser(null);
    router.push(RoutingPath.Login);
  };
  const signOutButton = (
    <button className={styles.nav_button} onClick={handleLogout}>
      Logout
    </button>
  );

  return (
    <>
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <NavbarItem key={index} linkUrl={item.link} linkText={item.name} />
        ))}
        {user ? signOutButton : null}
      </nav>
    </>
  );
};
