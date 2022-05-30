const authService = require('../services/auth.service');

const productCreationValidator = (req,res,next) => {
    
    
    try{
    if(!req.body.name || !req.body.price || !req.body.categoryId){
        return res.json({
            message: 'Some Fields Missing',
            success: false,
            code:400,
        
        });

    } next();
}
catch(err){
    console.log(err);
}
   
}



const categoryCreationValidator = (req,res,next) => {
    try{
    if(!req.body.name){
        return res.json({
            message: 'Some Fields Missing',
            success: false,
            code:400,
        
        });

    } next();
}
catch(err){
    console.log(err);
}
   
}


const newUserSignupValidator =(req,res,next) => {
   try{
    if(!req.body.email || !req.body.password || !req.body.username){
        return res.json({
            message:' Credentials Missing',
            success: false,
            code:400
        })
    }else{
    next();

    }
}
catch(err){
    console.log(err)
}
}

const userSigninValidator = (req,res,next) => {
    try{
        if(!req.body.email || !req.body.password){
            return res.json({
                message:' Credentials Missing',
                success: false,
                code:400
            })
        }else{
        next();
    
        }
    }
    catch(err){
        console.log(err)
    }
}



module.exports = {
   productCreationValidator,

   categoryCreationValidator,

   newUserSignupValidator,

   userSigninValidator

  
}