const storiesRoute = require("express").Router()
const storiesController = require("../controllers/stories")

storiesRoute.get("/stories",storiesController.getAll)
storiesRoute.post("/stories",storiesController.createData)

module.exports = storiesRoute