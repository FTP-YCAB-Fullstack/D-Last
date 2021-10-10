const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
      };
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

      // const newUser = new User ({
      //     nama,
      //     email,
      //     password
      // })
      // const saveUser = await newUser.save()

      const register = await User.create(payload);

      res.status(201).json({
        message: "user created",
        data: payload,
      });
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
      //create token
      const payload = {
        UserId: user._id,
        role: user.role,
        username: user.nama,
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
