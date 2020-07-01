import React, { Component } from 'react';
import glass from './assets/ic_Search.png';
import logo from './assets/Logo_ML.png';

export default class MainSearchBar extends Component {

    render() {

        return (
            <div>
                <img src={glass} alt='glassIcon' className="glassIcon" />
                <img src={logo} alt='logoIcon' className="logoIcon" />
            </div>
        );

    }

}