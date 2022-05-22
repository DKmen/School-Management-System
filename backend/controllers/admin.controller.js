const bcrypt = require('bcryptjs')
const Admin = require('../models/admin')
const getError = require("../utils/dbErrorHandle");

module.exports = {

    loginAdmin : async (req, res) => {
        try {
            const username = req.body.username
            const password = req.body.password
            const encryptedusername = await bcrypt.hash("adminusername",8);
            const encryptedpass = await bcrypt.hash("adminpass",8);
            console.log("we are in admin login encrypted ")
            const ispassMatch = await bcrypt.compare(password,encryptedpass);
            const isuseMatch = await bcrypt.compare(username,encryptedusername);
            console.log("we are in admin login and token is ",isuseMatch,"  ",ispassMatch)
            if(!ispassMatch || !isuseMatch){
                return res.status(400).json({
                    error: true,
                    message: 'unable to login'
                })
            }
            else{
                const token = await Admin.generateAuthToken(encryptedusername,encryptedpass)
                return res.status(200).json({
                    error : false,
                    token : token
                })
            }
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Unable to login"
            })
        }
    }
}