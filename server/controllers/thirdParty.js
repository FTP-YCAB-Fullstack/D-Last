const axios = require("axios")


const apiController = {
    getData : async (req,res,next) => {
        try {
            const url = "https://dekontaminasi.com/api/id/covid19/hospitals"
            let dataApi = await axios.get(url)
            dataApi = dataApi.data

            res.status(200).json({
                dataApi
            })
        } catch (error) {
            res.json({
                message : error.message
            })
        }
        
    }
}

module.exports = apiController