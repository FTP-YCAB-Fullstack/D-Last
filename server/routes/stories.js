const storiesRoute = require("express").Router();
const storiesController = require("../controllers/stories");
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

storiesRoute.post("/stories",upload.single("thumbnail"), storiesController.createData);
storiesRoute.get("/stories", storiesController.getAll);
storiesRoute.get("/stories/:id", storiesController.getById);
storiesRoute.patch("/stories/:id", storiesController.updateById);
storiesRoute.delete("/stories/:id", storiesController.deleteById);

module.exports = storiesRoute;
