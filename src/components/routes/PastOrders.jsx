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
        <Link className="order-name "to={`/past-orders/icecream/${order._id}`}>Order for {order.name}</Link>
        <h5>Icecream Order</h5>
        <p>Flavor: {order.flavor}</p>
        {order.topping1 ? <p>Topping 1: {order.topping1}</p> : null}
        {order.topping2 ? <p>Topping 2: {order.topping2}</p> : null}
        {order.topping3 ? <p>Topping 3: {order.topping3}</p> : null}      
        <p>Size: {order.size}</p>
        <p>Holder: {order.holder}</p>
        <p>Price: {order.price}</p>
    </li>
  ));

  const MSordersArr = MSorders.map((order) => (
    <li key={order._id}>
        <Link className="order-name" to={`/past-orders/milkshake/${order._id}`}>Order for {order.name}</Link>
        <h5>Milkshake Order</h5>
        <p>Flavor: {order.flavor}</p>
        {order.topping1 ? <p>Topping 1: {order.topping1}</p> : null}
        {order.topping2 ? <p>Topping 2: {order.topping2}</p> : null}
        {order.topping3 ? <p>Topping 3: {order.topping3}</p> : null}
        <p>Size: {order.size}</p>
        <p>Price: {order.price}</p>
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

