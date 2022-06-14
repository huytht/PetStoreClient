import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,REFRESH_TOKEN } from "../Constants/UserConstants"
import TokenService from "../../services/token.service"
import { axiosClient } from "../../services/api"
//login
export const login = (username,password) => async(dispatch) =>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})

        const res = await axiosClient.post(`/user/login`,{username,password})

        dispatch({type: USER_LOGIN_SUCCESS, payload:res.data.data})
        localStorage.setItem("user",JSON.stringify(res.data.data))
        
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}

//logout
export const logout = () => (dispatch) => {
    localStorage.removeItem("user")
    dispatch({type: USER_LOGOUT})
    document.location.href ="/"
}
//refresh token
export const refreshToken = (accessToken) => (dispatch) => {
    dispatch({
      type: REFRESH_TOKEN,
      payload: accessToken,
    })
}