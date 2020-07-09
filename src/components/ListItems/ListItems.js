import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import Item from './Item';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import queryString from 'query-string';

class ListItems extends Component {

    state = {
        results: [],
        categories: [],
        loading: true,
    };

    componentDidUpdate(prevProps) {
        // only perform search if the search parameter has changed
        if (prevProps.location && prevProps.location.search !== this.props.location.search) {
            this.performSearch();
        }
    }

    componentDidMount() {
        if (this.checkIfValidSearch()) {
            this.performSearch();
        } else {
            this.setState({ loading: false });
            // modify history and programatically redirect to the root page
            if (this.props.history) {
                this.props.history.push({ pathname: '/' });
            }
        }
    }

    // check if the parameters match search
    checkIfValidSearch = () => {
        if (!this.props.location)
            return false;

        const searchValues = queryString.parse(this.props.location.search);

        return (Object.keys(searchValues)[0] !== null &&
            Object.keys(searchValues).length > 0 &&
            Object.keys(searchValues)[0] === 'search' &&
            Object.values(searchValues)[0] !== null && 
            Object.values(searchValues)[0] !== '' && 
            Object.values(searchValues).length > 0);
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
            }))
            .catch(error => console.log(error));
    };

    render() {
        return (

            <section className="results-section">
            {
                (this.state.loading)
                ? <Loader 
                    className="text-center"
                    type="ThreeDots"
                    color="#999999"
                    height={100}
                    width={100} />
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