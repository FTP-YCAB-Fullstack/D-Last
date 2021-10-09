
const initialState = {
    authAs : ""
}

const reducer = (state = initialState,action) => {
    if(action.type === "AUTHING"){
        return{
            ...state,
            authAs : action.payload.authAs
        }
    }


    return state
}

export default reducer