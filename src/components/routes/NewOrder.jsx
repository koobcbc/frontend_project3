import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../shared/Layout';

const NewOrder = ()=>{
    return(
        <Layout>
            <div className="orderform">
                <h4>What do you want to order?</h4>
                <Link to="/order-icecream" className="btn btn-primary">Ice Cream</Link>
                <Link to="/order-milkshake"className="btn btn-primary">Milkshake</Link>
            </div>
        </Layout>
        
    )
}

export default NewOrder;