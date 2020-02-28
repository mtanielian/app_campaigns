global.config = {
    host : {
        ip : '127.0.0.1',
        port : 3000
    },
    db : {
        "host" : "localhost",
        "port" : "3306",
        "user" : "umysql",
        "pass" : "root",
        "name" : "campaigns"    
    },
    pass : {
        salt_rounds : 8,
        hash : "!#__SERVER::APP::NOTIFICACIONES::CAMPAÑAS__#!_"
    },
    jwt : {
        secret : "AppNotCamp2020!!_##_!!",
        expires : "7d"
    }

}