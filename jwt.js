const jwt = require('jsonwebtoken');

function createToken(res,user){
    jwt.sign({user}, 'secretkey', {expiresIn:"1000"},(err, token) => {
        res.json({token});
    })
}
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];
        jwt.verify(bearerToken, 'secretkey', async (err, authData) => {
            req.authData = authData;
            next();
        })
    } else {
        res.sendStatus(403);
    }
}
function getJWTTokenDetails(user){
    return {
        "_id": user._id,
        "username": user.username,
        "role": user.role
    }
}
module.exports = {
    createToken,
    verifyToken,
    getJWTTokenDetails
}