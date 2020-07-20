import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Layout from '../shared/Layout'
import apiUrl from '../apiConfig'

const MilkshakeOrder = (props) =>  {
    const [order,setOrder] = useState(null)
    const [isDeleted,setIsDeleted] = useState(false)

  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/milkshake/${props.match.params.id}`)
          console.log('orders - response', response)
          setOrder(response.data.milkshake)
        } catch (err) {
          console.error(err)
        }
   }
    makeAPICall()
  }, [])

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

    return (
        <Layout>
            <div className="milkshakeOrder">
                    <h4>Order for {order.name}</h4> 
                    <h4>Flavor: {order.flavor}</h4>
                    <h4>Toppings: {order.toppings}</h4>
                    <button onClick={destroyMS}>Delete Order</button>
                    <Link to={`/past-orders/milkshake/${props.match.params.id}/edit`}>
                        <button>Edit Order</button>
                    </Link>
                    <Link to="/past-orders">Back to all orders</Link>
            </div>
        </Layout>
    )
}
export default MilkshakeOrder
