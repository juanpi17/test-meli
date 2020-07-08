import React, { Component } from 'react';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import { withRouter } from "react-router-dom";
import imagePlaceholder from './../../assets/image-placeholder.jpg';

class ItemDetail extends Component {

    state = {
        details: [],
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

    // componentDidUpdate(prevProps) {
    //     // only perform search if the search parameter has changed
    //     if (prevProps.location.search !== this.props.location.search) {
    //         this.performSearch();
    //     }
    // }

    componentDidMount() {
        // obtain id of the item
        //const id = this.props.match.params.id;
        this.obtainItem();

        console.log(this.props.match);
    //     // document.title = `You clicked ${this.state.count} times`;
    //     console.log(this.state.searchString);
    //     // console.log(this.state.searchString.replace(/[&\/\\#,+()$~%.'":*?<>={}]/g,'_'));
    }

    obtainItem = async () => {
        // const searchValues = queryString.parse(this.props.location);
        // console.log(this.props); // "search"

        // create a request to the local endpoint
        const resultsList = await fetch(this.props.match.url)
            .then(res => res.json())
            .then(results => this.setState({
                details: results.item,
                loading: false
            }));
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
                    <div className="item-details">
                        <div className="container">
                            <div className="row details-page">
                                <div className="col-md-9 pl-0 details-left">
                                    <div className="image-container">
                                        <img src={this.state.details.picture} srcSet={`${this.state.details.pictureFull} 2x`} alt='placeholder' className="main-image m-auto" />
                                    </div>
                                    <div className="description">
                                        <div className="description-title">
                                            <span>Descripción del producto</span>
                                        </div>
                                        <div className="description-body">
                                            <span>
                                                {this.state.details.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md details-right pr-0">
                                    <div className="item-condition-quantity">
                                        <span>{this.state.details.condition}
                                        {
                                            (this.state.details.sold_quantity > 0)
                                                ? ` - ${this.state.details.sold_quantity} 
                                                    ${(this.state.details.sold_quantity !== 1)
                                                    ? 'vendidos'
                                                    : 'vendido' 
                                                    } `
                                                : ''
                                        }
                                        </span>
                                    </div>
                                    <div className="item-title">
                                        <span>{this.state.details.title}</span>
                                    </div>
                                    <div className="item-price">
                                        <span className="integer-part">
                                            $ {Math.trunc(this.state.details.price.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                            <span className="cents">
                                                {("0" + this.state.details.price.decimals).slice(-2)}
                                            </span>
                                        </span>
                                    </div>
                                    <button className="btn btn-info w-100">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
            </section>
        );
    }
}

export default withRouter(ItemDetail);