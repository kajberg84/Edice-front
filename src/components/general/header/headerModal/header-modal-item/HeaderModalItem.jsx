import Link from 'next/link';

// styles
import styles from './HeaderModalItem.module.scss';

export const HeaderModalItem = ({ navItem, navItemUrl, onCloseModal }) => {
  return (
    <li className={styles.list_item}>
      <Link href={navItemUrl}>
        <a onClick={onCloseModal}>{navItem}</a>
      </Link>
    </li>
  );
};
