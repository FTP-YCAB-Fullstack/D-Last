const express = require("express")
const app = express()
const mongoose = require('mongoose')
const route = require("./routes/index")
require("dotenv/config")
const PORT =process.env.SERVER_PORT

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(route)


// DB CONNECTION
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
let db = mongoose.connection
db.on('error',console.error.bind(console,"Database Connection Error!"))
db.once('open', () => {
    console.log('Database Connected!')
})


app.listen(PORT,() => {
    console.log(`Server Running at port ${PORT}`)
})