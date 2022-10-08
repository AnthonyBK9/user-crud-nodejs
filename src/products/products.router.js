const router = require('express').Router()
const producServices = require('./products.services')


router.get('/', producServices.getAllProducts)
    // .get(producServices.getAllProducts)
    // .post(producServices.postProduct)

// router.route('/:id')
//     .get(producServices.getAllProductById)
//     .patch(producServices.pathProduct)
//     .delete(producServices.deleteProduct)

module.exports = router