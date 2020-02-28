const modelCampaign = require('../models/campaign')

class Campaign {
    constructor (modelCampaign) {
        this.modelCampaign = modelCampaign
    }

    listCampaigns(req, res) {
        let filters = req.body.filters || {}
        this.modelCampaign.getAll(filters, (response) => {
            res.json(response)
        })
        
    }




}


let campaign = new Campaign(modelCampaign)
module.exports = campaign