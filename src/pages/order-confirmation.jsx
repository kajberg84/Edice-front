// ======== Saker som behöver fixas ========= //
// Vid köp av flera av samma produkt så fungerar inte quantity, jag har gjort en simpel lösning där jag döljer quantity i på denna sidan. / Mattis

// imports
import * as React from 'react';

// components
import { Hero } from '../components/general/hero/Hero';
import { ProductCardSmall } from '../components/general/productcardsmall/ProductCardSmall';
import { Seo } from '../components/seo/Seo';
import { Wrapper } from '../components/layout/wrapper/Wrapper';

// helpers
import { RoutingPath } from '../helpers/RoutingPath';

// styles
import styles from '../styles/pages/OrderConfirmation.module.scss';

const OrderConfirmation = () => {
  const [order, setOrder] = React.useState([]);
  const [orderedProducts, setOrderedProducts] = React.useState([]);
  const [urls, setUrls] = React.useState([]);

  // Fetcha ordern från databasen och lägger till i state.
  React.useEffect(() => {
    const orderId = window.localStorage.getItem('orderId');
    const getOrderData = async () => {
      const response = await fetch(
        'https://edice-back.herokuapp.com/order/' + orderId
      );
      const data = await response.json();
      setOrder(data);
      console.log('Grund usefeect kördes');
    };
    getOrderData();
  }, []);

  // Fixa så att url för produkterna byggs upp.
  React.useEffect(() => {
    const productIdList = order.products?.map(
      (productID) => `https://edice-back.herokuapp.com/product/${productID}`
    );
    setUrls(productIdList);
  }, [order]);

  // Fetcha in alla beställda produkter genom en loop.
  React.useEffect(() => {
    const getProducts = async () => {
      const productList = [];
      for (let i = 0; i < urls?.length; i++) {
        const response = await fetch(urls[i]);
        const data = await response.json();
        productList.push(data);
      }
      setOrderedProducts(productList);
    };
    getProducts();
  }, [urls]);

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
        <Wrapper>
          <div className={styles.order_confirmation_wrapper}>
            <h2>Thank you for the order</h2>
            <p>We will process your order as soon as possible.</p>
            <div className={styles.order_confirmation_summary}>
              <h3>Order Summary:</h3>
              <h4 className={styles.order_confirmation_heading4}>
                Products ordered:
              </h4>
              {orderedProducts?.map((product) => (
                <>
                  <ProductCardSmall
                    title={product.title}
                    price={product.price}
                    description={product.description}
                  />
                </>
              ))}
            </div>
            <div className={styles.total_wrapper}>
              <p className={styles.total}> Total: </p>
              <p className={styles.total}>{order?.total} $</p>
            </div>
            <h4 className={styles.order_confirmation_heading4}>
              Delivery Info
            </h4>

            <div>
              <ul>
                <li>Name: {order?.name}</li>
                <li>Address: {order?.address} </li>
                <li>Zip Code: {order?.zipcode}</li>
                <li>City: {order?.city} </li>
                <li>Phone: {order?.phone}</li>
                <li>Email: {order?.email}</li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default OrderConfirmation;
