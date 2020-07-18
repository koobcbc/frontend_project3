import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/routes/Home'
import NewOrder from './components/routes/NewOrder'
import PastOrders from './components/routes/PastOrders'
import Order from './components/routes/Order'
import About from './components/routes/About'

const App = props => {
  return(
  <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/new-order' component={NewOrder}/>
      <Route path='/past-orders/:id' component={Order}/>
      <Route path='/past-orders' component={PastOrders} />
      <Route path='/about' component={About}/>
    </Switch>
  </div>
)}

export default withRouter(App);
