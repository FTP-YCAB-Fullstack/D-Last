const mainRoute = require("express").Router();
const healthyRoute = require("./healthCon");
const userRoute = require("./user");
const storiesRoute = require("./stories");
const activityRoute = require("./activity");
const ApiRoute = require("./thirdParty")
const VolunteerRoute = require("./volunteer")

mainRoute.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is ready",
  });
});

mainRoute.use(healthyRoute);
mainRoute.use(userRoute);
mainRoute.use(storiesRoute);
mainRoute.use(activityRoute);
mainRoute.use(ApiRoute);
mainRoute.use(VolunteerRoute);

module.exports = mainRoute;
