const userModel = require('../models/user')
const jwt = require('jsonwebtoken')

class Login {
    constructor(userModel) {
        this.userModel = userModel
    }

    loginUser(req, res) {
        this.userModel.login(req.body, (response)=> {
            if (response.error) {
                res.json(error)
            } else {
                let jwtUser = jwt.sign(
                    { user : response.user }, 
                    config.jwt.secret, 
                    { expiresIn : config.jwt.expires}
                )

                res.json(jwtUser)
            }
        });

    }

}



module.exports = new Login(userModel)