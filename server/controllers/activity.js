const Activity = require("../models/activity")

let activityController = {
    getAll : async (req,res,next) => {
        try {
            const data = await Activity.find()

            res.status(200).json({
                message : "success",
                data : data
            })
        } catch (error) {
            res.status(500).json({
                message : error.message
            })
        }
    },
    createData : async (req,res) => {
        try {
            const {nama_kegiatan ,thumbnail,deskripsi} = await req.body
            const payload = await {
                thumbnail: thumbnail,
                nama_kegiatan : nama_kegiatan,
                deskripsi: deskripsi
            }
    
            const newPost = await Activity.create(payload)
    
            res.status(201).json({
                message : "Activity created",
                data : payload
            })
    
        } catch (error) {
            res.json({
                message : error.message
            })
        }
    }
}

module.exports = activityController