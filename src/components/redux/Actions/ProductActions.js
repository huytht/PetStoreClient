import { axiosClient } from "../../services/api";
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
    PRODUCT_LIST_RELATED_REQUEST,
    PRODUCT_LIST_SUGGESTION_REQUEST,
    PRODUCT_LIST_SUGGESTION_SUCCESS,
    PRODUCT_LIST_SUGGESTION_FAIL
} from "../Constants/ProductConstants"

const array = [
    0,
    1,
    2
]

export const listProduct = (type, breedId, categoryId, pageNumber, pageSize) => async(dispatch) =>{
    try {
        dispatch({type: (breedId !== 0 || (breedId === 0 && !array.includes(categoryId)))
                        ? PRODUCT_LIST_RELATED_REQUEST
                        : categoryId === 1 
                        ? PRODUCT_LIST_NEW_REQUEST 
                        : categoryId === 2 
                        ? PRODUCT_LIST_HOT_REQUEST 
                        : PRODUCT_LIST_REQUEST})

        const res = await axiosClient.get(`/product/list?type=${type}&breed-id=${breedId}&category-id=${categoryId}&page-number=${pageNumber}&page-size=${pageSize}`)
        // console.log(res.data.data.content)
        dispatch({type:  (breedId !== 0 || (breedId === 0 && !array.includes(categoryId)))
                        ? PRODUCT_LIST_RELATED_SUCCESS
                        : categoryId === 1 
                        ? PRODUCT_LIST_NEW_SUCCESS 
                        : categoryId === 2 
                        ? PRODUCT_LIST_HOT_SUCCESS 
                        : PRODUCT_LIST_SUCCESS, payload: res.data.data.content })
    } catch (error) {
        dispatch({
            type:  (breedId !== 0 || (breedId === 0 && !array.includes(categoryId)))
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

        const res = await axiosClient.get(`/product/detail?id=${id}`)

        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: res.data.data})
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}

// search product
export const listProductSuggest = (text) => async(dispatch) =>{
    try {
        dispatch({ type: PRODUCT_LIST_SUGGESTION_REQUEST })

        const res = await axiosClient.get(`/product/search-text?text=${text}`)

        dispatch({ type: PRODUCT_LIST_SUGGESTION_SUCCESS, payload: res.data.data.content})

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_SUGGESTION_FAIL,
            payload: error.response && error.response.message ? error.response.data.message : error.message
        })
    }
}

