import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Layout from '../shared/Layout'
import apiUrl from '../apiConfig'

const IcecreamOrder = (props) =>  {
    const [order,setOrder] = useState(null)
    const [isDeleted,setIsDeleted] = useState(false)
    const [updatedOrder, setUpdatedOrder] = useState({})
    const [isUpdated,setIsUpdated] = useState(false)


  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/iceCream/${props.match.params.id}`)
          console.log('orders - response', response)
          setOrder(response.data.iceCream)
        } catch (err) {
          console.error(err)
        }
   }
    makeAPICall()
  }, [])

  let tempOrder = {...order}
      console.log('tempOrder - before',tempOrder)
      if (tempOrder.paid){
        tempOrder.paid = false
      } else {
        tempOrder.paid = true
      }
      console.log('tempOrder - after',tempOrder)


  useEffect(() => {
    const paidToggle = () => {
      setUpdatedOrder(tempOrder);
  }
  paidToggle()
  },[order])

  console.log('updatedorder', updatedOrder)

  const destroyIC = async () => {
    const response = await axios(
        {
      url: `${apiUrl}/icecream/${props.match.params.id}`,
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
      console.log('handleSubmit - updatedOrder (before)', updatedOrder)
      axios({
          url: `${apiUrl}/icecream/${props.match.params.id}`,
          method: 'PUT',
          data: updatedOrder
      })
          .then(() => setIsUpdated(true))
          .then(console.log(updatedOrder))
          .then(console.log('updated by get method!'))
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
        <Link to={`/past-orders`}>Back to Past Orders</Link>
      </>
      )}

  // <Redirect to={`/past-orders/icecream/${props.match.params.id}`} />

    return (
        <Layout>
                <div className="individualOrder">
                    <h2>Order for {order.name}</h2> 
                    <h5>Flavor: {order.flavor}</h5>
                    {order.topping1 ? <h5>Topping 1: {order.topping1}</h5> : <h5>Topping 1: N/A</h5>}
                    {order.topping2 ? <h5>Topping 2: {order.topping2}</h5> : <h5>Topping 2: N/A</h5>}
                    {order.topping3 ? <h5>Topping 3: {order.topping3}</h5> : <h5>Topping 3: N/A</h5>}                    
                    <h5>Paid: {order.paid ? 'True' : 'False'}</h5>
                    <button onClick={destroyIC} className="btn btn-primary">Delete Order</button>
                    <form onSubmit={handleSubmit}><button type='submit' className="btn btn-primary">Paid / Unpaid</button></form>
                    <Link to="/past-orders">Back to all orders</Link>
                </div>
        
        </Layout>
    )
}
export default IcecreamOrder
