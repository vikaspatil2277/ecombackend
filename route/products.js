const express = require("express")
// const { addData, allData, electronics, cellPhonesAndAccessories, computersAndAccessories, headphones, televisionAndVideo, smartHome, fashion, mensFashion, womensFashion, kidsFashion, homeAndKitchen, kitchenAndDining, furniture, homeDecor, storageAndOrganization, healthAndPersonalCare, householdSupplies, beautyToolsAndAccessories, dietAndNutrition, personalCareAppliances, sports, cricket, badminton, football, yoga, campingAndHiking, strengthTraining, books, fictionBooks, editorsCorner, indianLanguageBooks, schoolTextbooks } = require("../controller/products")
const {data} = require("../controller/products")
const productsRouter = express.Router();

// productsRouter.post('/adddata', addData)
// productsRouter.get('/alldata', allData)
// productsRouter.get('/electronics', electronics)
productsRouter.get('/electronics', data)
// productsRouter.get('/cellphonesandaccessories', cellPhonesAndAccessories)
// productsRouter.get('/computersandaccessories', computersAndAccessories)
// productsRouter.get('/headphones', headphones)
// productsRouter.get('/televisionandvideo', televisionAndVideo)
// productsRouter.get('/smarthome', smartHome)
// productsRouter.get('/fashion', fashion)
// productsRouter.get('/mensfashion', mensFashion)
// productsRouter.get('/womensfashion', womensFashion)
// productsRouter.get('/kidsfashion', kidsFashion)
// productsRouter.get('/homeandkitchen', homeAndKitchen)
// productsRouter.get('/kitchenanddining', kitchenAndDining)
// productsRouter.get('/furniture', furniture)
// productsRouter.get('/homedecor', homeDecor)
// productsRouter.get('/storageandorganization', storageAndOrganization)
// productsRouter.get('/healthandpersonalcare', healthAndPersonalCare)
// productsRouter.get('/householdsupplies', householdSupplies)
// productsRouter.get('/beautytoolsandaccessories', beautyToolsAndAccessories)
// productsRouter.get('/dietandnutrition', dietAndNutrition)
// productsRouter.get('/personalcareappliances', personalCareAppliances)
// productsRouter.get('/sports', sports)
// productsRouter.get('/cricket', cricket)
// productsRouter.get('/badminton', badminton)
// productsRouter.get('/football', football)
// productsRouter.get('/yoga', yoga)
// productsRouter.get('/campingandhiking', campingAndHiking)
// productsRouter.get('/strengthtraining', strengthTraining)
// productsRouter.get('/books', books)
// productsRouter.get('/fictionbooks', fictionBooks)
// productsRouter.get('/editorscorner', editorsCorner)
// productsRouter.get('/indianlanguagebooks', indianLanguageBooks)
// productsRouter.get('/schooltextbooks', schoolTextbooks)

module.exports = productsRouter 