const router = require('express').Router()
const productModel = require('../Model/productModel')
const auth = require('../authentication/auth')

// router.post('/add', auth.verifyTokenAdmin, productModel.createNewProduct)
// router.get('/', productModel.getAllProduct)
// router.get('/:id', productModel.getProductById)
// router.put('/:id', auth.verifyTokenAdmin, productModel.uppdateProduct)
// router.delete('/:id', auth.verifyTokenAdmin, productModel.deleteProduct)


router.post('/add',productModel.createNewProduct)
router.get('/', productModel.getAllProduct)
router.get('/:id', productModel.getProductById)
router.put('/:id', productModel.uppdateProduct)
router.delete('/:id',  productModel.deleteProduct)
module.exports = router;

