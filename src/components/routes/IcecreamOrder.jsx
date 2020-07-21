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

      axios.put(`${apiUrl}/icecream/${props.match.params.id}`, updatedOrder)

      // axios({
      //     url: `${apiUrl}/icecream/${props.match.params.id}`,
      //     method: 'PUT',
      //     data: updatedOrder
      // })
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
        <Link to={`/past-orders`}>Back to Past Orders</Link>
      </>
      )}

  // <Redirect to={`/past-orders/icecream/${props.match.params.id}`} />

    return (
        <Layout>
                <div className="icecreamOrder">
                    <h4>Order for {order.name}</h4> 
                    <h4>Flavor: {order.flavor}</h4>
                    <h4>Toppings: {order.toppings}</h4>
                    <h4>Paid: {order.paid ? 'True' : 'False'}</h4>
                    <button onClick={destroyIC}>Delete Order</button>
                    <form onSubmit={handleSubmit}><button type='submit'>Paid / Unpaid</button></form>
                    <Link to="/past-orders">Back to all orders</Link>
                </div>
        
        </Layout>
    )
}
export default IcecreamOrder
