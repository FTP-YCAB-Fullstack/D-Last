const activityConRoute = require("express").Router();
const activityController = require("../controllers/activity");

activityConRoute.post("/activities", activityController.createData);
activityConRoute.get("/activities", activityController.getAll);
activityConRoute.get("/activities/:id", activityController.getById);
activityConRoute.patch("/activities/:id", activityController.updateById);
activityConRoute.delete("/activities/:id", activityController.deleteById);

module.exports = activityConRoute;
