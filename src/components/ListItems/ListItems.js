import React, {Component} from 'react';
import queryString from 'query-string';

import Item from './Item';

class ListItems extends Component {

    state = {
        results: [
            {
                location: "Santa Fe"
            },
            {
                location: "Capital Federal"
            },
            {
                location: "Mendoza"
            }
        ]
    };

    componentDidMount() {
        const searchValues = queryString.parse(this.props.location.search);
        console.log(searchValues); // "search"

        // // fetchItems = async () => {
        // const user = await fetch('/users/1')
        //     .then(res => res.json()) // Process the incoming data

        // // Update usersList state
        // // setUsersList(users)
        // this.setState({ searchString: user });
    
        // // }
    }

    render() {
        return (

            <div className="container results-list">
                {this.state.results.map( result => 
                    <Item location={ result.location } />
                )}
            </div>

        )
    }

}

export default ListItems;