import React, { useState } from "react";
import axios from "axios";

import OrderForm from "../shared/OrderForm";
import Layout from "../shared/Layout";
import apiUrl from '../apiConfig'

const NewOrder = (props) => {
    console.log('ItemCreate props', props)
  const [input, setInput] = useState({ flavor: "", holder: "", toppings: "", size: "", price: "" });
  const [item, setItem] = useState(null);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
  
    event.preventDefault();

    console.log("handleSubmit");
    axios({
      url: `${apiUrl}/orders`,
      method: "POST",
      data: input,
    })
      .then((res) => {
          setItem({ createdItem: res.data.item })
          props.history.push('/orders')
        })
      .catch(console.error);
  };

  return (
    <Layout>
        <h4>New Order</h4>  
        <OrderForm
        item={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
        />
    </Layout>
  );
};

export default NewOrder;