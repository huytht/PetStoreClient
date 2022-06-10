import axios from "axios";
import { 
    PRODUCT_LIST_NEW_FAIL, 
    PRODUCT_LIST_NEW_REQUEST, 
    PRODUCT_LIST_NEW_SUCCESS,
    PRODUCT_LIST_HOT_FAIL, 
    PRODUCT_LIST_HOT_REQUEST, 
    PRODUCT_LIST_HOT_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_RELATED_SUCCESS,
    PRODUCT_LIST_RELATED_FAIL,
    PRODUCT_LIST_RELATED_REQUEST
} from "../Constants/ProductConstants"


export const listProduct = (type, breedId, categoryId, pageNumber, pageSize) => async(dispatch) =>{
    try {
        dispatch({type: breedId !== 0 
                        ? PRODUCT_LIST_RELATED_REQUEST
                        : categoryId === 1 
                        ? PRODUCT_LIST_NEW_REQUEST 
                        : categoryId === 2 
                        ? PRODUCT_LIST_HOT_REQUEST 
                        : PRODUCT_LIST_REQUEST})

        const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product?type=${type}&breed-id=${breedId}&category-id=${categoryId}&page-number=${pageNumber}&page-size=${pageSize}`)
        // console.log(res.data.data.content)
        dispatch({type:  breedId !== 0 
                        ? PRODUCT_LIST_RELATED_SUCCESS
                        : categoryId === 1 
                        ? PRODUCT_LIST_NEW_SUCCESS 
                        : categoryId === 2 
                        ? PRODUCT_LIST_HOT_SUCCESS 
                        : PRODUCT_LIST_SUCCESS, payload: res.data.data.content })
    } catch (error) {
        dispatch({
            type:  breedId !== 0 
                    ? PRODUCT_LIST_RELATED_FAIL
                    : categoryId === 1 
                    ? PRODUCT_LIST_NEW_FAIL 
                    : categoryId === 2 
                    ? PRODUCT_LIST_HOT_FAIL 
                    : PRODUCT_LIST_FAIL,
            payload: error.errorMessage
        })
    }
}

//details product
export const listProductDetails = (id) => async(dispatch) =>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product/detail?id=${id}`)

        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: res.data.data})
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}

