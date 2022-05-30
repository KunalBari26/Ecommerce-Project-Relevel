const categoryService =require('../services/category.service');


const getCategory =async (req,res)=>{
    try{
    const response = await categoryService.getAllCategories();
    return res.json({
        message: 'Successfully Fetched Category',
        success:true,
        code:200,
        data: response
    });
}
catch(err){
    console.log(err);
}
};


const createCategory =async (req,res)=>{
    try{
    if(!req.body.name){
        return res.json({
            message: 'Name Cannot Be Empty',
            success: false,
            code:400,
        
        });
    }
} catch(err){
    console.log(err);
}
    try{
    const response = await categoryService.createCategories(req.body);
    return res.json({
        message: 'Successfully Created Category',
        success:true,
        code:201,
        data: response
    });
}
catch(err){
    console.log(err);
}
}



const deleteCategory= async (req,res) =>{
    try{
    await categoryService.deleteCategories (req.params.id);
    return res.json({
        message: 'Successfully Deleted Category',
        success:true,
        code:200
        
    });
}
catch(err){
    console.log(err);
}
}



const getCategoryById = async (req,res) =>{
    try{
    const response = await categoryService.getCategoriesById(req.params.id);
    return res.json({
        message: 'Successfully Fetched Category',
        success:true,
        code:201,
        data: response
    }); 
}
catch(err){
    console.log(err);
}
}



const getCategoryByName= async (req,res) =>{
    try{
    const response = await categoryService.getCategoriesByName(req.query.name);
    return res.json({
        message: 'Successfully Fetched Category',
        success:true,
        code:201,
        data: response
    }); 
}
catch(err){
    console.log(err);
}
}




const updateCategory = async (req,res) =>{
    try{
    const response = await categoryService.updateCategories(req.params.id, req.body) ;
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



module.exports ={
    getCategory,

    createCategory,

    deleteCategory,

    getCategoryById,

    getCategoryByName,
    
    updateCategory
    
}