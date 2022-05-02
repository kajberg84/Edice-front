import { RoutingPath } from '../../../../../helpers/RoutingPath';
import Link from 'next/link';

// styles
import styles from './HeaderModalLogo.module.scss';

export const HeaderModalLogo = ({ onCloseModal }) => {
  return (
    <>
      <Link href={RoutingPath.Home}>
        <a onClick={onCloseModal}>
          <img
            className={styles.logo}
            src="/logos/Edice_full_logo.svg"
            alt="E-dice"
          />
        </a>
      </Link>
    </>
  );
};
