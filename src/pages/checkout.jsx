// imports
import { useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// context
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

// components
import { Seo } from "../components/seo/Seo";
import { Hero } from "../components/general/hero/Hero";
import { ProductCardSmall } from "../components/general/productcardsmall/ProductCardSmall";
import { Wrapper } from "../components/layout/wrapper/Wrapper";

// helpers
import { RoutingPath } from "../helpers/RoutingPath";

// styles
import styles from "../styles/pages/Checkout.module.scss";

// Schema for formvalidating
const shippingSchema = yup
  .object({
    name: yup.string().required(),
    address: yup.string().required(),
    zipcode: yup.string().required(),
    city: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

export default function Checkout() {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const router = useRouter();

  //Functions for adding prices for a total.
  const multiply = (a, b) => {
    return a * b;
  };

  const allPrices = cart.map((product) =>
    multiply(product.price, product.quantity)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(shippingSchema),
  });

  // Submit order function
  const onConfirmOrder = async (data) => {
    const totalPrice =
      allPrices.length > 0
        ? allPrices.reduce((total, price) => total + price)
        : 0;

    const createdOrder = {
      products: cart,
      total: totalPrice,
      name: data.name,
      address: data.address,
      city: data.city,
      zipcode: data.zipcode,
      phone: data.phone,
      email: data.email,
      status: "ordered",
    };

    console.log(createdOrder);

    const response = await fetch("https://edice-back.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdOrder),
    });

    const newOrder = await response.json();
    console.log(newOrder._id);

    router.push(RoutingPath.OrderConfirmation);
  };

  const userData = user?.user;

  return (
    <>
      <Seo
        title="E-dice Checkout page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />

      <>
        <Hero title="Checkout" />
        <Wrapper>
          <div className={styles.checkout_wrapper}>
            <div className={styles.checkout_product_list}>
              <div className={styles.checkout_product_cart_display}>
                <h2>Your cart</h2>
                {cart.map((product, index) => (
                  <ProductCardSmall
                    key={index}
                    title={product.title}
                    description={product.description}
                    quantity={product.quantity}
                    price={product.price * product.quantity}
                  />
                ))}
              </div>

              <div className={styles.total_wrapper}>
                <p className={styles.total}> Total: </p>
                <p className={styles.total}>
                  {allPrices.length > 0
                    ? allPrices.reduce((total, price) => total + price)
                    : "0"}
                  $
                </p>
              </div>
            </div>
            <form
              className={styles.checkout_form}
              onSubmit={handleSubmit(onConfirmOrder)}
            >
              {userData ? (
                <h3>
                  {userData.name}, controll your information to make a order
                </h3>
              ) : (
                <h3>Type in your information to make a order</h3>
              )}

              <label>Full Name</label>
              <input
                {...register("name")}
                autoComplete="cc-name"
                placeholder="Full name..."
                defaultValue={userData?.name}
              />
              <p>{errors.name?.message}</p>
              <label>Adress</label>
              <input
                {...register("address")}
                autoComplete="street-address"
                placeholder="Address..."
                defaultValue={userData?.address}
              />
              <p>{errors.address?.message}</p>
              <label>Zip Code</label>
              <input
                {...register("zipcode")}
                autoComplete="postal-code"
                placeholder="Zip code..."
                defaultValue={userData?.zipcode}
              />
              <p>{errors.zipcode?.message}</p>
              <label>City</label>
              <input
                {...register("city")}
                autoComplete="city"
                placeholder="City..."
                defaultValue={userData?.city}
              />
              <p>{errors.city?.message}</p>
              <label>Phone</label>
              <input
                {...register("phone")}
                autoComplete="tel"
                placeholder="Phone number..."
                defaultValue={userData?.phone}
              />
              <p>{errors.phone?.message}</p>
              <label>E-mail</label>
              <input
                {...register("email")}
                autoComplete="email"
                placeholder="E-mail..."
                defaultValue={userData?.email}
              />
              <p>{errors.email?.message}</p>
              <button type="submit" className="formButton">
                Confirm order
              </button>
            </form>
          </div>
        </Wrapper>
      </>
    </>
  );
}
