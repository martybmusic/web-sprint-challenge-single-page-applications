import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link id='order-pizza' to="/pizza">Place Order</Link>
        </div>
    )
}

export default Nav;