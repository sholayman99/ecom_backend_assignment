/*
* Author: Md. Sholayman
* Description: This is the file that contains all the services for the controllers of the Product.
* Basically in this file We will complete all the query for product controllers.
* Date : 23 December 2023
* */

//importing necessary modules
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId ;

//importing all the necessary models
const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ReviewModel = require("../models/ReviewModel");


// Query for the Product Brand List
const BrandListService =async () =>{

  try{
      let data = await BrandModel.find({});
      return {status:"success" , data:data}
  }
  catch (e) {
      return {status:"fail" , data:e}.toString() ;
  }

}

// Query for the Product Category List
const CategoryListService =async () =>{

    try{
        let data = await CategoryModel.find({});
        return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"fail" , data:e}.toString() ;
    }

}

// Query for the Product Slider List
const SliderListService =async () =>{

    try{
        let data = await ProductSliderModel.find({});
        return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"fail" , data:e}.toString() ;
    }

}

// Query for the  List By Brand
const ListByBrandService =async (req) =>{

    try{
      let BrandID =  new ObjectId(req.params.BrandID) ;
      let matchStage = { $match:{brandID:BrandID}};
      let joinWithBrandStage = { $lookup : {
         from:"brands" , foreignField:"_id" , localField:"brandID" , as:"brand"
          }};
      let unwindBrandStage = { $unwind : "$brand" };
      let joinWithCategoryStage = { $lookup : {
                from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"
            }};
      let unwindCategoryStage = { $unwind : "$category" };
      let projectionStage = { $project:{
              "brand._id":0 , "category._id":0 , "categoryID":0 , "brandID":0
          }};
      let data = await ProductModel.aggregate([
          matchStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,projectionStage
      ]);

      return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"fail" , data:e}.toString() ;
    }

}

// Query for the  List By Category Product
const ListByCategoryService =async (req) =>{

    try{
        let CategoryID =  new ObjectId(req.params.CategoryID) ;
        let matchStage = { $match:{categoryID:CategoryID}};
        let joinWithBrandStage = { $lookup : {
                from:"brands" , foreignField:"_id" , localField:"brandID" , as:"brand"
            }};
        let unwindBrandStage = { $unwind : "$brand" };
        let joinWithCategoryStage = { $lookup : {
                from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"
            }};
        let unwindCategoryStage = { $unwind : "$category" };
        let projectionStage = { $project:{
                "brand._id":0 , "category._id":0 , "categoryID":0 , "brandID":0
            }};
        let data = await ProductModel.aggregate([
            matchStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,projectionStage
        ]);

        return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"fail" , data:e}.toString() ;
    }

}

// Query for Products List for a Remark
const ListByRemarkService =async (req) =>{

    try{
        let Remark =  req.params.Remark ;
        let matchStage = { $match:{remark:Remark}};
        let joinWithBrandStage = { $lookup : {
                from:"brands" , foreignField:"_id" , localField:"brandID" , as:"brand"
            }};
        let unwindBrandStage = { $unwind : "$brand" };
        let joinWithCategoryStage = { $lookup : {
                from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"
            }};
        let unwindCategoryStage = { $unwind : "$category" };
        let projectionStage = { $project:{
                "brand._id":0 , "category._id":0 , "categoryID":0 , "brandID":0
            }};
        let data = await ProductModel.aggregate([
            matchStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,projectionStage
        ]);

        return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"fail" , data:e}.toString() ;
    }

}

//Query for the Similar Products List
const ListBySimilarService =async (req) =>{

    try{
        let CategoryID =  new ObjectId(req.params.CategoryID) ;
        let matchStage = { $match:{categoryID:CategoryID}};
        let limitStage = {$limit:15}
        let joinWithBrandStage = { $lookup : {
                from:"brands" , foreignField:"_id" , localField:"brandID" , as:"brand"
            }};
        let unwindBrandStage = { $unwind : "$brand" };
        let joinWithCategoryStage = { $lookup : {
                from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"
            }};
        let unwindCategoryStage = { $unwind : "$category" };
        let projectionStage = { $project:{
                "brand._id":0 , "category._id":0 , "categoryID":0 , "brandID":0
            }};
        let data = await ProductModel.aggregate([
            matchStage,limitStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,
            projectionStage
        ]);

        return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"fail" , data:e}.toString() ;
    }

}


//Query For The Products List a Keyword
const ListByKeywordService =async (req) =>{

    try{
      let Keyword = req.params.Keyword ;
      let searchRegex = {  $regex : Keyword  , $options:"i" } ;
      let searchParams = [{ title: searchRegex} , { shortDes:searchRegex }];
      let searchQuery = { $or:searchParams };

      let matchStage = {$match:searchQuery};
      let joinWithBrandStage = { $lookup : {
                from:"brands" , foreignField:"_id" , localField:"brandID" , as:"brand"
            }};
      let unwindBrandStage = { $unwind : "$brand" };
      let joinWithCategoryStage = { $lookup : {
                from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"
            }};
      let projectionStage = { $project: {
          "_brand._id":0 , "category._id":0 , "brandID":0 ,"categoryID":0
          }}
      let unwindCategoryStage = { $unwind : "$category" };
      let data =  await ProductModel.aggregate([
          matchStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,
          projectionStage
      ]);

      return {status:"success" , data:data}
    }
    catch (e) {
      return {status:"fail" , data:e}.toString() ;
    }

}

//Query For The Products Details
const DetailsService =async (req) =>{

 try {
     let ProductID = new ObjectId(req.params.ProductID);
     let matchStage = {$match:{_id:ProductID}};

     let joinWithBrandStage = { $lookup : {
             from:"brands" , foreignField:"_id" , localField:"brandID" , as:"brand"
         }};
     let unwindBrandStage = { $unwind : "$brand" };

     let joinWithCategoryStage = { $lookup : {
             from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"
         }};
     let unwindCategoryStage = { $unwind : "$category" };

     let joinWithProductDetailsStage = {$lookup : {
         from:"productdetails" , localField:"_id", foreignField:"productID" , as:"details"
         }};
     let unwindProductDetailsStage = { $unwind:"$details" };

     let projectionStage = { $project:{
             "brand._id":0 , "category._id":0 , "categoryID":0 , "brandID":0, "details._id":0,
             "details.productID":0
         }};

     let data = await ProductModel.aggregate([
         matchStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,
         joinWithProductDetailsStage,unwindProductDetailsStage,projectionStage
     ]);

     return { status:"success" , data:data };
 }
 catch (e) {
     return { status:"fail" , data:e }.toString();
 }

}

//Query For The Product Reviews
const ReviewListService =async (req,res) =>{

   try{
       let ProductID = new ObjectId(req.params.ProductID);
       let matchStage = {$match:{productID:ProductID}};
       let joinWithProfileStage = { $lookup : {
           from:"profiles" , localField:"userID" , foreignField:"userID" , as:"profile"
           }};
       let unwindProfileStage = { $unwind:"$profile" };
       let projectionStage = { $project:{
           "profile.cus_name":1 , "des":1 , "rating":1
           }};
       let data = await ReviewModel.aggregate([
           matchStage,joinWithProfileStage,unwindProfileStage,projectionStage
       ]);

       return { status:"success" , data:data };
   }
   catch (e) {
       return { status:"fail" , data:e }.toString();
   }

}

//exporting all the services for the product controllers
module.exports ={ BrandListService , CategoryListService, SliderListService , ListByBrandService ,
    ListByCategoryService , ListBySimilarService , ListByKeywordService , ListByRemarkService ,
DetailsService , ReviewListService };