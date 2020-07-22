import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';


const Layout = props => (
    <div className="layout">
        <Header />
        <Nav /> 
        <div className="backgroundImg">
        {props.children}
        </div>
        <Footer />        
    </div>
)

export default Layout