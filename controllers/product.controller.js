const productService = require('../services/product.services');



const getAllProducts = async(req,res) => {
    try{
    const response = await productService.getProducts(req.query);
    return res.json({
        message: 'Successfully Fteched All Products',
        success: true,
        code:200,
        data: response
    })
}
catch(err){
    console.log(err);
}
}



const createProduct = async (req,res) =>
{  try{
    const response = await productService.createProducts(req.body);
    
    return res.json({
        message: 'Successfully Created  Products',
        success: true,
        code:201,
        data: response
    })
}
catch(err){
    console.log(err);
}
   
}

const deleteProduct= async (req,res) =>{
    try{
    await productService.deleteProducts (req.body);
    return res.json({
        message: 'Successfully Deleted Product',
        success:true,
        code:200,
        
    });
}
catch(err){
    console.log(err);
}
}



const getProductById = async (req,res) =>{
    try{
    const response = await productService.getProductsById(req.params.id);
    if(!response){
        return res.json({
            message: 'Product Not Found',
            success:true,
            code:400
            
        }); 

    }
    return res.json({
        message: 'Successfully Fetched Product',
        success:true,
        code:201,
        data: response
    }); 
}
catch(err){
    console.log(err);
}
}




const getProductByName= async (req,res) =>{
    try{
    const response = await productService.getProductsByName(req.query.name);
    if(!response){
        return res.json({
            message: 'Product Not Found',
            success:true,
            code:400
            
        }); 

    }
    return res.json({
        message: 'Successfully Fetched Product',
        success:true,
        code:201,
        data: response
    }); 
    
}
catch(err){
    console.log(err);
}
}




const updateProduct = async (req,res) =>{
    try{
    const response = await productService.updateProducts(req.params.id, req.body) ;
    
    return res.json ({
        message: 'Successfully Updated Category',
        success:true,
        code:200,
        data: response
    });
}
catch(err){
    console.log(err);
}
}





module.exports = {
    getAllProducts,
    
    createProduct,

    deleteProduct,

    updateProduct,

    getProductById,

    getProductByName
    
}