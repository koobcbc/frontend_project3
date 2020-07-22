import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Layout from '../shared/Layout'
import apiUrl from '../apiConfig'

const MilkshakeOrder = (props) =>  {
    const [order,setOrder] = useState(null)
    const [isDeleted,setIsDeleted] = useState(false)
    const [updatedOrder, setUpdatedOrder] = useState({})
    const [isUpdated,setIsUpdated] = useState(false)

  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/milkshakes/${props.match.params.id}`)
          console.log('orders - response', response)
          setOrder(response.data.milkshake)
        } catch (err) {
          console.error(err)
        }
   }
    makeAPICall()
  }, [])

  useEffect(() => {
    const paidToggle = () => {
      let tempOrder = {...order}
      console.log('tempOrder - before',tempOrder)
      if (tempOrder.paid === false){
        tempOrder.paid = true
      } else {
        tempOrder.paid = false
      }
      console.log('tempOrder - after',tempOrder)
      setUpdatedOrder(tempOrder);
  }
  paidToggle()
  },[order])

  const destroyMS = async () => {
    const response = await axios(
        {
      url: `${apiUrl}/milkshakes/${props.match.params.id}`,
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

    const handleSubmit = (event) => {
        event.preventDefault()
  
        axios.put(`${apiUrl}/milkshakes/${props.match.params.id}`, updatedOrder)
            .then(() => setIsUpdated(true))
            .catch(console.error)
    }
  
    if(!isUpdated) {
      console.log('not updated yet')
    }
  
    if (isUpdated) {
      console.log('paid/unpaid is updated')
      return (
        <>
          <h3>paid/unpaid is updated</h3> 
          <Link to={`/past-orders/milkshake/${props.match.params.id}`}>Back to Past Orders</Link>
        </>
        )}

    return (
        <Layout>
            <div className="individualOrder">
                    <h2>Order for {order.name}</h2> 
                    <h5>Flavor: {order.flavor}</h5>
                    {order.topping1 ? <h5>Topping 1: {order.topping1}</h5> : <h5>Topping 1: N/A</h5>}
                    {order.topping2 ? <h5>Topping 2: {order.topping2}</h5> : <h5>Topping 2: N/A</h5>}
                    {order.topping3 ? <h5>Topping 3: {order.topping3}</h5> : <h5>Topping 3: N/A</h5>}                    
                    <h5>Paid: {order.paid ? 'True' : 'False'}</h5>
                    <button onClick={destroyMS}>Delete Order</button>
                    <form onSubmit={handleSubmit}><button type='submit'>Paid / Unpaid</button></form>
                    <Link to="/past-orders">Back to all orders</Link>
            </div>
        </Layout>
    )
}
export default MilkshakeOrder
