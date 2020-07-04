import React, {Component} from 'react';
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