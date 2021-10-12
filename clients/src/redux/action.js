import axios from "axios"

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
        } catch (error) {
            console.log(error)
        }
    }
}

export default getApi