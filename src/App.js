import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/routes/Home'
import NewOrder from './components/routes/NewOrder'
import PastOrders from './components/routes/PastOrders'
import IcecreamOrder from './components/routes/IcecreamOrder'
import MilkshakeOrder from './components/routes/MilkshakeOrder'
import About from './components/routes/About'
import OrderIceCream from './components/routes/OrderIceCream';
import OrderMilkshake from './components/routes/OrderMilkshake';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
  return(
  <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/order-icecream'component={OrderIceCream}/>
      <Route path='/order-milkshake'component={OrderMilkshake}/>
      <Route path='/new-order' component={NewOrder}/>
      <Route path='/past-orders/icecream/:id' component={IcecreamOrder}/>
      <Route path='/past-orders/milkshake/:id' component={MilkshakeOrder}/>
      <Route path='/past-orders' component={PastOrders} />
      <Route path='/about' component={About}/>
    </Switch>
  </div>
)}

export default withRouter(App);
