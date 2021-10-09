const mainRoute = require('express').Router()
const healthyRoute = require('./healthCon')
const userRoute = require('./user')
const storiesRoute = require('./stories')

mainRoute.get("/",(req,res) => {
    res.status(200).json({
        message : "Server is ready"
    })
})

mainRoute.use(healthyRoute)
mainRoute.use(userRoute)
mainRoute.use(storiesRoute)

module.exports = mainRoute