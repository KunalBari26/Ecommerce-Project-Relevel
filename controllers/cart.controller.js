const cartService = require('../services/cart.service');



const addProductsToCart = async (req, res) => {
    let cart = await cartService.getCartByUser(req.body.userId, 'creation');
    if(!cart) {
        cart = await cartService.createCart(req.body.userId);
    }
    
    const response = await cartService.addProductToCart({
        productId: req.body.productId,
        cartId: cart.id
    });
    if(!response) {
        return res.json({
            code: 500,
            success: false,
            message: 'Cannot add product to cart'
        });
    }
    return res.json({
        code: 200,
        success: true,
        message: 'Added product to cart'
    });

}



const removeProductsFromCart = async (req, res) => {
    let cart = await cartService.getCartByUser(req.body.userId, 'creation');
    if(!cart) {
        return res.json({
            code: 500,
            success: false,
            message: 'No product in the cart'
        });
    }
    
    const response = await cartService.removeProductFromCart({
        productId: req.body.productId,
        cartId: cart.id
    });
    if(!response) {
        return res.json({
            code: 500,
            success: false,
            message: 'Cannot remove product from cart'
        });
    }
    return res.json({
        code: 200,
        success: true,
        message: 'Removed product from cart'
    });

}



const updateCartStatus = async (req, res) => {
   
    const response = await cartService.updateCartStatus(req.body.cartId, req.body.status);
    
    return res.json({
        code: 201,
        message: 'Successfully updated cart status',
        data: response,
        success: true
    })
}



module.exports = {
    addProductsToCart,

    removeProductsFromCart,
    
    updateCartStatus
}