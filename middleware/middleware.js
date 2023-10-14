const secretkey = "vikaspatil";
const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const bearerToken = req.headers["authorization"]
    if (bearerToken === undefined) {
        res.send("Unauthorized Person")
    }
    const token = bearerToken.split(" ")[1]
    console.log(bearerToken)
    jwt.verify(token, secretkey);
    next();
}

module.exports = verifyUser;