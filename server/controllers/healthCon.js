const Healthy = require("../models/healthCon")

let healthyController = {
    getAll : async (req,res,next) => {
        try {
            const data = await Healthy.find()

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
            const {judul,pengertian,ciri,credit,penanggulangan} = await req.body
            const payload = await {
                judul : judul,
                pengertian : pengertian,
                ciri : ciri,
                credit : credit,
                penanggulangan : penanggulangan
            }
    
            const newPost = await Healthy.create(payload)
    
            res.status(201).json({
                message : "user created",
                data : payload
            })
    
        } catch (error) {
            res.json({
                message : error.message
            })
        }
    }
}

module.exports = healthyController