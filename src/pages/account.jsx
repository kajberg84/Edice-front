// Imports
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

// Context
import { UserContext } from '../context/UserContext';

// Components
import { Hero } from '../components/general/hero/Hero';
import { Seo } from '../components/seo/Seo';
import { Wrapper } from '../components/layout/wrapper/Wrapper';
import { AuthWrapper } from '../components/layout/wrapper/AuthWrapper';

// Helpers
import { RoutingPath } from '../helpers/RoutingPath';

// styles
import styles from '../styles/pages/Account.module.scss';

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

      <AuthWrapper>
        <div className={styles.account_container}>
          {user && <Hero title={`Hello ${user.fname}`} />}

          <Wrapper>
            <div className={styles.account_wrapper}>
              <div className={styles.account_content}>
                <h2>Find some amazing dice sets in our shop</h2>
                <p>It is time to find out how you roll! </p>
                <p>
                  We pride ourselves on our well balanced and beautiful dice.
                  Check out our shop to get yours today!
                </p>
                <Link href="/">
                  <a>
                    <button className={styles.account_button}>
                      Shop Dices
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </Wrapper>
        </div>
      </AuthWrapper>
    </>
  );
};

export default Account;
