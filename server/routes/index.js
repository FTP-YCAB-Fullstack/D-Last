const mainRoute = require('express').Router()
const healthyRoute = require('./healthCon')

mainRoute.get("/",(req,res) => {
    res.status(200).json({
        message : "Server is ready"
    })
})

mainRoute.use(healthyRoute)

module.exports = mainRoute