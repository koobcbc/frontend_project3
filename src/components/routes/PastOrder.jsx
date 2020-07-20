import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from '../shared/Layout'
import apiUrl from '../../apiConfig'

const PastOrder = (props) => {
  console.log('PastOrder')
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/orders`);
        console.log("Orders - useEffect - response", response);
        setItems(response.data.orders);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const ordersArr = orders.map((order) => (
    <li key={order._id}>
      <Link to={`/orders/${order._id}`}>{order.title}</Link>
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

export default PastOrder;
