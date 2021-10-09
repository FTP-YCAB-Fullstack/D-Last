const userRoute = require("express").Router()
const userController = require("../controllers/user")

userRoute.get("/users",userController.getAll)
userRoute.post("/register",userController.regist)
userRoute.post("/login",userController.login)
userRoute.get("/logout", userController.logout)
module.exports = userRoute