/*
* Author: Md. Sholayman
* Description: This is the file that contains all the services for the controllers of the Product.
* Basically in this file We will complete all the query for product controllers.
* Date : 23 December 2023
* */

//importing all the necessary models
const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductDetailsModel = require("../models/ProductDetailsModel");

const BrandListService =async (req) =>{
  try{
      let data = await BrandModel.find({});
      return {status:"success" , data:data}
  }catch (e) {
      return {status:"fail" , data:e}.toString() ;
  }
}

const CategoryListService =async (req,res) =>{
    try{
        let data = await CategoryModel.find({});
        return {status:"success" , data:data}
    }catch (e) {
        return {status:"fail" , data:e}.toString() ;
    }
}

const SliderListService =async (req,res) =>{
    try{
        let data = await ProductSliderModel.find({});
        return {status:"success" , data:data}
    }catch (e) {
        return {status:"fail" , data:e}.toString() ;
    }
}

const ListByBrandService =async (req,res) =>{

}

const ListByCategoryService =async (req,res) =>{

}

const ListBySimilarService =async (req,res) =>{

}

const ListByKeywordService =async (req,res) =>{

}
const ListByRemarkService =async (req,res) =>{

}

const DetailsService =async (req,res) =>{

}

const ReviewListService =async (req,res) =>{

}

//exporting all the services for the product controllers
module.exports ={ BrandListService , CategoryListService, SliderListService , ListByBrandService ,
    ListByCategoryService , ListBySimilarService , ListByKeywordService , ListByRemarkService ,
DetailsService , ReviewListService };