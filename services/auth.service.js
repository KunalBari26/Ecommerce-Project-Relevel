const User   = require('../models/index').User ;
const Role   = require('../models/index').Role;
const bcrypt = require('bcryptjs');
const res    = require('express/lib/response');
const jwt    = require("jsonwebtoken");




const singUp =async (data) =>{
    try{  
        
        const user = await User.create({
                     email: data.email ,
                     password: data.password,
                     username: data.username
                    });

        const customerRole = await Role.findOne({
                             where: {
                             name: 'customer'
                                   }
                             });


        user.addRole(customerRole);
                return user;
    }
    catch(err){

        console.log(err);
    }
}



const addRoleToUser =async (userId,roleId) =>{

    try{

    const user = await User.findOne({
                 where: {
                       id: userId,
            
                    }
                });

    const  role = await Role.findOne({
                  where: {
                         id: roleId
                        }
                    });

    user.addRole(role);

    return user;
                }
                catch(err){
                    console.log(err);
                }

}



const removeRoleFromUser = async (userId,roleId) =>{
    try{
    const user = await User.findOne({
                 where: {
                        id:userId,
            
                     }
                });

     const role = await Role.findOne({
                    where: {
                            id: roleId
                        }
                    });

    user.removeRole(role);

    return user;
                }
                catch(err){
                    console.log(err);
                }
}



const getRolesForUser = async (userId) => {
    try{
    const user = await User.findOne({
                    where: {
                            id:userId,
           
                        }
                    });

    const  role = await user.getRoles();

    return role;
                }
                catch(err){
                    console.log(err);
                }

}



const getUser = async (email) =>{
    try{
    const user = await User.findOne({
                    where: {
                        email: email
                    }
                });

    return user;
            }
            catch(err){
                console.log(err);
            }
}




const getUserById = async (userId) =>{
    try{
    const user = await User.findOne({
                    where: {
                        id: userId
                    }
                });

    return user;
            }
            catch(err){
                console.log(err);
            }
}




const checkPassword = (userPassword,encryptedPassword) =>{
   
    return  bcrypt.compareSync(userPassword,encryptedPassword);

}



const createToken = (user) => {
       
    return jwt.sign({id: user.id, email: user.email},'ecomm',{expiresIn : '24h'});

}



const verifyToken = (token) => {
    try {
        const response = jwt.verify(token, 'ecomm');
                        return response;
    } catch (err) {
        console.log('Token not verified');
        console.log(err);
    }
}



module.exports = {
    singUp,

    getUser,

    getUserById,

    checkPassword,

    createToken,

    verifyToken,

    addRoleToUser,

    removeRoleFromUser,

    getRolesForUser
}