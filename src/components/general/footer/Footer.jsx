// imports
import * as React from "react";
import Link from "next/link";

// components
import { FooterNavbar } from "./footerNavbar/FooterNavbar";
import { ActiveLink } from "../../../utils/ActiveLink";
import { FooterExtraLinks } from "./footerExtraLinks/FooterExtraLinks";

//context
import { UserContext } from "../../../context/UserContext";

// helpers
import { RoutingPath } from "../../../helpers/RoutingPath";
import { FooterNavItems, FooterExtraLinksItems } from "./FooterItems";

// styles
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { user, setUser } = React.useContext(UserContext);
  let navbarItems;
  if (user) {
    navbarItems = FooterNavItems.user;
  } else {
    navbarItems = FooterNavItems.guest;
  }
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
        <FooterNavbar navPosition="Bottom" navItems={navbarItems} />
        <FooterExtraLinks links={FooterExtraLinksItems} />
      </div>
    </footer>
  );
};
