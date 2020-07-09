import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import glass from '../../assets/ic_Search.png';
import glass2x from '../../assets/ic_Search@2x.png.png';
import logo from '../../assets/Logo_ML.png';
import logo2x from '../../assets/Logo_ML@2x.png.png';

class MainSearchBar extends Component {

    // define state vars
    state = {
        searchString: '',
        startNewSearch: false
    }

    componentDidUpdate() {
        if (this.state.startNewSearch) {
            this.startSearch();
        }
    }

    // prepare string to start the search
    startSearch = () => {
        // perform a search if the search string has some data and the form was submitted
        if (this.state.searchString) {
            // remove special chars from search string
            let curedSearchString = this.state.searchString.replace(/[&\\#,+()$~%.'":*?<>={}]/g,'_');
            // remove multiple spaces and leading/trailing ones
            curedSearchString = curedSearchString.replace(/\s+/g, " ").trim();

            // modify history and programatically call router with the new path
            this.props.history.push({ pathname: '/items', search: `search=${curedSearchString}` });

            // set status of search as false
            this.setState({ startNewSearch: false });
        }
    } 
    
    handleSubmitSearch = e => {
        e.preventDefault();

        // set status of search as true to start searching
        this.setState({ startNewSearch: true });
        this.startSearch();
    }

    placeholderLegend = () => {
        return "Nunca dejes de buscar";
    }
    
    render() {
        return (
            <header className="nav-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-1 my-auto">
                            <Link to="/" className="navbar-brand">
                                <img src={logo} srcSet={`${logo2x} 2x`} alt='logoIcon' className="logoIcon" />
                            </Link>
                        </div>
                        <div className="col-md-11 pl-0">
                            <form className="search-component"
                                onSubmit={this.handleSubmitSearch}>
                                <div className="input-group">
                                    <input className="form-control rounded-left border border-light no-shadow h-100" 
                                        type="search"
                                        value={this.state.searchString}
                                        placeholder={this.placeholderLegend()}
                                        aria-label="Search"
                                        onChange={e => this.setState({ searchString: e.target.value })} />
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

export default withRouter(MainSearchBar);