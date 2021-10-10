const storiesRoute = require("express").Router();
const storiesController = require("../controllers/stories");

storiesRoute.post("/stories", storiesController.createData);
storiesRoute.get("/stories", storiesController.getAll);
storiesRoute.get("/stories/:id", storiesController.getById);
storiesRoute.patch("/stories/:id", storiesController.updateById);
storiesRoute.delete("/stories/:id", storiesController.deleteById);

module.exports = storiesRoute;
