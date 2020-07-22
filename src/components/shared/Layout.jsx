import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';


const Layout = props => (
    <div className="layout">
        <Header />
        <Nav /> 
        {props.children}
        {/* <Footer /> */}

    </div>
)

export default Layout