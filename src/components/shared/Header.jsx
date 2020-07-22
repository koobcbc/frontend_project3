import React from 'react';
import { Link } from 'react-router-dom'

const Header = ()=>(
    <div className="headerDiv">
        <Link to="/"><img src="https://i.imgur.com/yqLyQfs.png" alt="logo" width="35px" display="inline"/></Link>
        <Link to="/" className="h1Link"><h1>icecream.yum</h1></Link>
    </div>
)
;
export default Header