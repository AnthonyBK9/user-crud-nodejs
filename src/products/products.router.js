const router = require('express').Router()
const producServices = require('./products.services')


router.route('/product')
    .get(producServices.getAllProducts)
    .post(producServices.postProduct)

router.route('/product/:id')
    .get(producServices.getProductById)
    .patch(producServices.pathProduct)
    .delete(producServices.deleteProduct)

module.exports = router