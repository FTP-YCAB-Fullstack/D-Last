
const initialState = {
    authAs : "",
    logAs : {},
    isLogin : false,
    dataCondition : [],
    dataStory: [],
    hospital : [],
    unVolunteer :[],
    volunteer: [],
    activities:[]
}

const reducer = (state = initialState,action) => {
    if(action.type === "AUTHING"){
        return{
            ...state,
            authAs : action.payload.authAs
        }
    }

    if(action.type === "LOGGING"){
        return{
            ...state,
            logAs : action.payload.logAs
        }
    }

    if(action.type === "ISLOGIN"){
        return{
            ...state,
            isLogin : action.payload.login
        }
    }

    if(action.type === "LOGOUT"){
        return {
            ...state,
            authAs : "",
            logAs : {},
            isLogin : false
        }
    }

    if(action.type === "GET_CONDITION"){
        return {
            ...state,
            dataCondition : action.payload.api
        }
    }
    if(action.type === "GET_STORY"){
        return {
            ...state,
            dataStory : action.payload.api
        }
    }
    if(action.type === "GET_HOSPITAL"){
        return {
            ...state,
            hospital : action.payload.api
        }
    }
    if(action.type === "GET_UNAPPROVED"){
        return {
            ...state,
            unVolunteer : action.payload.api
        }
    }
    if(action.type === "GET_APPROVED"){
        return{
            ...state,
            volunteer: action.payload.api
        }
    }
    if(action.type === "GET_ACTIVITIES"){
        return{
            ...state,
            activities: action.payload.api
        }
    }

    return state
}

export default reducer