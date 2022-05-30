const cartController = require('../controllers/cart.controller');
const cartValidator  = require('../middlewares/cart.validators');

const routes = (app) => { 
   
    app.post('/ecomm/api/v1/addProductToCart', cartValidator.additionValidator,
                                                    cartController.addProductsToCart);

    app.delete('/ecomm/api/v1/removeProductFromCart', cartValidator.removingValidator,
                                                    cartController.removeProductsFromCart);
    
    app.patch('/ecomm/api/v1/updateCartStatus', cartValidator.updationValidator,
                                                cartController.updateCartStatus);
}

module.exports = routes; 