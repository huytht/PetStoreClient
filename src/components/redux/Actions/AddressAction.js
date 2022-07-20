import axios from "axios"
import {PROVINCES_SUCCESS,PROVINCES_REQUEST,PROVINCES_FAIL,DISTRICT_FAIL,DISTRICT_REQUEST,DISTRICT_SUCCESS, PROVINCE_REQUEST, PROVINCE_SUCCESS, PROVINCE_FAIL } from "../Constants/AddressContants";

export const listProvince = () => async(dispatch) =>{
    try {
        dispatch({type: PROVINCES_REQUEST})

        const {data} = await axios.get("https://provinces.open-api.vn/api/p/")

        dispatch({type: PROVINCES_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type:PROVINCES_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}

export const getProvince = (code) => async(dispatch) =>{
    try {
        dispatch({type: PROVINCE_REQUEST})

        const {data} = await axios.get(`https://provinces.open-api.vn/api/p/${code}?depth=2`)

        dispatch({type:PROVINCE_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type:PROVINCE_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}

export const getDistrict = (code) => async(dispatch) =>{
    try {
        dispatch({type: DISTRICT_REQUEST})

        const {data} = await axios.get(`https://provinces.open-api.vn/api/d/${code}?depth=2`)

        dispatch({type:DISTRICT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type:DISTRICT_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}