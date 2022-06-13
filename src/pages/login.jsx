// Imports

import React from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/router';

// context
import { UserContext } from "../context/UserContext";

// components
import { Seo } from "../components/seo/Seo";
import { Wrapper } from "../components/layout/wrapper/Wrapper";
import { UnAuthWrapper } from "../components/layout/wrapper/UnAuthWrapper";

// helpers

import { RoutingPath } from '../helpers/RoutingPath';

// styles
import styles from "../styles/pages/Login.module.scss";

export default function Login() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // const login = (data) => {
  //   return new Promise((res) => {
  //     setUser(data);
  //     window.localStorage.setItem('edice-user', JSON.stringify(data));
  //     res();
  //   });
  // };


  // On submit
  const onFormSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };


    try {
      setLoading(true);
      // Logga in användaren i backenden
      const response = await fetch('https://edice-back.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });


      const data = await response.json();


      if (response.status === 200) {
        window.localStorage.setItem('edice-user', JSON.stringify(data));
        setUser(data);
        // login(data).then(() => {
        //   router.push(RoutingPath.Account);
        // });

        setTimeout(() => {
          router.push(RoutingPath.Account);
        }, 300);
      }
    } catch (error) {
      setError(true);
      setErrorMessage('Wrong email or password');
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="E-dice Login page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />

      <>
        <UnAuthWrapper>
          <Wrapper>
            <div className={styles.login_container}>
              <div className={styles.login_wrapper}>
                <h2>Sign In to E-dice</h2>
                <form
                  onSubmit={(event) => onFormSubmit(event)}
                  className={styles.login_form}
                >
                  <input
                    placeholder="Type in your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Type in your password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className={`${styles.loginbutton} formButton`}
                  >
                    {!loading && 'Sign in'}
                    {loading && 'Signing in...'}
                  </button>
                </form>
                {error && <p style={{ color: 'red' }}>{errorMessage}</p>}
              </div>
            </div>
          </Wrapper>
        </UnAuthWrapper>
      </>
    </>
  );
}
