import React from 'react';
import { Link } from 'react-router-dom';
import shippingIcon from './../../assets/ic_shipping.png';
import shippingIcon2x from './../../assets/ic_shipping@2x.png.png';
import imagePlaceholder from './../../assets/image-placeholder.jpg';

// class Item extends Component {

const Item = (props) => {
    // get the price and apply required format
    // let price = Math.trunc(props.product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const item = props.item;

    return (
        
        <Link className="item-result" to={`/items/${item.id}`}>

        {/* {console.log(props)} */}
        {/* <Link to={`/items/${props.product.id}`}> */}
            <div className="row item-body">
                <div className="col-md-auto px-0">
                    <img src={ item.picture2x } alt='placeholder' className="thumb-image" />
                </div>
                <div className="col-md-6">
                    <div className="price-shipping mt-2">
                        <span className="d-inline-block pr-2 price">{`$ ${ item.price.amount }`}</span>
                        <img src={shippingIcon} srcSet={`${shippingIcon2x} 2x`} alt='shipping-icon' className="img-fluid" />
                    </div>
                    <div className="description">
                        <span>{ item.title }</span>
                    </div>
                </div>
                <div className="col-md offset-md-1">
                    <div className="location mt-4">
                        <span>{ item.location }</span>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default Item;