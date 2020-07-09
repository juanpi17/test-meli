import React from 'react';
import { Link } from 'react-router-dom';
import shippingIcon from './../../assets/ic_shipping.png';
import shippingIcon2x from './../../assets/ic_shipping@2x.png.png';

const Item = (props) => {
    const item = (props.item) 
                ? props.item 
                : { 
                    id: 0,
                    picture: '',
                    picture2x: '',
                    title: '',
                    location: ''
                };

    // get the price and apply required format
    let amount = (item && item.price && item.price.amount) ? Math.trunc(item.price.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;

    // check if the item has free shipping
    var free_shipping;
    if (item && item.free_shipping) {
        free_shipping = <img src={shippingIcon} srcSet={`${shippingIcon2x} 2x`} alt='shipping-icon' className="img-fluid" />;
    } else {
        free_shipping = "";
    }

    return (
        
        <Link className="item-result" to={`/items/${item.id}`}>
            <div className="row item-body">
                <div className="text-center text-md-left col-md-auto px-0">
                    <img src={item.picture} srcSet={`${item.picture2x} 2x`} alt='thumb' className="thumb-image" />
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
                    <div className="location mt-2 mt-md-4">
                        <span>{item.location}</span>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default Item;