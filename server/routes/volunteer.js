const VolunteerRoute = require('express').Router();
const VolunteerController = require('../controllers/volunteer');

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

VolunteerRoute.get("/volunteers",VolunteerController.getAll)
VolunteerRoute.get("/volunteers/unapproved",VolunteerController.Unapproved)
VolunteerRoute.get("/volunteers/approved",VolunteerController.Approved)
VolunteerRoute.post("/volunteers",upload.single("pas_foto"),VolunteerController.Create)
VolunteerRoute.patch("/volunteers/:id",VolunteerController.Approve)
VolunteerRoute.delete("/volunteers/:id",VolunteerController.Delete)

module.exports = VolunteerRoute