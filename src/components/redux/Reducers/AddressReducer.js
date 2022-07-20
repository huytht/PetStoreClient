import {PROVINCES_SUCCESS,PROVINCES_REQUEST,PROVINCES_FAIL,DISTRICT_FAIL,DISTRICT_REQUEST,DISTRICT_SUCCESS, PROVINCE_REQUEST, PROVINCE_SUCCESS, PROVINCE_FAIL } from "../Constants/AddressContants";

export const ProvincesReducer = (state = {data:[]},action) =>{
    switch (action.type) {
        case PROVINCES_REQUEST:
            return {...state, loading: true, data: []}
        case PROVINCES_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case PROVINCES_FAIL:
            return {...state, loading: false, data: action.payload}
        default:
            return state;
    }
}
export const ProvinceReducer = (state = {data:{}},action) =>{
    switch (action.type) {
        case PROVINCE_REQUEST:
            return {...state, loading: true, data: {}}
        case PROVINCE_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case PROVINCE_FAIL:
            return {...state, loading: false, data: action.payload}
        default:
            return state;
    }
}
export const DistrictReducer = (state = {data:{}},action) =>{
    switch (action.type) {
        case DISTRICT_REQUEST:
            return {...state, loading: true, data: {}}
        case DISTRICT_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case DISTRICT_FAIL:
            return {...state, loading: false, data: action.payload}
        default:
            return state;
    }
}