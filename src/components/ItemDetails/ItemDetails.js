import React, { Component } from 'react';
import imagePlaceholder from './../../assets/image-placeholder.jpg';

class ItemDetail extends Component {
    render() {
        return (
            <div className="item-details">
                <div className="container">
                    <div className="row details-page">
                        <div className="col-md-9 pl-0 details-left">
                            <div className="d-flex">
                                <img src={imagePlaceholder} alt='placeholder' className="main-image m-auto" />
                            </div>
                            <div className="description">
                                <div className="description-title">
                                    <span>Descripción del producto</span>
                                </div>
                                <div className="description-body">
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id neque euismod, efficitur lacus vitae, laoreet odio. Proin vel tortor a massa vulputate tincidunt. Fusce at lectus libero. Nam lectus est, blandit in facilisis sit amet, vulputate vel purus. Proin eget tincidunt magna, nec sollicitudin diam. Maecenas vitae ante id nisl cursus semper. Vivamus tincidunt efficitur eros at placerat. Aliquam commodo leo vel odio efficitur consequat. Aliquam condimentum nisi tortor, nec facilisis nisi suscipit vitae. Donec metus urna, suscipit eget consectetur at, volutpat quis urna. Cras vel nisl imperdiet, scelerisque nunc sit amet, tincidunt sapien. Aliquam eleifend, lorem et ullamcorper dignissim, urna sapien maximus massa, ut scelerisque lectus sapien ac nisl. Etiam metus nibh, maximus vitae libero vitae, tempus dictum felis. Nunc nec massa vitae nisl vestibulum molestie a euismod nisl. Donec lacinia sem eget tempor convallis.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md details-right pr-0">
                            <div className="item-condition-quantity">
                                <span>Nuevo - 234 vendidos</span>
                            </div>
                            <div className="item-title">
                                <span>Deco Reverse Sombrero Oxford</span>
                            </div>
                            <div className="item-price">
                                <span className="integer-part">$ 1.980<span className="cents">00</span></span>
                            </div>
                            <button className="btn btn-info w-100">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetail;