/*
* Author: Md. Sholayman
* Description: This is the file that contains all the api end-point of the app
* Date : 23-24-25 December 2023
* */

const express = require("express");
const router = express.Router();

//importing controllers
const ProductControllers = require("../controllers/ProductControllers")
const UserControllers = require("../controllers/UserControllers")


//Product related api end-point
router.get('/ProductBrandList' , ProductControllers.ProductBrandList);
router.get('/ProductCategoryList' , ProductControllers.ProductCategoryList);
router.get('/ProductSliderList' , ProductControllers.ProductSliderList);
router.get('/ProductListByBrand/:BrandID' , ProductControllers.ProductListByBrand);
router.get('/ProductListByCategory/:CategoryID' , ProductControllers.ProductListByCategory);
router.get('/ProductListBySimilar/:CategoryID' , ProductControllers.ProductListBySimilar);
router.get('/ProductListByKeyword/:Keyword' , ProductControllers.ProductListByKeyword);
router.get('/ProductListByRemark/:Remark' , ProductControllers.ProductListByRemark);
router.get('/ProductDetails/:ProductID' , ProductControllers.ProductDetails);
router.get('/ProductReviewList/:ProductID' , ProductControllers.ProductReviewList);

//User related api end-point
router.get('/UserOTP/:email' , UserControllers.UserOTP);
router.get('/VerifyLogin/:email/:otp' , UserControllers.VerifyLogin);
router.get('/UserLogout' , UserControllers.UserLogout);
router.post('/CreateProfile' , UserControllers.CreateProfile);
router.post('/UpdateProfile' , UserControllers.UpdateProfile);
router.get('/ReadProfile ', UserControllers.ReadProfile);

module.exports = router;
