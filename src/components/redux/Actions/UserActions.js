import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../Constants/UserConstants"

//login
export const login = (username,password) => async(dispatch) =>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})

        const config ={
            headers:{
                "Content-Type":"application/json",
            },
        }

        const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/login`,{username,password},config)

        dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.data})
        localStorage.setItem("userInfo",JSON.stringify(res.data.data))
        
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}

//logout

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({type: USER_LOGOUT})
    document.location.href ="/"
}