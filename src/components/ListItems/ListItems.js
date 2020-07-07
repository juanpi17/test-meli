import React, {Component} from 'react';
import queryString from 'query-string';

import Item from './Item';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';

class ListItems extends Component {

    state = {
        results: [],
        loading: true,

        // results: [
        //     {
        //         location: "Santa Fe"
        //     },
        //     {
        //         location: "Capital Federal"
        //     },
        //     {
        //         location: "Mendoza"
        //     }
        // ]
    };

    componentDidUpdate(prevProps) {
        // only perform search if the search parameter has changed
        if (prevProps.location.search !== this.props.location.search) {
            this.performSearch();
        }
    }

    componentDidMount() {
    // componentDidUpdate() {
        this.performSearch();
    //     // document.title = `You clicked ${this.state.count} times`;
    //     console.log(this.state.searchString);
    //     // console.log(this.state.searchString.replace(/[&\/\\#,+()$~%.'":*?<>={}]/g,'_'));
    }

    performSearch = async () => {
        const searchValues = queryString.parse(this.props.location.search);
        console.log(searchValues); // "search"

        // create a request to the local endpoint
        const resultsList = await fetch(this.props.location.search)
            .then(res => res.json())
            .then(results => this.setState({
                results: results.items,
                loading: false
            }));
            // .then(results => console.log(results.items));
        // // fetchItems = async () => {
        // const user = await fetch('/users/1')
        //     .then(res => res.json()) // Process the incoming data

        // // Update usersList state
        // // setUsersList(users)
        // this.setState({ searchString: user });
    
        // // }
    };

    render() {
        return (

            <section className="results-section">
            {
                (this.state.loading)
                ? <p>Loading</p>
                : <React.Fragment>
                    <Breadcrumbs />
                    <div className="container results-list">
                        {this.state.results && 
                        this.state.results.length > 0 && 
                        this.state.results.map( item => (
                            <Item key={ item.id } item={ item } />
                        ))}
                    </div>
                </React.Fragment>

            }
            </section>
        )
    }

}

export default ListItems;