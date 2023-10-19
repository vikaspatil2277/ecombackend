const express = require("express")
const {
     addData, 
     allData, 
     fashion,
     laptops, 
     phones,
     television, 
     mensFashion, 
     womensFashion,
     kidsFashion,
     mixed,
     
    } = require("../controller/products");
const verifyUser = require("../middleware/middleware");


const productsRouter = express.Router();

productsRouter.post('/adddata', addData)
productsRouter.get('/alldata', allData)
productsRouter.get('/mixed', mixed)


productsRouter.get('/television',verifyUser, television)

productsRouter.get('/fashion', fashion)
productsRouter.get('/mensfashion', mensFashion)
productsRouter.get('/womensfashion', womensFashion)
productsRouter.get('/kidsfashion', kidsFashion)

productsRouter.get('/laptops', laptops)
productsRouter.get('/phones', phones)

module.exports = productsRouter 