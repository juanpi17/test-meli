import React, {Component} from 'react';
import shippingIcon from './../../assets/ic_shipping.png';
import shippingIcon2x from './../../assets/ic_shipping@2x.png.png';
import imagePlaceholder from './../../assets/image-placeholder.jpg';

class Item extends Component {

    render() {
        return (

            <div className="row item-result">
                <div className="col-md-auto px-0">
                    <img src={imagePlaceholder} alt='image-placeholder' className="thumb-image" />
                </div>
                <div className="col-md-6">
                    <div className="price-shipping mt-2">
                        <span className="d-inline-block pr-2 price">$ 1.980</span>
                        <img src={shippingIcon} srcSet={`${shippingIcon2x} 2x`} alt='shipping-icon' className="img-fluid" />
                    </div>
                    <div className="description">
                        <span>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</span>
                    </div>
                </div>
                <div className="col-md offset-md-1">
                    <div className="location mt-4">
                        <span>Capital Federal</span>
                    </div>
                </div>
            </div>

        )
    }

}

export default Item;