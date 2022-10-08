const { productControllers } = require('./products.controller')

const getAllProducts = (req, res) => {
    productControllers.getAllProducts()
        .then( data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({msg: err.message})
        })
}

const getAllProductById = (req, res) => {
    const id = req.params.id
    productControllers.getAllProductById(id)
        .then( data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({msg: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(404).json({msg: err.message})
        })
}

const postProduct = (req, res) => {
    const body = req.body
    if (body.name && body.description && body.category && body.price && body.isAvailable) {
        productControllers.createProduct(data)
            .then(response => {
                res.status(201).json(response)    
            })
            .catch(err => {
                res.status(400).json({msg: err.message})
            })
    } else {
        res.status(400).json({msg: 'Missing DATA'})
    }
}

const pathProduct = (req, res) => {
    const id = req.params.id
    const { name, category, price, isAvailable } = req.body

    productControllers.editProduct(id, {name, category, price, isAvailable})
        .then((response) => {
            if (response[0]) {
                res.status(200).json({ msg: `Product with id: ${id}, edited successfully` })
            } else {
                res.status(400).json({msg: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({msg: err.message})
        })
}

const deleteProduct = (req, res) => {
    const id = req.params.id
        productControllers.deleteProduct(id)
            .then((response) => {
                if (response){
                    res.status(204).json()
                } else {
                    res.status(400).json({msg: 'Invalid ID'})
                }
            })
            .catch(err => res.status(400).json(err))
}

module.exports = {
    getAllProducts, 
    getAllProductById, 
    postProduct, 
    pathProduct,
    deleteProduct
}

