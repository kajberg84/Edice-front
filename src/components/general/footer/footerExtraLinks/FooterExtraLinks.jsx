import React from 'react';
import Link from 'next/link';

// imports
import { ActiveLink } from '../../../../utils/ActiveLink';

// styles
import styles from './FooterExtraLinks.module.scss';

export const FooterExtraLinks = ({ links }) => {
  return (
    <nav className={styles.nav}>
      {links.map((item) => {
        return (
          <ActiveLink
            key={item.id}
            linkUrl={item.link}
            linkText={item.title}
            small="true"
          />
        );
      })}
    </nav>
  );
};
