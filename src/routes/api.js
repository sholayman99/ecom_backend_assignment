/*
* Author: Md. Sholayman
* Description: This is the file that contains all the api end-point of the app
* Date : 23 December 2023
* */

const express = require("express");
const router = express.Router();

//importing controllers
const ProductControllers = require("../controllers/ProductControllers")


//api end-point  for products
router.get('/ProductBrandList' , ProductControllers.ProductBrandList)
router.get('/ProductCategoryList' , ProductControllers.ProductCategoryList)
router.get('/ProductSliderList' , ProductControllers.ProductSliderList)
router.get('/ProductListByBrand/:BrandID' , ProductControllers.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID' , ProductControllers.ProductListByCategory)
router.get('/ProductListBySimilar/:CategoryID' , ProductControllers.ProductListBySimilar)
router.get('/ProductListByKeyword/:Keyword' , ProductControllers.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark' , ProductControllers.ProductListByRemark)
router.get('/ProductDetails/:ProductID' , ProductControllers.ProductDetails)
router.get('/ProductReviewList/:ProductID' , ProductControllers.ProductReviewList)


module.exports = router;
