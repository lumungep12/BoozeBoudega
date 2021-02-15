import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <a href="#!" className="logo">The BoozeBoudega</a>
                </div>
                <ul class="navbar">
                    <li className="nav-link"><Link to="/">Home</Link></li>
                    <li className="nav-link"><Link to="/drinks">Drinks</Link></li>
                    <li className="nav-link"><Link to="/food">Food</Link></li>
                    <li className="nav-link"><Link to="/about">About</Link></li>
                </ul>
            </header>
        )
    }
}
