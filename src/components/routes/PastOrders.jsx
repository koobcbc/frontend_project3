import React from 'react';
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'

const PastOrders = props => {
    return(
        <Layout>
            <h4>PastOrders</h4>
            <p><Link to={`/past-orders/id`}>Order</Link></p>
        </Layout>
  )}
  
  export default PastOrders;