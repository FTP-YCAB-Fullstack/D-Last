import axios from "axios"

const Request = axios.create({
    baseURL : "https://dlast.herokuapp.com/",
})

export default Request;