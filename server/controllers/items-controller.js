const axios = require('axios');
const { response } = require('express');

// set Mercado Libre's API URL
const meliApiUrl = process.env.MELI_API_URL || 'https://api.mercadolibre.com'
// define items limit when performing a search
const limit = 4;

// Create controller for GET request to '/items/search'
exports.itemsGetAll = async (req, res) => {

    // if there is a search string on the "search" param
    const queryString = req.query.search;
    if (queryString) {

        // create uri to request
        const searchUrl = `${meliApiUrl}/sites/MLA/search?q=${queryString}&limit=${limit}`;

        axios
            .get(searchUrl)
            .then(response => {
                return {
                    
                    author: {
                        name: "Juan Pablo",
                        lastname: "Lepore"
                    },

                    // verify if filters exist
                    categories: (response.data.filters !== undefined && response.data.filters[0] !== undefined) 
                                ? response.data.filters[0].values[0].path_from_root.map(category => {
                        return category.name
                    }) : [],

                    // I've added 2 extra fields to the mentioned on the description of the test: 
                    // picture2x (to avoid image pixelation), and location (to make it appear on the result list)
                    items: response.data.results.map(result => {
                        return {
                            id: result.id,
                            title: result.title,
                            price: {
                                currency: result.currency_id,
                                amount: Math.trunc(result.price),
                                decimals: (result.price + "").indexOf(".") != -1 ? (result.price + "").split(".")[1] : 0,
                            },
                            picture: result.thumbnail,
                            picture2x: result.thumbnail.replace(/(I\.[\w\d_-]+)$/i, 'I$1'),
                            condition: result.condition,
                            free_shipping: result.shipping.free_shipping,
                            location: result.address.state_name,
                        }
                    })

                }
            })
            .then(result => res.send(result))
            .catch(errors => {
                console.error(errors);
            });
    }
}

exports.itemsGetOne = async (req, res) => {

    // obtain id of the item
    const id = req.params.id;

    if (id) {

        // we need data from 2 endpoints, so let's define them here 
        const itemDataUrl = `${meliApiUrl}/items/${id}`;
        const itemDescriptionUrl = `${meliApiUrl}/items/${id}/description`;
        
        axios
            .all([axios.get(itemDataUrl), axios.get(itemDescriptionUrl)])
            .then(
                axios.spread((...responses) => {

                    // start processing when both responses are ready
                    if (responses.length == 2) {

                        // obtain data from each request
                        const itemData = responses[0].data;
                        const itemDescription = responses[1].data;

                        return {

                            author: {
                                name: "Juan Pablo",
                                lastname: "Lepore"
                            },

                            // as I did before, I've added an extra 'pictureFull' field to render an image with a bigger resolution 
                            item: {
                                id: itemData.id,
                                title: itemData.title,
                                price: {
                                    currency: itemData.currency_id,
                                    amount: Math.trunc(itemData.price),
                                    decimals: (itemData.price + "").indexOf(".") != -1 ? (itemData.price + "").split(".")[1] : 0,
                                },
                                picture: itemData.thumbnail,
                                pictureFull: itemData.thumbnail.replace(/(-I)(\.[\w\d_-]+)$/i, '-F$2'),
                                condition: itemData.condition,
                                free_shipping: itemData.shipping.free_shipping,
                                sold_quantity: itemData.sold_quantity,
                                description: itemDescription.plain_text
                            }
                            
                        }
                    }

                })
            )
            .then(result => res.send(result))
            .catch(errors => {
                console.error(errors);
            });
    }
}