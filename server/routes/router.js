const express = require('express')
const router = express.Router()

/*
Middlewares
*/
const verifyLogin = require('../middlewares/login')
const  validationAddCampaign = require('../middlewares/validations')


/*
Controllers
*/
const loginController = require('../controllers/login')
const campaignController = require('../controllers/campaign')


/*
Routes
*/
router.post("/login", loginController.loginUser.bind(loginController))
//router.post("/list-campaigns", verifyLogin, campaignController.listCampaigns.bind(campaignController))
router.post("/list-campaigns",  campaignController.listCampaigns.bind(campaignController))
router.post("/add-campaigns", validationAddCampaign, campaignController.addCampaign.bind(campaignController))




module.exports = router