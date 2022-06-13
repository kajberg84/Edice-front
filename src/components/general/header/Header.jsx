// imports
import * as React from "react";
import Link from "next/link";

// context
import { UserContext } from "../../../context/UserContext";

// components
import { HeaderNavbar } from "./navbar/HeaderNavbar";
import { HeaderModal } from "./headerModal/HeaderModal";
import { HeaderCart } from "./headerCart/HeaderCart";

// helpers
import { RoutingPath } from "../../../helpers/RoutingPath";
import { NavbarItems } from "./navbar/NavbarItems";

// icons
import { MenuIcon } from "@heroicons/react/outline";

// Styles
import styles from "./Header.module.scss";

export const Header = () => {
  const { user } = React.useContext(UserContext);

  const [showModal, setShowModal] = React.useState(false);
  const [userLevel, setUserLevel] = React.useState(1);
  const [navItems, setNavItems] = React.useState(NavbarItems.guest);

  // lockScroll kan brytas ut till en custom hook
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  const openModal = () => {
    setShowModal(true);
    lockScroll();
  };

  const closeModal = () => {
    setShowModal(false);
    unlockScroll();
  };

  React.useEffect(() => {
    // const ediceUser = window.localStorage.getItem('edice-user');
    if (user) {
      setNavItems(NavbarItems.user);
    } else {
      setNavItems(NavbarItems.guest);
    }
  }, [user]);

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
        <div className={styles.flex}>
          <HeaderNavbar navbarItems={navItems} />
          <HeaderCart navPosition="Top" />
          <div className={styles.mobile}>
            <MenuIcon className="menu-icon" onClick={openModal} />
            {showModal && (
              <HeaderModal onCloseModal={closeModal} headerItems={navItems} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
