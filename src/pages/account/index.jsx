// Imports
import Link from 'next/link';
import { useContext } from 'react';

// Context
import { UserContext } from '../../context/UserContext';

// Components
import { Hero } from '../../components/general/hero/Hero';
import { Seo } from '../../components/seo/Seo';

// Helpers
import { RoutingPath } from '../../helpers/RoutingPath';

// styles
import styles from './Account.module.scss';

const Account = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Seo
        title="E-dice Order Confirmation page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />

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
    </>
  );
};

export default Account;
