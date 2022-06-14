// imports
import * as React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components
import { Seo } from "../components/seo/Seo";
import { Hero } from "../components/general/hero/Hero";
import { Wrapper } from "../components/layout/wrapper/Wrapper";
import { UnAuthWrapper } from "../components/layout/wrapper/UnAuthWrapper";

// helpers
import { RoutingPath } from "../helpers/RoutingPath";

// styles
import styles from "../styles/pages/Register.module.scss";

// Schema for formvalidating
const registerSchema = yup
  .object({
    name: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup.number().positive().integer().required(),
    phone: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    const createdUser = {
      name: data.name,
      address: data.address,
      city: data.city,
      zipcode: data.zipcode,
      phone: data.phone,
      email: data.email,
      password: data.confirmPassword,
    };

    const response = await fetch("https://edice-back.herokuapp.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdUser),
    });

    router.push(`/${RoutingPath.Login}`);
  };

  return (
    <>
      <Seo
        title="E-dice Register page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />

      <UnAuthWrapper>
        <div className={styles.register_container}>
          <Hero title="Sign Up to E-dice" />

          <Wrapper>
            <div className={styles.register_wrapper}>
              <form
                className={styles.register_form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <h3>Type in your information to register an account</h3>

                <input
                  {...register("name")}
                  placeholder="Type in your full name"
                />
                <p>{errors.name?.message}</p>
                <input
                  {...register("address")}
                  placeholder="Type in your address"
                />
                <p>{errors.adress?.message}</p>
                <input {...register("city")} placeholder="Type in your city" />
                <p>{errors.city?.message}</p>
                <input
                  {...register("zipcode")}
                  placeholder="Type in your zip code"
                />
                <p>{errors.zipCode?.message}</p>
                <input
                  {...register("phone")}
                  placeholder="Type in your phone number"
                />
                <p>{errors.phone?.message}</p>
                <input
                  {...register("email")}
                  placeholder="Type in your e-mail address"
                />
                <p>{errors.email?.message}</p>
                <input
                  {...register("password")}
                  placeholder="Choose a password"
                  type="password"
                />
                <p>{errors.password?.message}</p>

                <input
                  {...register("confirmPassword")}
                  placeholder="Confirm password"
                  type="password"
                />
                <p>{errors.confirmPassword?.message}</p>
                <button type="submit" className="formButton">
                  Create account
                </button>
              </form>
            </div>
          </Wrapper>
        </div>
      </UnAuthWrapper>
    </>
  );
}
