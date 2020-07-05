const axios = require('axios');
const { response } = require('express');

// set Mercado Libre's API URL
const meliApiUrl = process.env.MELI_API_URL || 'https://api.mercadolibre.com'
// define items limit when performing a search
const limit = 1;

// Create controller for GET request to '/items/search'
exports.itemsGetAll = async (req, res, next) => {

    // if there is a search string on the "search" param
    const queryString = req.query.search;
    if (queryString) {

        // create entire request
        const searchUrl = `${meliApiUrl}/sites/MLA/search?q=${queryString}&limit=${limit}`;
        axios
            .get(searchUrl)
            .then(response => response.data.results)
            .then(results => {



                res.send(results)
            })
            .catch(error => {
                res.status(error.response.data.status).send(error.response.data);
            });
            // .then(response => res.send(response))

    }
}

exports.itemsGetOne = async ({ params: { id } }, res, next) => {
  res.json({name: 'juanpi'})
}