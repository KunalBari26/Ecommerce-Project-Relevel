const authService = require('../services/auth.service');
const bcrypt      = require('bcryptjs')


const signup = async (req,res) =>{
    try{
    const response = await authService.singUp(req.body);

    return res.json({
        message: ' Successfully Signed Up As A New User',
        success: true,
        code: 201,
        data: response
    });
}
catch(err){
    console.log(err);
}
}

const addRoleToUser = async (req,res) => {
    let user;
    try{
    if(req.query.addRole == 'true') {
        user = await authService.addRoleToUser(req.params.userId, req.body.roleId);
        console.log("inside if")
    } 

    else if(req.query.removeRole == 'true'){
        user = await authService.removeRoleFromUser(req.params.userId, req.body.roleId);
    }

    else{
        return res.json({
        message: 'Action Not Provided',
        success: false,
        code: 400
        })

    }
}
catch(err){
    console.log(err);
}   try{
    if(!user) {

        return res.json({
           
            message: 'Internal server error, something went wrong',
            success: false,
            code: 500,
        });
    }

    return res.json({
        
        message: 'Updated the user',
        success: true,
        code: 200
    });
}
catch(err){
    console.log(err);
}
}

const getRolesForUsers = async (req, res) => {
    try{
    const response = await authService.getRolesForUser(req.params.userId);

    return res.json({
        message: 'Successfully fetched the roles',
        success: true,
        code: 200,
        data: response
    });
}
catch(err){
    console.log(err);
}
}

const signIn = async (req,res) =>{
    
    const user = await authService.getUser(req.body.email);
    try{
    if(!user){
        return res.json({
            message:'User Cannot Be Found',
            success:false,
            code: 404
        });
    } 
    
   if(!authService.checkPassword(req.body.password,user.password)){ 
       return  res.json({
            message:'Incorrect Password',
            success:false,
            code: 401
        });
    }
}
catch(err){
    console.log(err);
}   
    try{
    const token =  await authService.createToken(user);
    return res.json({
        message:'User SignedIn',
        success: true,
        code:200,
        data: token
    }); 
}
catch(err){
    console.log(err);
}   
}


module.exports ={
    signup,

    signIn,

    addRoleToUser,
    
    getRolesForUsers
}