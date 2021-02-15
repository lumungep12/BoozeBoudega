import React, { Component } from 'react';
import landingImg from '../img/landing.jpg';
import Navbar from './Navbar';

export default class Landing extends Component {
    render() {
        return (
            <div className="landing-container">
                <div className="landing-image">
                    <img src={landingImg} alt=""/>
                </div>
                <div className="navigation-bar">
                        <Navbar/>
                </div>
            </div>
        )
    }
}
