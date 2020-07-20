import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Layout from '../shared/Layout'
import apiUrl from '../apiConfig'

const IcecreamOrder = (props) =>  {
    const [order,setOrder] = useState(null)
    const [isDeleted,setIsDeleted] = useState(false)

  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/iceCream/${props.match.params.id}`)
          console.log('orders - response', response)
          setOrder(response.data.IceCream)
        } catch (err) {
          console.error(err)
        }
   }
    makeAPICall()
  }, [])

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

    return (
        <Layout>
                <div className="icecreamOrder">
                    <h4>Order for {order.name}</h4> 
                    <h4>Flavor: {order.flavor}</h4>
                    <h4>Toppings: {order.toppings}</h4>
                    <button onClick={destroyIC}>Delete Order</button>
                    <Link to={`/past-orders/icecream/${props.match.params.id}/edit`}>
                        <button>Edit Order</button>
                    </Link>
                    <Link to="/past-orders">Back to all orders</Link>
                </div>
        
        </Layout>
    )
}
export default IcecreamOrder
