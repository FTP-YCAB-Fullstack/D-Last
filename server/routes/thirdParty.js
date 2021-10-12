const ApiRoute = require("express").Router()
const apiController = require("../controllers/thirdParty")

ApiRoute.get("/api",apiController.getData)

module.exports = ApiRoute