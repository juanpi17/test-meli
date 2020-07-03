import React, { Component } from 'react';

import glass from '../../assets/ic_Search.png';
import glass2x from '../../assets/ic_Search@2x.png.png';
import logo from '../../assets/Logo_ML.png';
import logo2x from '../../assets/Logo_ML@2x.png.png';

class MainSearchBar extends Component {
    
    render() {
        const placeholder = "Nunca dejes de buscar";

        return (
            <header className="nav-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-1 offset-md-1 my-auto">
                            <a className="navbar-brand" href="#home">
                                <img src={logo} srcSet={`${logo2x} 2x`} alt='logoIcon' className="logoIcon" />
                            </a>
                        </div>
                        <div className="col-md-9 pl-0">
                            <form className="search-component">
                                <div className="input-group">
                                    <input className="form-control rounded-left border border-light no-shadow h-100" type="search" placeholder={placeholder} aria-label="Search" />
                                    <button className="btn btn-light rounded-right border border-light no-shadow" type="submit" aria-label="Search">
                                        <img src={glass} srcSet={`${glass2x} 2x`} alt='glassIcon' className="glassIcon" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default MainSearchBar;