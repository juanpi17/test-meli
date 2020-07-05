// Import json with list of users
const users = require('../data/users.json')

// Create controller for GET request to '/users/all'
exports.usersGetAll = async (req, res) => {
  // res.send('There will be dragons, not posts.')
  res.json(users)
}

exports.usersGetOne = async ({ params: { id } }, res, next) => {

  res.json({name: 'juanpi'})
  // try {
  //   const [{ data: itemDetail }, { data: itemDescription }] = await Promise.all(
  //     [
  //       meliRequest.get(`items/${id}`),
  //       meliRequest.get(`items/${id}/description`)
  //     ]
  //   )

  //   const { data: itemCategory } = await meliRequest.get(
  //     `/categories/${itemDetail.category_id}`
  //   )

  //   res.send(
  //     parseItemDetailResponse({ itemDetail, itemDescription, itemCategory })
  //   )
  // } catch (err) {
  //   next(err.data)
  // }
}


// exports.usersGetOne = async ({ params: { id } }, res, next) => {
//   try {
//     const [{ data: itemDetail }, { data: itemDescription }] = await Promise.all(
//       [
//         meliRequest.get(`items/${id}`),
//         meliRequest.get(`items/${id}/description`)
//       ]
//     )

//     const { data: itemCategory } = await meliRequest.get(
//       `/categories/${itemDetail.category_id}`
//     )

//     res.send(
//       parseItemDetailResponse({ itemDetail, itemDescription, itemCategory })
//     )
//   } catch (err) {
//     next(err.data)
//   }
// }