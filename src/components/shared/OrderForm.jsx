import React, { useState }from 'react'
import { Link } from 'react-router-dom'

const OrderForm = ({ order, handleSubmit, handleChange, cancelPath, handleSizeSelect, handleSelect }) => {



  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        placeholder='Name of the Order'
        value={order.name}
        name="name"
        onChange={handleChange}
        />


        <label>Flavor</label>
        <select
        value={order.flavor}
        name="flavor"
        onChange={handleSelect}
        >
        <option>Vanilla</option>
        <option>Chocolate</option>
        <option>Strawberry</option>
        <option>Pistachio</option>
        <option>Cookies and Cream</option>
        <option>Rocky Road</option>
        </select>

        <label>Toppings</label>
        <select value={order.toppings} name="toppings" onChange={handleSelect}>
        <option>Sprinkles</option>
        <option>Oreos</option>
        <option>Chocolate Syrup</option>
        </select>

        <label>Size</label>
        <select value={order.size} name="size" onChange={handleSizeSelect}>
          <option>small</option>
          <option>medium</option>
          <option>large</option>
        </select>


        <label>Holder</label>
        <select value={order.holder} name="holder" onChange={handleSelect}>
          <option>cone</option>
          <option>bowl</option>
        </select>


        <button type="submit">Submit</button>
        <Link to={cancelPath}>
        <button>Cancel</button>
        </Link>
    </form>
    )
}

export default OrderForm