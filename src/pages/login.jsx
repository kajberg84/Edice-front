// Imports
import React from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// context
import { UserContext } from '../context/UserContext';

// components
import { Seo } from '../components/seo/Seo';
import { Wrapper } from '../components/layout/wrapper/Wrapper';
import { UnAuthWrapper } from '../components/layout/wrapper/UnAuthWrapper';

// helpers
import { RoutingPath } from '../helpers/RoutingPath';
import { getUser } from '../api/mockusers';
import { setLocalStorage } from '../utils/localStorageHandler';

// styles
import styles from '../styles/pages/Login.module.scss';

// Schema for formvalidating
const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // console.log(email, password);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  async function postAxios(userData, URL) {
    const sendUrl = URL;
    try {
      const response = await axios({
        url: sendUrl,
        method: 'POST',
        data: {
          email: userData.email,
          password: userData.password,
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      console.log('Error i post axios', error);
    }
  }

  // Handling response from Login
  function handleRespLogin(tokens) {
    const parsedJwt = jwt_decode(tokens.access_token);
    setUser(parsedJwt);
    router.push('/');
  }

  // handle login
  async function handleLogin(userData) {
    const responseLogin = await postAxios(
      { userData },
      `https://edice-back.herokuapp.com/login`
    );
    if (responseLogin) {
      handleRespLogin(responseLogin);
    } else {
      console.log('login response false, fel lösen / user');
      //visa error
      setShowErrorStatus(true);
    }
  }

  // On submit
  const onSubmit = async (data) => {
    try {
      // const responseUser = await getUser(data.email, data.password);
      user = {
        email: email,
        password: password,
      };
      console.log('user:', user);
      handleLogin(user);

      if (!responseUser) {
        alert('Wrong email/ password or no user found');
        return;
      }

      setLocalStorage('edice-user', responseUser);
      setUser(responseUser);
    } catch (error) {
      console.log('Login: ', error);
    }

    router.push(`/${RoutingPath.Account}`);
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
                  onSubmit={handleSubmit(onSubmit)}
                  className={styles.login_form}
                >
                  <input
                    {...register('email')}
                    placeholder="Type in your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p>{errors.email?.message}</p>
                  <input
                    {...register('password')}
                    placeholder="Type in your password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className={`${styles.loginbutton} formButton`}
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </Wrapper>
        </UnAuthWrapper>
      </>
    </>
  );
}
