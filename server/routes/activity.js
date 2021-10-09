const activityConRoute = require("express").Router()
const activityController = require("../controllers/activity")

activityConRoute.get("/activities",activityController.getAll)
activityConRoute.post("/activities",activityController.createData)

module.exports = activityConRoute