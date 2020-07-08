import React from 'react';
import { Link } from 'react-router-dom';
import shippingIcon from './../../assets/ic_shipping.png';
import shippingIcon2x from './../../assets/ic_shipping@2x.png.png';

const Item = (props) => {
    const item = props.item;

    // get the price and apply required format
    let amount = Math.trunc(item.price.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // check if the item has free shipping
    var free_shipping;
    if (item.free_shipping) {
        free_shipping = <img src={shippingIcon} srcSet={`${shippingIcon2x} 2x`} alt='shipping-icon' className="img-fluid" />;
    } else {
        free_shipping = "";
    }

    return (
        
        <Link className="item-result" to={`/items/${item.id}`}>
            <div className="row item-body">
                <div className="col-md-auto px-0">
                    <img src={item.picture} srcSet={`${item.picture2x} 2x`} alt='thumb-image' className="thumb-image" />
                </div>
                <div className="col-md-6">
                    <div className="price-shipping mt-2">
                        <span className="d-inline-block pr-2 price">{`$ ${ amount }`}</span>
                        {free_shipping} 
                        
                    </div>
                    <div className="description">
                        <span>{item.title}</span>
                    </div>
                </div>
                <div className="col-md offset-md-1">
                    <div className="location mt-4">
                        <span>{item.location}</span>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default Item;