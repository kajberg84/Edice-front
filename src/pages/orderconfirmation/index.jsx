// imports
import { useContext, useState, useEffect } from 'react';

// context
import { CartContext } from '../../context/CartContext';

// components
import { Hero } from '../../components/general/hero/Hero';
import { ProductCardSmall } from '../../components/general/productcardsmall/ProductCardSmall';
import { Seo } from '../../components/seo/Seo';

// helpers
import { RoutingPath } from '../../helpers/RoutingPath';

// styles
import styles from './OrderConfirmation.module.scss';

const OrderConfirmation = () => {
  const { cart, setCart } = useContext(CartContext);
  const [order, setOrder] = useState(cart);

  const { firstname, lastname, address, zipcode, city, phone, email } = {
    firstname: 'John',
    lastname: 'Doe',
    address: '123 Main St',
    zipcode: '12345',
    city: 'New York',
    phone: '1234567890',
    email: 'john@doe.gmail.com',
  };

  //Functions for adding prices for a total.
  const multiply = (a, b) => {
    return a * b;
  };

  const allPrices = order.map((product) =>
    multiply(product.price, product.quantity)
  );

  useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <>
      <Seo
        title="E-dice Order Confirmation page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />
      <div className={styles.order_confirmation_container}>
        <Hero title={'Order confirmation'} />
        <div className={styles.order_confirmation_wrapper}>
          <h2>Thank you for the order</h2>
          <p>We will process your order as soon as possible.</p>
          <div className={styles.order_confirmation_summary}>
            <h3>Order Summary:</h3>
            <h4 className={styles.order_confirmation_heading4}>
              Products ordered:
            </h4>
            {order.map((product, index) => (
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
          <h4 className={styles.order_confirmation_heading4}>Delivery Info</h4>
          {firstname && (
            <div>
              <ul>
                <li>
                  Name: {firstname}, {lastname}
                </li>
                <li>Address: {address}</li>
                <li>Zip Code: {zipcode}</li>
                <li>City: {city}</li>
                <li>Phone: {phone}</li>
                <li>Email: {email}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
