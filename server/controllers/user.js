const User = require("../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

let userController = {
    getAll : async (req,res,next) => {
        try {
            const data = await User.find()

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
    regist : async (req,res,next) => {
        try {
            const {nama, email, password} = await req.body
            const payload = await {
                nama : nama,
                email: email,
                password: bcrypt.hashSync(password, 8),
                role : "user"
            }
            if (!nama || !email || !password)
                return res.status(400).json({
                    message: "Tolong isi semua data"
                })
            if(password.length < 8)
                return res.status(400).json({
                    message: "Panjang minimal password 8!"
                })

            const existingUser = await User.findOne({email})
            if (existingUser)
                return res.status(400).json({
                    message: "Maaf, Email anda sudah terdaftar"
                })
            
            // const newUser = new User ({
            //     nama,
            //     email,
            //     password
            // })
            // const saveUser = await newUser.save()

            const register = await User.create(payload)

            res.status(201).json({
                message : "user created",
                data : payload
            })
    
    
        } catch (error) {
            res.json({
                message : error.message
            })
        }
    },
    login : async (req, res, next) => {
        try {
            const {email, password} = req.body
            if (!email || !password)
            return res.status(400).json({
                message: "Input tidak boleh kosong"
            })
            //check user
            const user = await User.findOne({email})
            if(!user){
                return res.status(401).json({
                    message: "Maaf, Email/Password Salah"
                })
            }
            let check = await bcrypt.compare(password, user.password)
            if(!check){
                return res.status(401).json({
                    message: "Maaf, Email/Password Salah"
                })
            }
            //create token
            const payload = {
                UserId: user._id,
                role: user.role,
                username: user.nama
            }
            const token = jwt.sign( payload,process.env.JWT_SECRET)
            res.cookie("token", token, { httpOnly: true}).send
            res.status(200).json({
                message: "Login Sukses!",
                token: token,
                data: payload
            })
        } catch (error) {
            
        }
    },
    logout: async (req, res, next) => {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
        }).send
        res.status(200).json({
            message: "logout sukses"
        })
    }
}

module.exports = userController