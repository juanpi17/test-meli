import React, { Component } from 'react';
import glass from '../../assets/ic_Search.png';
import glass2x from '../../assets/ic_Search@2x.png.png';
import logo from '../../assets/Logo_ML.png';
import logo2x from '../../assets/Logo_ML@2x.png.png';

class MainSearchBar extends Component {
    render() {
        return (
            <div>
                <img src={glass} srcSet={`${glass2x} 2x`} alt='glassIcon' className="glassIcon" />
                <img src={logo} srcSet={`${logo2x} 2x`} alt='logoIcon' className="logoIcon" />
            </div>
        );
    }
}

export default MainSearchBar;