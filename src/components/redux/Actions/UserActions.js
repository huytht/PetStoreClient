import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,REFRESH_TOKEN, USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS,USER_DETAIL_FAIL,USER_DETAIL_REQUEST,USER_DETAIL_SUCCESS } from "../Constants/UserConstants"
import { axiosClient } from "../../services/api"
import toast from 'react-hot-toast';
//login
export const login = (username,password) => async(dispatch) =>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})

        const res = await axiosClient.post(`/user/login`,{username,password})

        dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.data})
        toast.success("Đăng nhập thành công");
        localStorage.setItem("user",JSON.stringify(res.data.data))
        
    } catch (error) {
        
        toast.error(error.response.data.errorMessage);
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.response && error.response.data.errorMessage ? error.response.data.errorMessage : error.message
        })
        
    }
}
//user details
export const getUserDetails = (id) => async(dispatch) =>{
    try {
        dispatch({type:USER_DETAIL_REQUEST})

        const res = await axiosClient.get(`/user/profiles?id=${id}`)
        dispatch({type: USER_DETAIL_SUCCESS, payload: res.data.data})
        console.log(res)
       
    } catch (error) {
        dispatch({
            type:USER_DETAIL_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}
//register
export const register = (email, username, password) => async(dispatch) =>{
    try {
        dispatch({type:USER_REGISTER_REQUEST})

        const res = await axiosClient.post(`/user/register`,{username, email, password})

        dispatch({type: USER_REGISTER_SUCCESS, payload: res.data.data})
        toast.success("Đăng ký thành công.");
        toast.success("Vui lòng xác thực email để kích hoạt tài khoản.", { duration: 5000 });
        localStorage.setItem("user",JSON.stringify(res.data.data))
        
    } catch (error) {
        
        toast.error(error.response.data.errorMessage);
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: error.response && error.response.data.errorMessage ? error.response.data.errorMessage : error.message
        })
        
    }
}

//logout
export const logout = () => (dispatch) => {
   
    window.location.href = "/"; 
    dispatch({type: USER_LOGOUT})
    localStorage.clear();    
    
}
//refresh token
export const refreshToken = (accessToken) => (dispatch) => {
    dispatch({
      type: REFRESH_TOKEN,
      payload: accessToken,
    })
}