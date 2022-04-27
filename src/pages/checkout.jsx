// imports
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// context
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';

// components
import { Seo } from '../components/seo/Seo';
import { Hero } from '../components/general/hero/Hero';
import { ProductCardSmall } from '../components/general/productcardsmall/ProductCardSmall';

// helpers
import { RoutingPath } from '../helpers/RoutingPath';

// styles
import styles from '../styles/pages/Checkout.module.scss';

// Schema for formvalidating
const shippingSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
    zipCode: yup.string().required(),
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

  // Submit order function
  const onSubmit = (values) => {
    // Denna behöver refaktoriseras så att den följer next routern alternativt att ändra denna helt och inte jobba med url parametrar
    router.push(`${RoutingPath.OrderConfirmation}`);
    console.log(
      'your order with details:' + JSON.stringify(values) + ' is confirmed'
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(shippingSchema),
  });
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
                  : '0'}{' '}
                $
              </p>
            </div>
          </div>
          <form
            className={styles.checkout_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            {user ? (
              <h3>{user.fname}, controll your information to make a order</h3>
            ) : (
              <h3>Type in your information to make a order</h3>
            )}

            <label>First Name</label>
            <input
              {...register('firstName')}
              autoComplete="given-name"
              placeholder="First name..."
              defaultValue={user?.fname}
            />
            <p>{errors.firstName?.message}</p>

            <label>Last Name</label>
            <input
              {...register('lastName')}
              autoComplete="family-name"
              placeholder="Last name..."
              defaultValue={user?.lname}
            />
            <p>{errors.lastName?.message}</p>
            <label>Adress</label>
            <input
              {...register('address')}
              autoComplete="street-address"
              placeholder="Address..."
              defaultValue={user?.adress}
            />
            <p>{errors.address?.message}</p>
            <label>Zip Code</label>
            <input
              {...register('zipCode')}
              autoComplete="postal-code"
              placeholder="Zip code..."
              defaultValue={user?.zipCode}
            />
            <p>{errors.zipCode?.message}</p>
            <label>City</label>
            <input
              {...register('city')}
              autoComplete="city"
              placeholder="City..."
              defaultValue={user?.city}
            />
            <p>{errors.city?.message}</p>
            <label>Phone</label>
            <input
              {...register('phone')}
              autoComplete="tel"
              placeholder="Phone number..."
              defaultValue={user?.phone}
            />
            <p>{errors.phone?.message}</p>
            <label>E-mail</label>
            <input
              {...register('email')}
              autoComplete="email"
              placeholder="E-mail..."
              defaultValue={user?.email}
            />
            <p>{errors.email?.message}</p>
            <button type="submit" className="formButton">
              Confirm order
            </button>
          </form>
        </div>
      </>
    </>
  );
}
