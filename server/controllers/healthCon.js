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


    }
}

module.exports = healthyController