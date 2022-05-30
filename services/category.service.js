const Category = require('../models/index').category;


const getAllCategories =async ()=>{

    const categories = await Category.findAll();
                       return categories;

};


const createCategories = async (data)=>{
    try{
    const newCategory = await Category.create({
                                name: data.name,
                                description: data.description,
                                createdAt: new Date(),
                                updatedAt: new Date()
                         });
    return newCategory;
                        }
                        catch(err){
                            console.log(err);
                        }
};



const deleteCategories = async (categoryId)=>{
    try{
                        await Category.destroy({
                             where: {
                                    id: categoryId
                                }
                            });
                        }
                        catch(err){
                            console.log(err);
                        }
};



const getCategoriesById = async (categoryId) =>{
    try{
    const response = await Category.findOne ({
                     where:{
                          id: categoryId
                        }
                    });

    return response;
                }
                catch(err){
                    console.log(err);
                }
};



const getCategoriesByName= async (categoryName) =>{
    try{
    const response = await Category.findOne ({
                            where:{
                                name: categoryName
                            }
                        });

    return response;
                    }
                    catch(err){
                        console.log(err);
                    }
};



const updateCategories = async (categoryId,data) => {
    try{
    const updatedCategory = await Category.update(
                                        data,
                                        {where: {id: categoryId} 
                                    });
    return updatedCategory;
                                }
                                catch(err){
                                    console.log(err);
                                }
};



module.exports ={


    getAllCategories,

    createCategories,

    deleteCategories,

    getCategoriesById,

    getCategoriesByName,
    
    updateCategories


};