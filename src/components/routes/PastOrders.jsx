import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from '../shared/Layout'
import apiUrl from  "../apiConfig"

const PastOrders = (props) => {
  console.log('PastOrder')
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/ice-cream`);
        console.log("Orders - useEffect - response", response);
        setOrders(response.data.orders);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const ordersArr = orders.map((order) => (
    <li key={order._id}>
      <Link to={`/past-orders/${order._id}`}>Order for {order.name}</Link>
      <h5>Flavor: {order.flavor}</h5>
      <h5>Toppings: {order.toppings}</h5>
      <h5>Size: {order.size}</h5>
      {order.holder ? <h5>Holder: {order.holder}</h5> : null}
      <h5>Price: {order.price}</h5>

    </li>
  ));

  return (
    <>
    <Layout>
      <h4>PAST ORDERS</h4>
      <ul>{ordersArr}</ul>
    </Layout>
    </>
  );
};
export default PastOrders;

