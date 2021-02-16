import React, { Component } from 'react';
import img1 from '../img/bg1.jpg';
import img2 from '../img/bg2.jpg';
import img3 from '../img/bg3.jpg';
import img4 from '../img/bg4.jpg';
import img5 from '../img/bg5.jpg';
import Navbar from './Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class Landing extends Component {
    render() {
        return (
            <div className="landing-container">
                <Carousel 
                    showArrows={true} 
                    infiniteLoop 
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                >
                    <div className="landing-image">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="landing-image">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="landing-image">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="landing-image">
                        <img src={img4} alt=""/>
                    </div>
                    <div className="landing-image">
                        <img src={img5} alt=""/>
                    </div>
                </Carousel>
                <div className="navigation-bar">
                        <Navbar/>
                </div>
            </div>
        )
    }
}
