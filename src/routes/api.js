/*
* Author: Md. Sholayman
* Description: This is the file that contains all the api end-point of the app
* Date : 23-24-25 December 2023
* */

const express = require("express");
const router = express.Router();

//importing controllers
const ProductControllers = require("../controllers/ProductControllers")
const UserControllers = require("../controllers/UserControllers");
const WishControllers = require("../controllers/WishControllers");
const CartControllers = require("../controllers/CartControllers");

//importiCartControllersg verification middleware

const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");


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
router.get('/UserLogout' , AuthVerifyMiddleware, UserControllers.UserLogout);
router.post('/CreateProfile' ,AuthVerifyMiddleware, UserControllers.CreateProfile);
router.post('/UpdateProfile' ,AuthVerifyMiddleware, UserControllers.UpdateProfile);
router.get('/ReadProfile',AuthVerifyMiddleware, UserControllers.ReadProfile);

//Wish Related api end-point
router.post('/SaveWishList' , AuthVerifyMiddleware , WishControllers.SaveWishList);
router.post('/RemoveWishList' , AuthVerifyMiddleware , WishControllers.RemoveWishList);
router.get('/WishList' , AuthVerifyMiddleware , WishControllers.WishList);

//Cart Related api end-point
router.post('/SaveCartList' , AuthVerifyMiddleware , CartControllers.SaveCartList );
router.post('/UpdateCartList/:cartID' , AuthVerifyMiddleware , CartControllers.UpdateCartList )
router.post('/RemoveCartList' , AuthVerifyMiddleware , CartControllers.RemoveCartList );
router.get('/CartList' , AuthVerifyMiddleware , CartControllers.CartList );

module.exports = router;
