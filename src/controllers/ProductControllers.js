/*
* Author: Md. Sholayman
* Description: This is the file that contains all the controllers for the products.
* Date : 24 December 2023
* */

//importing services for product
const { BrandListService , CategoryListService, SliderListService , ListByBrandService ,
    ListByCategoryService , ListBySimilarService , ListByKeywordService , ListByRemarkService ,
    DetailsService , ReviewListService } = require("../services/ProductServices") ;


//controller for the Brand List
exports.ProductBrandList =async (req,res) =>{

   let result = await BrandListService();

   if(result['status'] === "success"){
       res.status(200).json(result);
   }else{
       res.status(400).json(result);
   }

}

//controller for the Category List
exports.ProductCategoryList =async (req,res) =>{

    let result = await CategoryListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//controller for the Slider List
exports.ProductSliderList =async (req,res) =>{

    let result = await SliderListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//controller for the List By Brand
exports.ProductListByBrand =async (req,res) =>{

    let result = await ListByBrandService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}

//controller for the List By Category
exports.ProductListByCategory =async (req,res) =>{
    let result = await ListByCategoryService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}

//controller for the List By Remark
exports.ProductListByRemark =async (req,res) =>{

    let result = await ListByRemarkService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}

//controller for the List By Similar
exports.ProductListBySimilar =async (req,res) =>{

    let result = await ListBySimilarService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}

//controller for the List By Keyword
exports.ProductListByKeyword =async (req,res) =>{

    let result = await ListByKeywordService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}

//controller for the Product Details
exports.ProductDetails =async (req,res) =>{

    let result = await DetailsService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}

//controller for the Review List
exports.ProductReviewList =async (req,res) =>{

    let result = await ReviewListService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}