import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../shared/Layout';

const NewOrder = ()=>{
    return(
        <Layout>
        <h4>What do you want to order?</h4>
        <Link to="/order-icecream">Ice Cream</Link>
        <Link to="/order-milkshake">Milkshake</Link>
        </Layout>
        
    )
}

export default NewOrder;