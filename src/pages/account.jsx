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
import { AccountModal } from "../components/general/accountmodal/AccountModal";

// Helpers
import { RoutingPath } from "../helpers/RoutingPath";

// styles
import styles from "../styles/pages/Account.module.scss";

const Account = () => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);

  const updateSchema = yup
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

  //uppdtera account info
  const onApplyChanges = async (data) => {
    const updatedUser = {
      name: data.name,
      address: data.address,
      city: data.city,
      zipcode: data.zipcode,
      phone: data.phone,
      email: data.email,
      password: userData.password,
    };

    const response = await fetch(
      `https://edice-back.herokuapp.com/user/${userData.userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access_token}`,
        },
        body: JSON.stringify(updatedUser),
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(updateSchema),
  });

  // Delete account modal
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  const openModal = () => {
    setShowModal(true);
    lockScroll();
  };

  const closeModal = () => {
    setShowModal(false);
    unlockScroll();
  };

  const userData = user?.user;

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
          {user && <Hero title={`Hello ${userData.name}`} />}

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
                  defaultValue={userData?.name}
                />
                <p>{errors.name?.message}</p>
                <label htmlFor="address"> Address</label>
                <input
                  {...register("address")}
                  autoComplete="street-address"
                  type="text"
                  name="address"
                  placeholder="Address..."
                  defaultValue={userData?.address}
                />
                <p>{errors.address?.message}</p>
                <label htmlFor="city"> City</label>
                <input
                  {...register("city")}
                  autoComplete="city"
                  type="text"
                  name="city"
                  placeholder="City..."
                  defaultValue={userData?.city}
                />
                <p>{errors.city?.message}</p>
                <label htmlFor="zipcode"> Zipcode</label>
                <input
                  {...register("zipCode")}
                  autoComplete="postal-code"
                  type="number"
                  name="zipcode"
                  placeholder="Zipcode..."
                  defaultValue={userData?.zipcode}
                />
                <p>{errors.zipCode?.message}</p>

                <label htmlFor="phone">Phone</label>
                <input
                  {...register("phone")}
                  autoComplete="tel"
                  type="number"
                  name="phone"
                  placeholder="Phone..."
                  defaultValue={userData?.phone}
                />
                <p>{errors.phone?.message}</p>
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  autoComplete="email"
                  type="email"
                  name="email"
                  placeholder="Email..."
                  defaultValue={userData?.email}
                />
                <p>{errors.email?.message}</p>

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
              <button className="btn-primary" onClick={openModal}>
                Delete account
              </button>

              {showModal && <AccountModal onCloseModal={closeModal} />}
            </div>
          </Wrapper>
        </div>
      </AuthWrapper>
    </>
  );
};

export default Account;
