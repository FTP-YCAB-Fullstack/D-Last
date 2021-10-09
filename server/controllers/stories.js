const Story = require("../models/stories")

let storiesController = {
    getAll : async (req,res,next) => {
        try {
            const data = await Story.find()

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
            const {judul,penulis,deskripsi,thumbnail} = await req.body
            const payload = await {
                thumbnail: thumbnail,
                judul : judul,
                penulis: penulis,
                deskripsi: deskripsi
            }
    
            const newPost = await Story.create(payload)
    
            res.status(201).json({
                message : "Story created",
                data : payload
            })
    
        } catch (error) {
            res.json({
                message : error.message
            })
        }
    }
}

module.exports = storiesController