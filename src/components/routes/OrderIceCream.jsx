import React, { useState } from "react";
import axios from "axios";

import OrderForm from "../shared/OrderForm";
import Layout from "../shared/Layout";
import apiUrl from "../apiConfig";

const OrderIceCream = (props) => {
   // console.log('ItemCreate props', props)
  const [input, setInput] = useState({ flavor: "", holder : "", topping1: "", topping2: "", topping3: "", size: "", price:"" , paid:false });
  const [item, setItem] = useState(null);

const handleSelect = event => {
  setInput({
    ...input,
    [event.target.name]: event.target.value
  })
}

const handleSizeSelect = event =>{
  if (event.target.value ==='small'){
    setInput({
      ...input,
       size: 'small',
       price: 5
     });
  }else if(event.target.value ==='medium'){
    setInput({
      ...input,
       size: 'medium',
       price: 6
     });
  }else{
    setInput({
      ...input,
       size: 'large',
       price: 7
     });
  }
}

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
     setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit",input);
    axios({
      url: `${apiUrl}/icecream`,
      method: "POST",
      data: input,
    })
      .then((res) => {
          setItem({ createdItem: res.data.item })
          props.history.push('/icecream')
        })
      .catch(console.error);
  };

  return (
    <Layout>
        <h4>Order Ice Cream</h4>  
        <OrderForm
        order={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSizeSelect={handleSizeSelect}
        handleSelect={handleSelect}
        setInput={setInput}
        path={props.location.pathname}
        cancelPath="/"
        />
    </Layout>
  );
};

export default OrderIceCream;