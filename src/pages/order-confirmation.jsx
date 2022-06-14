// imports
import { useContext, useState, useEffect } from "react";

// context
import { CartContext } from "../context/CartContext";

// components
import { Hero } from "../components/general/hero/Hero";
import { ProductCardSmall } from "../components/general/productcardsmall/ProductCardSmall";
import { Seo } from "../components/seo/Seo";
import { Wrapper } from "../components/layout/wrapper/Wrapper";

// helpers
import { RoutingPath } from "../helpers/RoutingPath";

// styles
import styles from "../styles/pages/OrderConfirmation.module.scss";

const OrderConfirmation = () => {
  const [order, setOrder] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/order/62a873f0b6f70c47ae0ff431")
      .then((res) => res.json())
      .then((thisOrder) => setOrder(thisOrder));
  }, []);

  useEffect(() => {
    setProductIds(order.products);
    setUrls(
      productIds?.map(
        (productId) => `http://localhost:5001/product/${productId}`
      )
    );
  }, [order, productIds]);
  //const products = order?.products;
  const fetchAll = async (urls) => {
    fetch(urls[0])
      .then((res) => res.json())
      .then((data) => console.log(data));
    //const res = await Promise.all(urls?.map((u) => fetch(u)));
    //const jsons = await Promise.all(res.map((r) => r.json()));
    console.log(urls);
  };
  /* useEffect(() => {
    if (urls) {
      fetchAll(urls);
    }
  }, [urls]); */

  /*  useEffect(() => {
    const productDetails = productIds?.map((productId) =>
      fetch(`http://localhost:5001/product/${productId}`).then((res) =>
        res.json()
      )
    ); */
  /*  setTimeout(() => {
      Promise.all(productDetails).then((data) => {
        setOrderProducts(data);
      });
    }, [300]); */

  /*    console.log(productDetails);
  }, [productIds]); */

  console.log(order);

  return (
    <>
      <Seo
        title="E-dice Order Confirmation page"
        description="Lorem ipsum dolor sit amtet"
        image="/vercel.svg"
        pageUrl={RoutingPath.home}
      />
      <div className={styles.order_confirmation_container}>
        <Hero title={"Order confirmation"} />
        <Wrapper>
          <div className={styles.order_confirmation_wrapper}>
            <h2>Thank you for the order</h2>
            <p>We will process your order as soon as possible.</p>
            <div className={styles.order_confirmation_summary}>
              <h3>Order Summary:</h3>
              <h4 className={styles.order_confirmation_heading4}>
                Products ordered:
              </h4>
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
