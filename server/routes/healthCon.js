const healthConRoute = require("express").Router();
const healthController = require("../controllers/healthCon");

healthConRoute.post("/health-conditions", healthController.createData);
healthConRoute.get("/health-conditions", healthController.getAll);
healthConRoute.get("/health-conditions/:id", healthController.getById);
healthConRoute.patch("/health-conditions/:id", healthController.updateById);
healthConRoute.delete("/health-conditions/:id", healthController.deleteById);

module.exports = healthConRoute;
