
const authService  = require('../services/auth.service');
const Roles        = require('../models/index').Role;


const isAdmin = async(req) => {

    
    const user = await authService.getUser(req);
    console.log("the user is",user);
    try{
      const adminRole = await Roles.findOne({
                             where : {
                                    id: 1
                                 }
                            })
    return await user.hasRole(adminRole);
    }
    catch(err){
        console.log(err);
    }
}  



const isSeller = async (req) => {
    const user = await authService.getUser(req);
    try{
    const sellerRole = await Roles.findOne({
                             where: {
                                    id: 2
                            }
                        })

    return await user.hasRole(sellerRole);
                    }
                    catch(err){
                        console.log(err);
                    }
}




const  adminSellerAccess = async (req, res, next) => {
    try{
        
    const isUserAdmin = await isAdmin(req.body.email);
    const isUserSeller = await isSeller(req.body.email);
    if(isUserAdmin || isUserSeller) {
            next();
    } else {
        return res.json({
            message: 'User unauthorized',
            success: true,
            code: 401
        })
         }
        }
        catch(err){
            console.log(err);
        }
}




const onlyAdminAccess= async (req, res, next) => {
    try{
    const isUserAdmin = await isAdmin(req.body.email);
    
    
    if(isUserAdmin) {
         
            next();
    } else {
        return res.json({
            message: 'User unauthorized',
            success: true,
            code: 401
        })
         }
        }catch(err){
            console.log(err)
        }

}




module.exports = {
    adminSellerAccess,
    onlyAdminAccess
}