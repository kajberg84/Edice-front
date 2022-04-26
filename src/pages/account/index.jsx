import { Hero } from '../../components/general/hero/Hero';
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

// styles
import styles from './Account.module.scss';

const Account = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.account_container}>
      {user && <Hero title={`Hello ${user.fname}`} />}

      <div className={styles.account_wrapper}>
        <div className={styles.account_content}>
          <h2>Find some amazing dice sets in our shop</h2>
          <p>It is time to find out how you roll! </p>
          <p>
            We pride ourselves on our well balanced and beautiful dice. Check
            out our shop to get yours today!
          </p>
          <Link href="/">
            <a>
              <button className={styles.account_button}>Shop Dices</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
