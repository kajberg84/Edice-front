import { HeaderModalItem } from './header-modal-item/HeaderModalItem';
import { HeaderModalLogo } from './header-modal-logo/HeaderModalLogo';

// nextjs imports
import Image from 'next/image';

// icons
import closeIcon from '/public/icons/x-circle.svg';

// styles
import styles from './HeaderModal.module.scss';

// todo
// - implementera denna lösning, fixa in en closeIcon
// - mappa igenom rätt navItems

export const HeaderModal = ({ onCloseModal, headerItems }) => {
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
            src={closeIcon}
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
          </ul>
        </nav>
      </div>
    </div>
  );
};
