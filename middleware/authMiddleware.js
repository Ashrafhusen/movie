const jwt = require('jsonwebtoken')
const User = require('../models/User')


exports.protect = async (req, res , next) => {
    let token  ;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];


    } else if (req.cookies.token) {
        token = req.cookies.token;

    } else if (req.query.token){
        token = req.query.token;
 
    }

    if(!token) {
        return res.status(401).json({message : "Not Authorized , no token"});
    }

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        console.error("Token Verification Failed ", error);
        res.status(401).json({message : "Not Authorized"});
        
    }

}

exports.isAdmin = (req , res , next) => {
    if(req.user && req.user.role === 'admin') {
        next();
    }else {
        res.status(403).json({message : " Not authorized as admin"})
    }

};