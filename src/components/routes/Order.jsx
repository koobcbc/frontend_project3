import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Layout from '../shared/Layout'
import apiUrl from  "../apiConfig"

const Order = (props) =>  {
  const [order,setOrder] = useState(null)

  const [isDeleted,setIsDeleted] = useState(false)

  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/orders/${props.match.params.id}`)
          console.log('orders - response', response)
          setOrder(response.data.order)

        } catch (err) {
          console.error(err)
        }
  
   }
    makeAPICall()
  }, [])

  const destroy = async () => {
    const response = await axios(
        {
      url: `${apiUrl}/items/${props.match.params.id}`,
      method: 'DELETE'
    }
    )
    setIsDeleted(true)
  }

    if (!order) {

      return <p>Loading...</p>
    }

    if (isDeleted) {
      return <Redirect to={
        { pathname: '/', state: { msg: 'Item succesfully deleted!' } }
      } />
    }

    return (
      <Layout>
        <h4>Order for {order.name}</h4> 
        <h4>Flavor: {order.flavor}</h4>
        {order.topping1 ? <h4>Topping 1: {order.topping1}</h4> : null}
        {order.topping2 ? <h4>Topping 2: {order.topping2}</h4> : null}
        {order.topping3 ? <h4>Topping 3: {order.topping3}</h4> : null}
        <button onClick={destroy}>Delete Order</button>
        <Link to={`/past-orders/${props.match.params.id}/edit`}>
          <button>Edit Order</button>
        </Link>
        <Link to="/past-orders">Back to all orders</Link>
      </Layout>
    )
}
export default Order
