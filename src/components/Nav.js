import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/form">Place Order</Link>
        </div>
    )
}

export default Nav;