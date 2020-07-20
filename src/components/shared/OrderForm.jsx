import React from 'react'
import { Link } from 'react-router-dom'

const OrderForm = ({ order, handleSubmit, handleChange, cancelPath }) => {
    console.log('OrderForm', order)
  
  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        placeholder='Name of the Order'
        value={order.name}
        name="name"
        onChange={handleChange}
        />

        <label>Type</label>
        <input
        placeholder='Icecream or Milkshake?'
        value={order.type}
        name="type"
        onChange={handleChange}
        />

        <label>Flavor</label>
        <input
        placeholder='Flavor'
        value={order.flavor}
        name="flavor"
        onChange={handleChange}
        />

        <label>Size</label>
        <input
        placeholder='Size'
        value={order.size}
        name="size"
        onChange={handleChange}
        />

        <label>Holder</label>
        <input
        placeholder='Holder'
        value={order.holder}
        name="holder"
        onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <Link to={cancelPath}>
        <button>Cancel</button>
        </Link>
    </form>
    )
}

export default OrderForm