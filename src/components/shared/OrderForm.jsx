import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const OrderForm = ({ order, handleSubmit, handleChange, cancelPath, handleSizeSelect, handleSelect, path }) => {



  return (
    <form onSubmit={handleSubmit} className="form">

        <div className="input">
        <label>Name</label><br/>
        <input
        placeholder='Name of the Order'
        value={order.name}
        name="name"
        onChange={handleChange}
        />
        </div>


        <div className="input">
        <label>Flavor</label><br/>
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
        </div>


        <div className="input">
        <label>Toppings</label><br/>
        <select value={order.toppings} name="toppings" onChange={handleSelect}>
        <option>Sprinkles</option>
        <option>Oreos</option>
        <option>Chocolate Syrup</option>
        </select>
        </div>


        <div className="input">
        <label>Size</label><br/>
        <select value={order.size} name="size" onChange={handleSizeSelect}>
          <option>small</option>
          <option>medium</option>
          <option>large</option>
        </select>
        </div>

        {path==="/order-icecream" ? 
        <div className="input">
        <label>Holder</label><br/>
        <select value={order.holder} name="holder" onChange={handleSelect}>
          <option>cone</option>
          <option>bowl</option>
        </select>
        </div>
        : null }


        <button type="submit">Submit</button>
        <Link to={cancelPath}>
        <button>Cancel</button>
        </Link>
    </form>
    )
}

export default OrderForm