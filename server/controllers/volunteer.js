const Volunteer = require("../models/volunteer")

const VolunController = {

    getAll : async (req,res,next) => {
        try {
            const data = await Volunteer.find()

            res.status(200).json({
                data
            })
        } catch (error) {
            next({code:500,message:error.message})
        }
    },
    Create : async (req,res,next) => {
        try {
            const {
                nama,
                ttl,
                domisili,
                pendidikan_terakhir,
                visi_misi,
                user_id,
                email,
                pendapat_mental_health
                ,rencana_volunteer,
                pas_foto = req.file.originalname
                } = req.body

            const data = {
                nama,
                ttl,
                domisili,
                pendidikan_terakhir,
                visi_misi,
                user_id,
                email,
                pendapat_mental_health,
                rencana_volunteer,
                pas_foto,
                status : 'unapproved'
            }

            const isExist = await Volunteer.findOne({user_id : user_id})

            if(isExist){
                return next({code : 422, message : "Volunteer already exist"})
            }


            const newVolun = await Volunteer.create(data)

            res.status(201).json({
                message : "newVolunteer created"
            })

        } catch (error) {
            next({code:500,message:error.message})
        }
    },

    Approve : async(req,res,next) => {
        try {
            const {id} = req.params

            const isExist = await Volunteer.findById(id)

            if(!isExist){
                next({code:404,message:"Volunteer Not Found"})
                return
            }

            const update = await Volunteer.findByIdAndUpdate(id,{status : "approved"})

            res.status(200).json({
                message : "Volunteer's status has changed"
            })
        } catch (error) {
            next({code:500,message:error.message})
        }
    },

    Unapproved : async(req,res,next) => {
        try {

            const data = await Volunteer.find({status:"unapproved"})

            res.status(200).json({
                data
            })
        } catch (error) {
            next({code:500,message:error.message})
        }
    },

    Approved : async(req,res,next) => {
        try {
            const data = await Volunteer.find({status:"approved"})

            res.status(200).json({
                data
            })
        } catch (error) {
            next({code:500,message:error.message})
        }
    },

    Delete : async(req,res,next) => {
        try {
            const {id} = req.params

            const isExist = await Volunteer.findById(id)

            if(!isExist){
                next({code:404,message:"Volunteer Not Found"})
                return
            }

            const deleted = await Volunteer.findByIdAndDelete(id)

            res.status(200).json({
                message : "volunteer deleted"
            })
        } catch (error) {
            next({code:500,message:error.message})
        }
    }

}


module.exports = VolunController