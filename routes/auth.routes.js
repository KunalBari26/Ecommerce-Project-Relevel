const authController          =  require('../controllers/auth.controller');
const authenticationValidator =  require ('../middlewares/authentication.validators');
const authorisationValidator  = require('../middlewares/authorisation.validators');
const validators  = require('../middlewares/validators')



const routes = (app) =>{
    app.post('/ecomm/api/v1/user_signup',validators.newUserSignupValidator,
                                         authController.signup);

    app.post('/ecomm/api/v1/user_signin',validators.userSigninValidator,
                                         authController.signIn);

    app.patch('/ecomm/api/v1/user/:userId', authController.addRoleToUser);

    app.get('/ecomm/api/v1/user/:userId/getRoles', authenticationValidator.isAuthenticated,
                                                    authorisationValidator.onlyAdminAccess,
                                                     authController.getRolesForUsers);


}



module.exports=routes;