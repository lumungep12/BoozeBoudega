import React, { Component } from 'react'
import Landing from '../Components/Landing';
import Showcase from '../Components/Showcase';

export default class Home extends Component {
    render() {
        return (
            <>
                <Landing/>
                <Showcase/>
            </>
        )
    }
}
