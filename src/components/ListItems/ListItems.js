import React, {Component} from 'react';
import queryString from 'query-string';

import Item from './Item';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';

class ListItems extends Component {

    state = {
        results: [],
        categories: [],
        loading: true,
    };

    componentDidUpdate(prevProps) {
        // only perform search if the search parameter has changed
        if (prevProps.location.search !== this.props.location.search) {
            this.performSearch();
        }
    }

    componentDidMount() {
        this.performSearch();
    }

    // search for items to display
    performSearch = async () => {
        // create a request to the local endpoint
        await fetch(this.props.location.search)
            .then(res => res.json())
            .then(results => this.setState({
                results: results.items,
                categories: results.categories,
                loading: false
            }));
    };

    render() {
        return (

            <section className="results-section">
            {
                (this.state.loading)
                ? <p>Loading</p>
                : <React.Fragment>
                    <Breadcrumbs categories={ this.state.categories } />
                    <div className="container results-list">
                        {this.state.results && 
                        this.state.results.length > 0 && 
                        this.state.results.map( item => (
                            <Item key={ item.id } item={ item } categories={ this.state.categories } />
                        ))}
                    </div>
                </React.Fragment>

            }
            </section>
        )
    }

}

export default ListItems;