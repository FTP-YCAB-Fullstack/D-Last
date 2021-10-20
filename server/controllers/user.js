const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer")

//email sender 
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
      user : 'dlastproject01@gmail.com',
      pass : 'dlast123'
  },
  tls :{
      rejectUnauthorized: false
  }
})

let userController = {
  getAll: async (req, res, next) => {
    try {
      const data = await User.find();

      res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  regist: async (req, res, next) => {
    try {
      const { nama, email, password } = await req.body;
      const payload = await {
        nama: nama,
        email: email,
        password: bcrypt.hashSync(password, 8),
        role: "user",
        emailToken : crypto.randomBytes(64).toString('hex'),
        isVerified : false
      };

      console.log(process.env.SENDER_EMAIL)
      console.log(process.env.PASSWORD_EMAIL)

      if (!nama || !email || !password)
        return next({
          code: 406,
          message: "Tidak boleh ada form yang kosong!",
        });

      if (password.length < 8)
        return next({
          code: 411,
          message: "Panjang password minimal 8 karakter!",
        });

      const existingUser = await User.findOne({ email });
      if (existingUser)
        return next({
          code: 409,
          message: "Email yang anda masukan sudah terdaftar",
        });

      const register = await User.create(payload);

      //send email verif

      const mailOptions = {
        from : '"Verify Your Email" <dlastproject01@gmail.com> ',
        to: payload.email,
        subject : 'Dlast Project -verify your email',
        html: `<h2> Hello ${payload.nama}! Thank you for registering on our site </h2>
                <h4> Please verify your email to continue... </h4>
                <a href="dlast.netlify.app/${payload.emailToken}">Verify Your Email</a>
        `
      }

      //sending mail

      transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error + " di sending mail")
        }else {
            console.log("Verification email is sent to your gmail account")
        }
      })

      res.status(201).json({
        message: "user created",
        data: payload,
      });
    } catch (error) {
      next({ code: 500, message: error.message });
    }
  },

  verif : async (req,res,next) => {
    try {
      const token = req.query.token
      const user = await User.findOne({emailToken:token})
      if(user){
          user.emailToken = null
          user.isVerified = true
          await user.save()
          res.status(200).json({
              message : `User is verified`,
              data : user
          })
      }
    } catch (error) {
      next({ code: 500, message: error.message });
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return next({
          code: 406,
          message: "Tidak boleh ada form yang kosong!",
        });
      //check user
      const user = await User.findOne({ email });
      if (!user) {
        return next({ code: 406, message: "Email / Password Invalid" });
      }

      let check = await bcrypt.compare(password, user.password);
      if (!check) {
        return next({ code: 406, message: "Email / Password Invalid" });
      }

      const isVerif = await User.findOne({email:email,isVerified:true})

      if(!isVerif){
          return next({code:403, message:`Email anda belum diverifikasi, silahkan check email anda untuk proses verifikasi`})
      }

      //create token
      const payload = {
        UserId: user._id,
        role: user.role,
        username: user.nama,
        email : user.email
      };
      const accesstoken = jwt.sign(payload, process.env.JWT_SECRET);
      res.status(200).json({
        message: "Login Sukses!",
        accesstoken: accesstoken,
        data: payload,
      });
    } catch (error) {
      next({ code: 500, message: error.message });
    }
  },
};

module.exports = userController;
