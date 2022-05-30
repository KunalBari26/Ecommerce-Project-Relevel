const productController       =  require ('../controllers/product.controller');
const createProductValidator  =  require('../middlewares/validators');
const authenticationValidator =  require('../middlewares/authentication.validators');
const authorisationValidator  =  require('../middlewares/authorisation.validators');



const routes =(app)=> {

    app.get('/ecomm/api/v1/products',productController.getAllProducts),


    app.get('/ecomm/api/v1/products/:id',productController.getProductById),

    app.get('/ecomm/api/v1/productname',productController.getProductByName)



    app.post('/ecomm/api/v1/products',authenticationValidator.isAuthenticated,
                                      authorisationValidator.adminSellerAccess,
                                      createProductValidator.productCreationValidator, 
                                      productController.createProduct),

    app.delete('/ecomm/api/v1/delete_products',authenticationValidator.isAuthenticated,
                                                authorisationValidator.adminSellerAccess,
                                                productController.deleteProduct),
                                                
    app.put('/ecomm/api/v1/products/:id',authenticationValidator.isAuthenticated,
                                              authorisationValidator.adminSellerAccess,
                                                productController.updateProduct)


   


}



module.exports =routes;