const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req,res,next) => {
    const auth = req.headers["authorization"];
    if(!auth){
        res.status(401)
            .json({message: "Unauthorized!JWT token is required"});
    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        res.status(401)
            .json({message: "Unauthorized!JWT token is required"});
    }
}

module.exports = ensureAuthenticated;