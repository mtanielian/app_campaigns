const jwt = require('jsonwebtoken');

const verifyLogin = (req, res, next) => {
    if (!req.headers.authorization) {
        return res
          .status(403)
          .send({msg: "Not authorization"})
        ;
      
    } else {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, config.jwt.secret, (err, data) => {
            if (err) {
                return res
                    .status(403)
                    .send({msg: "Token expired"})
                ;       
            } else {
                req.user = data.user;
                next();
            }
        })
    }
}

module.exports = verifyLogin;