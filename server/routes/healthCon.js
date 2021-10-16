const healthConRoute = require("express").Router();
const healthController = require("../controllers/healthCon");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
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

healthConRoute.post("/health-conditions",authentication,authorization(['admin']),upload.single("thumbnail") ,healthController.createData);
healthConRoute.get("/health-conditions", healthController.getAll);
healthConRoute.get("/health-conditions/:id", healthController.getById);
healthConRoute.patch("/health-conditions/:id", healthController.updateById);
healthConRoute.delete("/health-conditions/:id", healthController.deleteById);

module.exports = healthConRoute;
