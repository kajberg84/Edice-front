// Imports
import React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';

// context
import { UserContext } from "../context/UserContext";

// components
import { Seo } from "../components/seo/Seo";
import { Wrapper } from "../components/layout/wrapper/Wrapper";
import { UnAuthWrapper } from "../components/layout/wrapper/UnAuthWrapper";

// helpers
import { RoutingPath } from "../helpers/RoutingPath";

// styles
import styles from "../styles/pages/Login.module.scss";

export default function Login() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // On submit
  const onFormSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    // Logga in användaren i backenden
    const response = await fetch("https://edice-back.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.status === 200) {
      window.localStorage.setItem("edice-user", JSON.stringify(data));
      setUser(data);

      setTimeout(() => {
        router.push(RoutingPath.Account);
      }, 300);
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
