// Imports
import { useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// context
import { UserContext } from "../context/UserContext";

// components
import { Seo } from "../components/seo/Seo";
import { Wrapper } from "../components/layout/wrapper/Wrapper";
import { UnAuthWrapper } from "../components/layout/wrapper/UnAuthWrapper";

// helpers
import { RoutingPath } from "../helpers/RoutingPath";
import { getUser } from "../api/mockusers";
import { setLocalStorage } from "../utils/localStorageHandler";

// styles
import styles from "../styles/pages/Login.module.scss";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  // On submit
  const onSubmit = async (data) => {
    try {
      const responseUser = await getUser(data.email, data.password);

      if (!responseUser) {
        alert("Wrong email/ password or no user found");
        return;
      }

      setLocalStorage("edice-user", responseUser);
      setUser(responseUser);
    } catch (error) {
      console.log("Login: ", error);
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
                    {...register("email")}
                    placeholder="Type in your email"
                  />
                  <p>{errors.email?.message}</p>
                  <input
                    {...register("password")}
                    placeholder="Type in your password"
                    type="password"
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
