const axios = require('axios');
const { response } = require('express');

// set Mercado Libre's API URL
const meliApiUrl = process.env.MELI_API_URL || 'https://api.mercadolibre.com'
// define items limit when performing a search
const limit = 4;

// Create controller for GET request to '/items/search'
exports.itemsGetAll = async (req, res, next) => {

    // if there is a search string on the "search" param
    const queryString = req.query.search;
    if (queryString) {

        // create entire request
        const searchUrl = `${meliApiUrl}/sites/MLA/search?q=${queryString}&limit=${limit}`;
        axios
            .get(searchUrl)
            .then(response => {
                return {
                    
                    author: {
                        name: "Juan Pablo",
                        lastname: "Lepore"
                    },

                    categories: response.data.filters[0].values[0].path_from_root.map(category => {
                        return category.name
                    }),

                    // we've added 2 extra fields to the mentioned on the description of the test: 
                    // picture2x (to avoid image blurriness), and location (to make it appear on the result list)
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
            .catch(error => {
                next(error.data)
            });
    }
}

exports.itemsGetOne = async ({ params: { id } }, res, next) => {
  res.json({name: 'juanpi'})

//   picture: result.thumbnail.replace(/(-I)(\.[\w\d_-]+)$/i, '-F$2'),
}