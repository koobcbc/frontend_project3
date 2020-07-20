import React, { useState } from "react";
import axios from "axios";

import ItemForm from "../shared/ItemForm";
import Layout from "../shared/Layout";
import apiUrl from '../../apiConfig'

const NewOrder = (props) => {
    console.log('ItemCreate props', props)
  const [input, setInput] = useState({ title: "", link: "" });
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
      url: `${apiUrl}/items`,
      method: "POST",
      data: input,
    })
      .then((res) => {
          setItem({ createdItem: res.data.item })
          props.history.push('/items')
        })
      .catch(console.error);
  };

  return (
    <Layout>
        <h4>New Order</h4>  
        <ItemForm
        item={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
        />
    </Layout>
  );
};

export default NewOrder;