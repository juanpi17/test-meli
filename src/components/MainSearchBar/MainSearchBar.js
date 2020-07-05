import React, { Component } from 'react';

import glass from '../../assets/ic_Search.png';
import glass2x from '../../assets/ic_Search@2x.png.png';
import logo from '../../assets/Logo_ML.png';
import logo2x from '../../assets/Logo_ML@2x.png.png';

class MainSearchBar extends Component {

    // define state vars
    state = {
        searchString: '',
        // performSearch: false
    }


    // start fresh
    componentDidMount() {
        this.state.searchString = '';
    }

    componentDidUpdate() {
        // document.title = `You clicked ${this.state.count} times`;
        console.log(this.state.searchString);
        // console.log(this.state.searchString.replace(/[&\/\\#,+()$~%.'":*?<>={}]/g,'_'));
    }

    
    handleSubmitSearch = e => {
        e.preventDefault();

        // perform a search if the search string has some data and the form was submitted
        // if (this.state.searchString && this.state.performSearch) {
        if (this.state.searchString) {
            // remove special chars from search string
            let curedSearchString = this.state.searchString.replace(/[&\/\\#,+()$~%.'":*?<>={}]/g,'_');
            // remove multiple spaces and leading/trailing ones
            curedSearchString = curedSearchString.replace(/\s+/g, " ").trim();

            // perform the actual search
            this.fetchItems();
            // this.props.history.push({ pathname: '/items', search: `search=${this.state.search}` });
        }
    }

    fetchItems = async () => {
        const user = await fetch('/users/1')
            .then(res => res.json()) // Process the incoming data

        // Update usersList state
        // setUsersList(users)
        this.setState({ searchString: user });

    }
    
    render() {
        const placeholder = "Nunca dejes de buscar";

        return (
            <header className="nav-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-1 my-auto">
                            <a className="navbar-brand" href="#home">
                                <img src={logo} srcSet={`${logo2x} 2x`} alt='logoIcon' className="logoIcon" />
                            </a>
                        </div>
                        <div className="col-md-11 pl-0">
                            <form className="search-component"
                                onSubmit={this.handleSubmitSearch}>
                                <div className="input-group">
                                    <input className="form-control rounded-left border border-light no-shadow h-100" 
                                        type="search"
                                        value={this.state.searchString}
                                        placeholder={placeholder}
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

export default MainSearchBar;