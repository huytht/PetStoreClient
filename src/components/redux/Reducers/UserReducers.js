import { 
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS ,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT,
    REFRESH_TOKEN,
} from "../Constants/UserConstants"

//login
export const userLoginReducer = (state = {},action) =>{
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, user: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return{}
        default:
            return state;
    }
}

//register
export const userRegisterReducer = (state = {},action) =>{
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {loading: false, userReg: action.payload}
        case USER_REGISTER_FAIL:
            return {loading: false, errorReg: action.payload}
        default:
            return state;
    }
}

//refresh token
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
  
export const refreshTokenReducer = (state= initialState,action) => {
    const { type, payload } = action;
    switch (type) {
        case REFRESH_TOKEN:
            return {
                ...state,
                user: { ...user, accessToken: payload },
            };
        default:
            return state;
    }
}

