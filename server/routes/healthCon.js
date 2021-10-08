const healthConRoute = require("express").Router()
const healthController = require("../controllers/healthCon")

healthConRoute.get("/health-conditions",healthController.getAll)

module.exports = healthConRoute