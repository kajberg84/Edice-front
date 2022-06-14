import React, { useContext } from 'react';

// Context
import { UserContext } from '../../../context/UserContext';

// styles
import styles from './AccountOrders.module.scss';

export const AccountOrders = () => {
  //   console.log(authToken);
  const { user } = useContext(UserContext);
  const [orders, setOrders] = React.useState([]);
  const [updatedOrders, setUpdatedOrders] = React.useState([]);

  console.log(user);

  React.useEffect(() => {
    const getOrders = async () => {
      const userEmail = user?.user.email;

      try {
        const response = await fetch(
          `https://edice-back.herokuapp.com/order/email/?email=${userEmail}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        );
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [user]);
  console.log(orders);

  React.useEffect(() => {
    setUpdatedOrders(orders);
  }, [orders]);

  const renderOrders = () => {
    for (let i = 0; i < orders.length; i++) {
      console.log(orders[i]);
    }
  };

  return (
    <div>
      {updatedOrders.length > 0 &&
        updatedOrders.map((order) => (
          <div className={styles.orderCard} key={order._id}>
            <p>Order id: {order._id}</p>
            <p>Total: {order.total}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
    </div>
  );
};
