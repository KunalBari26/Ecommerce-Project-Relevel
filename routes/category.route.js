const CategoryController      =  require('../controllers/category.controller');
const createCategoryValidator =  require('../middlewares/validators');
const authenticationValidator =  require('../middlewares/authentication.validators');
const authorisationValidator  =  require('../middlewares/authorisation.validators');



 const routes =(app) =>{

    app.get('/ecomm/api/v1/categories',CategoryController.getCategory),

    app.get('/ecomm/api/v1/category/:id',CategoryController.getCategoryById),

    app.get('/ecomm/api/v1/categoryname',CategoryController.getCategoryByName),

    app.post('/ecomm/api/v1/category',authenticationValidator.isAuthenticated,
                                      authorisationValidator.onlyAdminAccess,
                                      createCategoryValidator.categoryCreationValidator,
                                      CategoryController.createCategory),

    app.delete('/ecomm/api/v1/category/:id',authenticationValidator.isAuthenticated,
                                            authorisationValidator.onlyAdminAccess,
                                            CategoryController.deleteCategory),

   
    
    app.put('/ecomm/api/v1/category/:id',authenticationValidator.isAuthenticated,
                                         authorisationValidator.onlyAdminAccess,
                                         CategoryController.updateCategory)
}



 module.exports =routes; 