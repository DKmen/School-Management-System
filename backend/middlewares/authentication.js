const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisisAdmin');
        const isUseMatch = await bcrypt.compare("adminusername",decoded.username);
        const isPassMatch = await bcrypt.compare("adminpass",decoded.password);
        if(isUseMatch && isPassMatch){
            req.token = token
            req.isauth = true
            next()
        }
        else{
            res.status(401).send({error: 'please login again'})
        }
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth