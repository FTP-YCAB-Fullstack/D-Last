const activityConRoute = require("express").Router();
const activityController = require("../controllers/activity");

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, "./public");
    },
    filename: (req,file,callback) => {
        callback(null,file.originalname);
    }
});

const upload = multer({storage: storage})

activityConRoute.post("/activities",upload.single("thumbnail"), activityController.createData);
activityConRoute.get("/activities", activityController.getAll);
activityConRoute.get("/activities/:id", activityController.getById);
activityConRoute.patch("/activities/:id", activityController.updateById);
activityConRoute.delete("/activities/:id", activityController.deleteById);

module.exports = activityConRoute;
