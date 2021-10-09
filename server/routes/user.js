const userRoute = require("express").Router()
const userController = require("../controllers/user")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

userRoute.get("/users",authentication,authorization(["admin"]),userController.getAll)
userRoute.post("/register",userController.regist)
userRoute.post("/login",userController.login)
module.exports = userRoute