const express = require('express')
const router = express.Router()

/*
Middlewares
*/
const verifyLogin = require('../middlewares/login')

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




module.exports = router