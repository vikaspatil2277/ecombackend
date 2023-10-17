const express = require("express")
const {
     addData, allData, 
    //  electronics,
      // cellPhonesAndAccessories,
    //  computersAndAccessories, headphones,
       television, 
      fashion, mensFashion, womensFashion, kidsFashion,
       laptops, 
       phones} = require("../controller/products")
const productsRouter = express.Router();

productsRouter.post('/adddata', addData)
productsRouter.get('/alldata', allData)
// productsRouter.get('/electronics', electronics)
// productsRouter.get('/cellphonesandaccessories', cellPhonesAndAccessories)
// productsRouter.get('/computersandaccessories', computersAndAccessories)

productsRouter.get('/television', television)

productsRouter.get('/fashion', fashion)
productsRouter.get('/mensfashion', mensFashion)
productsRouter.get('/womensfashion', womensFashion)
productsRouter.get('/kidsfashion', kidsFashion)

productsRouter.get('/laptops', laptops)
productsRouter.get('/phones', phones)

module.exports = productsRouter 