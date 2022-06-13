import * as React from 'react';

import { HeaderModalItem } from './header-modal-item/HeaderModalItem';
import { HeaderModalLogo } from './header-modal-logo/HeaderModalLogo';

// nextjs imports
import Image from 'next/image';
import { useRouter } from 'next/router';

// icons
import closeIcon from '/public/icons/x-circle.svg';

// context
import { UserContext } from '../../../../context/UserContext';

// helpers
import { RoutingPath } from '../../../../helpers/RoutingPath';
import { removeLocalStorage } from '../../../../utils/localStorageHandler';

// styles
import styles from './HeaderModal.module.scss';

// todo
// - implementera denna lösning, fixa in en closeIcon
// - mappa igenom rätt navItems

export const HeaderModal = ({ onCloseModal, headerItems }) => {
  const { user, setUser } = React.useContext(UserContext);
  const router = useRouter();

  const handleLogout = () => {
    removeLocalStorage('edice-user');
    setUser(null);
    router.push(RoutingPath.Login);
    onCloseModal();
  };
  const signOutButton = (
    <button className={styles.header_modal_button} onClick={handleLogout}>
      Logout
    </button>
  );
  return (
    <div
      className={`${styles.header_modal_container}`}
      style={{ overflow: 'hidden' }}
    >
      <div className={`${styles.header_modal_wrapper}`}>
        <div className={`${styles.header_modal_top_section}`}>
          <HeaderModalLogo onCloseModal={onCloseModal} />
          <Image
            className={styles.icon}
            src="/icons/x-circle.svg"
            alt="close Icon"
            width={40}
            height={40}
            onClick={onCloseModal}
          />
        </div>
        <nav>
          <ul className={styles.list_container}>
            {headerItems.map((item) => {
              return (
                <HeaderModalItem
                  key={item.link}
                  navItem={item.name}
                  navItemUrl={item.link}
                  onCloseModal={onCloseModal}
                />
              );
            })}
            {user ? signOutButton : null}
          </ul>
        </nav>
      </div>
    </div>
  );
};
