const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


adminSchema.statics.generateAuthToken = async function (username,epassword) {
    const token =await jwt.sign({ username: username,password:epassword }, "thisisAdmin",{expiresIn:"1d"});
    return token
}

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin