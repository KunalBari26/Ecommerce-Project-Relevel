const Product    = require('../models/index').product;
const Categories = require('../models/index').category;
const {Op}       = require('sequelize');



const getProducts = async(data)=>{
let Products;
try{
     if(!data.categoryId && !data.maxPrice && !data.minPrice)
{ Products = await Product.findAll({include: Categories});
   return Products;
}
else{
    if(data.categoryId){
        Products = await Product.findAll({where:{
            categoryId: data.categoryId
        }});
        return Products;

    }

    else if(!data.categoryId){
        if(data.minPrice && data.maxPrice){
    Products = await Product.findAll({
        where : {
        price: {
            [Op.gte]: data.minPrice,
            [Op.lte]:data.maxPrice

            }
        }
         });

         return Products;
            
        }
        else if(data.minPrice){
            Products = await Product.findAll({
                where: {
                    price: {
                        [Op.gte]: data.minPrice
                    }
                }
            })
            return Products;
        }
        else{
            Products = await Product.findAll({
                where: {
                    price: {
                        [p.lte]: data.maxPrice
                    }
                }
            })
            return Products;

        }

    }
}
}
catch(err){
    console.log(err);
}
}

const createProducts = async (data) =>{
    try{
    const product = await Product.create({
                            name: data.name,
                            description: data.description,
                            price: data.price,
                            categoryId: data.categoryId,
                            createdAt: new Date(),
                            updatedAt: new Date()
                        });
    return product;
                    }
                    catch(err){
                        console.log(err);
                    }
}


const deleteProducts = async (data)=>{
    try{
                        await Product.destroy({
                             where: {
                                    id: data.productId
                                }
                            });
                        }
                        catch(err){
                            console.log(err);
                        }
};

const getProductsById = async (productId) =>{
    try{
    const response = await Product.findOne ({
                     where:{
                          id: productId
                        }
                    });

    return response;
                }
                catch(err){
                    console.log(err);
                }
};



const getProductsByName= async (productName) =>{
    try{
    const response = await Product.findOne ({
                            where:{
                                name: productName
                            }
                        });

    return response;
                    }
                    catch(err){
                        console.log(err);
                    }
};



const updateProducts = async (productId,data) => {
    try{
    const updatedProduct = await Product.update(
                                        data,
                                        {where: {id: productId} 
                                    });
    return updatedProduct;
                                }
                                catch(err){
                                    console.log(err);
                                }
};

module.exports = {
    
    getProducts,

    createProducts,

    deleteProducts,

    updateProducts,

    getProductsById,

    getProductsByName
}