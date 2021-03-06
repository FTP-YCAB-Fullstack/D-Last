import Request from "../axios_instance"

const getApi = (section) => {
    return async (dispatch) => {
        try {
            if(section === "condition"){
                let api = await Request.get("health-conditions")
                api = api.data.data
                dispatch({
                    type : "GET_CONDITION",
                    payload : {
                        api : api
                    }
                })
            }
            if (section === "story"){
                let api = await Request.get("stories")
                api = api.data.data
                dispatch({
                    type : "GET_STORY",
                    payload : {
                        api : api
                    }
                })
            }
            if (section === "hospital"){
                let api = await Request.get("api")
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
            if (section === "approved"){
                console.log()
                let api = await Request.get("/volunteers/approved")
                api = api.data.data
                dispatch({
                    type : "GET_APPROVED",
                    payload : {
                        api : api
                    }
                })
            }
            if (section === "activities"){
                let api = await Request.get("/activities")
                api = api.data.data
                dispatch({
                    type : "GET_ACTIVITIES",
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