const conn = require('../conn/db')

class Campign {

    constructor (conn) {
        this.conn = conn
    }

    getAll(filters, callback) {
        let sql = `
            SELECT
                usr_campaigns.id, nombre, tipo_ejecucion, fecha_inicio, fecha_alta, 
                GROUP_CONCAT(std_tipo_medios.descripcion SEPARATOR ', ') AS medios
            FROM usr_campaigns
            INNER JOIN rel_campaign_medios ON rel_campaign_medios.id_campaign = usr_campaigns.id
            INNER JOIN std_tipo_medios ON std_tipo_medios.id = rel_campaign_medios.id_tipo_medio
            ${this._getFilters(filters)}
            GROUP BY usr_campaigns.id
        `
        this.conn.query(sql, (err, rows) => {
            if (!err)
                callback({list : rows})
            else
                callback({error : err})
        })
    }


    _getFilters(filters) {
        let sqlFilters = []
        if (filters) {
            if (filters.nombre)
                sqlFilters.push(` nombre like '%${filters.nombre}%' `)

            if (filters.tipo_ejecucion)
                sqlFilters.push(` tipo_ejecucion = '${filters.tipo_ejecucion}' `)

            if (filters.tipo_medio)
                sqlFilters.push(` rel_campaign_medios.id_tipo_medio = '${filters.tipo_medio}' `)

        }

        return sqlFilters.length > 0 ? "WHERE" + sqlFilters.join(" AND ") : ""
    }

    addCampaign() {
        
    }

}


let campaign = new Campign(conn)
module.exports = campaign