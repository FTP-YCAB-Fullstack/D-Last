import axios from "axios"
import Request from "../axios_instance"

const getApi = (section) => {
    return async (dispatch) => {
        try {
            if(section === "condition"){
                let api = await axios.get("http://localhost:5000/health-conditions")
                api = api.data.data
                dispatch({
                    type : "GET_CONDITION",
                    payload : {
                        api : api
                    }
                })
            }
            if (section === "story"){
                let api = await axios.get("http://localhost:5000/stories")
                api = api.data.data
                dispatch({
                    type : "GET_STORY",
                    payload : {
                        api : api
                    }
                })
            }
            if (section === "hospital"){
                let api = await axios.get("http://localhost:5000/api")
                api = api.data.dataApi
                dispatch({
                    type : "GET_HOSPITAL",
                    payload : {
                        api : api
                    }
                })
            }
            if (section === "unapproved"){
                let api = await Request.get("/volunteers/unapproved")
                api = api.data.data
                dispatch({
                    type : "GET_UNAPPROVED",
                    payload : {
                        api : api
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default getApi