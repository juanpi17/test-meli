import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';

class ItemDetails extends Component {

    state = {
        details: [],
        categories: [],
        loading: true,
    };

    componentDidMount() {
        this.obtainItem();
    }

    obtainItem = async () => {
        // create a request to the local endpoint
        await fetch(this.props.match.url)
            .then(res => res.json())
            .then(results => this.setState({
                details: results.item,
                categories: this.state.categories.concat(results.item.title),
                loading: false
            }));
    };

    // modify price to adjust it to the requested format (thousands separator)
    priceFormat = (amount) => {
        return Math.trunc(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // modify decimals to adjust it to the requested format (2 digits)
    decimalsFormat = (decimals) => {
        return ("0" + decimals).slice(-2)
    }

    // create string with the combination of the condition and quantity sold of a item
    conditionFormat = (condition, sold_quantity) => {
        let cond = (condition === 'new') ? 'Nuevo' : ( (condition === 'used') ? 'Usado' : condition );
        let qty = (sold_quantity > 0) ? ` - ${sold_quantity} ${( (sold_quantity !== 1) ? 'vendidos' : 'vendido' )}` : '';
        return `${cond} ${qty}`;
    }

    render() {

        return (

            <section className="details-section">
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
                    <div className="item-details">
                        <div className="container">
                            <div className="row details-page">
                                <div className="col-lg-8 pl-lg-0 col-xl-9 details-left order-2 order-lg-1">
                                    <div className="image-container">
                                        <img src={this.state.details.picture} srcSet={`${this.state.details.picture2x} 2x`} alt='placeholder' className="main-image m-auto" />
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
                                <div className="col-lg details-right pr-lg-0 order-1 order-lg-2">
                                    <div className="item-condition-quantity">
                                        <span>{this.conditionFormat(this.state.details.condition, this.state.details.sold_quantity)}</span>
                                    </div>
                                    <div className="item-title">
                                        <span>{this.state.details.title}</span>
                                    </div>
                                    <div className="item-price">
                                        <span className="integer-part">
                                            $ {this.priceFormat(this.state.details.price.amount)}
                                            <span className="cents">
                                                {this.decimalsFormat(this.state.details.price.decimals)}
                                            </span>
                                        </span>
                                    </div>
                                    <button className="btn btn-info w-100 mb-3 mb-lg-0">Comprar</button>
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

export default ItemDetails;