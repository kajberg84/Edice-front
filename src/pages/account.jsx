// Imports
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Context
import { UserContext } from "../context/UserContext";

// Components
import { Hero } from "../components/general/hero/Hero";
import { Seo } from "../components/seo/Seo";
import { Wrapper } from "../components/layout/wrapper/Wrapper";
import { AuthWrapper } from "../components/layout/wrapper/AuthWrapper";

// Helpers
import { RoutingPath } from "../helpers/RoutingPath";

// styles
import styles from "../styles/pages/Account.module.scss";

const Account = () => {
  const { user } = useContext(UserContext);

  const userSchema = yup
    .object({
      name: yup.string().required(),
      address: yup.string().required(),
      city: yup.string().required(),
      zipCode: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string(),
      confirmPassword: yup.string(),
    })
    .required();

  const onApplyChanges = () => {
    //TODO put request for update user
    console.log("code for Put request here");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(userSchema),
  });

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
                      Shop for Dice
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.account_wrapper}>
              <h2>Handle account information</h2>
              <form
                className={styles.account_form}
                onSubmit={handleSubmit(onApplyChanges)}
              >
                <label htmlFor="name"> Full name</label>
                <input
                  {...register("name")}
                  autoComplete="cc-name"
                  type="text"
                  name="name"
                  placeholder="Full name..."
                  defaultValue={user?.name}
                />
                <p>{errors.name?.message}</p>
                <label htmlFor="address"> Address</label>
                <input
                  {...register("address")}
                  autoComplete="street-address"
                  type="text"
                  name="address"
                  placeholder="Address..."
                  defaultValue={user?.address}
                />
                <p>{errors.address?.message}</p>
                <label htmlFor="city"> City</label>
                <input
                  {...register("city")}
                  autoComplete="city"
                  type="text"
                  name="city"
                  placeholder="City..."
                  defaultValue={user?.city}
                />
                <p>{errors.city?.message}</p>
                <label htmlFor="zipcode"> Zipcode</label>
                <input
                  {...register("zipCode")}
                  autoComplete="postal-code"
                  type="number"
                  name="zipcode"
                  placeholder="Zipcode..."
                  defaultValue={user?.zipCode}
                />
                <p>{errors.zipCode?.message}</p>

                <label htmlFor="phone">Phone</label>
                <input
                  {...register("phone")}
                  autoComplete="tel"
                  type="number"
                  name="phone"
                  placeholder="Phone..."
                  defaultValue={user?.phone}
                />
                <p>{errors.phone?.message}</p>
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  autoComplete="email"
                  type="email"
                  name="email"
                  placeholder="Email..."
                  defaultValue={user?.email}
                />
                <p>{errors.email?.message}</p>
                <label htmlFor="password">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder="password..."
                  defaultValue={user?.password}
                />
                <p>{errors.password?.message}</p>

                <label htmlFor="password">Confirm new password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password... only needed if you changed password above"
                />
                <p>{errors.password?.message}</p>
                <button type="submit" className="formButton">
                  Apply changes
                </button>
              </form>
            </div>
            <div className={styles.account_wrapper}>
              <h2>Your orders</h2>
              <p>List of orders here fetch from order endpoint</p>
            </div>
            <div className={styles.account_wrapper}>
              <h2>Delete account</h2>
              <p>
                Be aware! Deleting your account means you can no longer log in
                or see your orders online.
              </p>
              <button className="btn-primary">Delete account</button>
            </div>
          </Wrapper>
        </div>
      </AuthWrapper>
    </>
  );
};

export default Account;
