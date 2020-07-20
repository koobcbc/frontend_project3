import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Layout from '../shared/Layout'
import apiUrl from '../../apiConfig'

const Item = (props) =>  {
  const [item,setItem] = useState(null)
  const [isDeleted,setIsDeleted] = useState(false)

  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/items/${props.match.params.id}`)
          console.log('Item - response', response)
          setItem(response.data.item)
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

    if (!item) {
      return <p>Loading...</p>
    }

    if (isDeleted) {
      return <Redirect to={
        { pathname: '/', state: { msg: 'Item succesfully deleted!' } }
      } />
    }

    return (
      <Layout>
        <h4>Order</h4> 
        <h4>{item.title}</h4>
        <p>Link: {item.link}</p>
        <button onClick={destroy}>Delete Item</button>
        <Link to={`/items/${props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/items">Back to all items</Link>
      </Layout>
    )
}

export default Item
