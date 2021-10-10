
const initialState = {
    authAs : "",
    logAs : {},
    isLogin : false
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

    return state
}

export default reducer