const healthConRoute = require("express").Router()
const healthController = require("../controllers/healthCon")

healthConRoute.get("/health-conditions",healthController.getAll)
healthConRoute.post("/health-conditions",healthController.createData)

module.exports = healthConRoute