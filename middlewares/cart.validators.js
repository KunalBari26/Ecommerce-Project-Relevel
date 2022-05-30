const updationValidator = async (req,res,next) => {
    if(!req.body.cartId || !req.body.status){
        return res.json({
           
            message: 'Some Fields Missing',
            success: false,
            code: 400
        })
    }
    next();
}


const additionValidator = async (req,res,next) => {
    if(!req.body.userId || !req.body.productId){
        return res.json({
           
            message: 'Some Fields Missing',
            success: false,
            code: 400
        })
    }
    next();

}

const removingValidator = async (req,res,next)=>{
    if(!req.body.userId || !req.body.productId){
        return res.json({
           
            message: 'Some Fields Missing',
            success: false,
            code: 400
        })
    }
    next();

}


module.exports = {
    updationValidator,

    additionValidator,

    removingValidator
}