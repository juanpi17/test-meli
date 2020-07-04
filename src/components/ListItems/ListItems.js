import React, {Component} from 'react';
import Item from './Item';

class ListItems extends Component {

    render() {
        return (

            <div className="container results-list">
                <Item />
                <Item />
                <Item />
            </div>

        )
    }

}

export default ListItems;