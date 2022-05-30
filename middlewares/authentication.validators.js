const authService = require('../services/auth.service');



const isAuthenticated = (req ,res ,next) => {
       let token = req.headers["x-access-token"];
       try{
    if(!token){
        res.json({
            message:'Token Missing',
            success: false,
            code: 403,


        })
    }
}
catch(err){
    console.log(err);
}
    const response = authService.verifyToken(token);
    try{
    if(!response) {
        
        res.json({
            message:'Token Not Verified',
            success: false,
            code: 403,


        });
    
    }
    }
    catch(err){
    console.log(err)
    }
    
    try{
    const user = authService.getUserById(response.id);
    req.user = user.id ;
    
    next();
    }
    catch(err){
        res.json({
            message:'User Not Verified',
            success: false,
            code: 401,


        })
    }
}



module.exports = {
    isAuthenticated
    
}