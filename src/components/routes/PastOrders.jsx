import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from '../shared/Layout'

import apiUrl from  "../apiConfig"


const PastOrders = (props) => {
  console.log('PastOrder')
  const [ICorders, setICOrders] = useState([]);
  const [MSorders, setMSOrders] = useState([]);


  useEffect(() => {
    const makeAPICallIC = async () => {
      try {
        const response = await axios(`${apiUrl}/iceCream`);
        console.log("Orders - useEffect - response", response);
        setICOrders(response.data.iceCream);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICallIC();
  }, []);

  useEffect(() => {
    const makeAPICallMS = async () => {
      try {
        const response = await axios(`${apiUrl}/milkshakes`);
        console.log("Orders - useEffect - response", response);
        setMSOrders(response.data.milkshake);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICallMS();
  }, []);

  const ICordersArr = ICorders.map((order) => (
    <li key={order._id}>
      <Link to={`/past-orders/icecream/${order._id}`}>Order for {order.name}</Link>
      <h4>Icecream Order</h4>
      <h5>Flavor: {order.flavor}</h5>
      <h5>Toppings: {order.toppings}</h5>
      <h5>Size: {order.size}</h5>
      <h5>Holder: {order.holder}</h5>
      <h5>Price: {order.price}</h5>

    </li>
  ));

  const MSordersArr = MSorders.map((order) => (
    <li key={order._id}>
      <Link to={`/past-orders/milkshake/${order._id}`}>Order for {order.name}</Link>
      <h4>Milkshake Order</h4>
      <h5>Flavor: {order.flavor}</h5>
      <h5>Toppings: {order.toppings}</h5>
      <h5>Size: {order.size}</h5>
      <h5>Price: {order.price}</h5>
    </li>
  ));

  return (
    <>
    <Layout>
        <div className="pastOrder">
        <h4>PAST ORDERS</h4>
            <ul className="iceCreamOrder">{ICordersArr}</ul>
            <ul className="milkshakeOrder">{MSordersArr}</ul>
        </div>
    </Layout>
    </>
  );
};
export default PastOrders;

