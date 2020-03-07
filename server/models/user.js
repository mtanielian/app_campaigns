const conn = require('../conn/db')
const bcrypt = require('bcrypt')


class User {
    constructor(conn) {
        this.conn = conn
    }

    login (body, callback) {
        let sql = `
            SELECT 
                id, nombre, apellido, cuil, password
            FROM users
            WHERE 
                cuil = '${body.cuil}'
        `
        this.conn.query(sql, (err, rs) => {
            let error = false;
            if (!err && rs && rs.length > 0) {
                let compare = bcrypt.compareSync(config.pass.hash + body.pass, rs[0].password)
                if (compare) {
                    callback({user : rs[0]})
                } else {
                    error = true    
                }
            } else {
                error = true
            }

            if (error)
                callback({error : true, msg : "Invalid User"})
            
        })

    }


    /*
    const salt = bcrypt.genSaltSync(config.pass.salt_rounds);
    const hash = bcrypt.hashSync(config.pass.hash + body.pass, salt);
                
    */

}

const user = new User(conn)
module.exports =  user