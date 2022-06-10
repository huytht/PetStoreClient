import { 
    PRODUCT_LIST_NEW_SUCCESS,
    PRODUCT_LIST_NEW_REQUEST, 
    PRODUCT_LIST_NEW_FAIL,
    PRODUCT_LIST_HOT_REQUEST,
    PRODUCT_LIST_HOT_SUCCESS,
    PRODUCT_LIST_HOT_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_RELATED_FAIL,
    PRODUCT_LIST_RELATED_REQUEST,
    PRODUCT_LIST_RELATED_SUCCESS
} from "../Constants/ProductConstants"

//productlist
export const productListNewReducer = (state = {productsNew:[]},action) =>{
    switch (action.type) {
        case PRODUCT_LIST_NEW_REQUEST:
            return {...state, loading: true, productsNew: []}
        case PRODUCT_LIST_NEW_SUCCESS:
            return {...state, loading: false, productsNew: action.payload}
        case PRODUCT_LIST_NEW_FAIL:
            return {...state, loading: false, productsNew: action.payload}
        default:
            return state;
    }
}

export const productListHotReducer = (state = { productsHot:[]},action) =>{
    switch (action.type) {
        case PRODUCT_LIST_HOT_REQUEST:
            return {...state, loading: true, productsHot: []}
        case PRODUCT_LIST_HOT_SUCCESS:
            return {...state, loading: false, productsHot: action.payload}
        case PRODUCT_LIST_HOT_FAIL:
            return {...state, loading: false, productsHot: action.payload}
        default:
            return state;
    }
}

export const productListReducer = (state = {products:[]},action) =>{
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {...state, loading: true, products: []}
        case PRODUCT_LIST_SUCCESS:
            return {...state, loading: false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return {...state, loading: false, products: action.payload}
        default:
            return state;
    }
}

export const productListRelatedReducer = (state = {productsRelated:[]},action) =>{
    switch (action.type) {
        case PRODUCT_LIST_RELATED_REQUEST:
            return {...state, loading: true, productsRelated: []}
        case PRODUCT_LIST_RELATED_SUCCESS:
            return {...state, loading: false, productsRelated: action.payload}
        case PRODUCT_LIST_RELATED_FAIL:
            return {...state, loading: false, productsRelated: action.payload}
        default:
            return state;
    }
}


//details product
export const productDetailsReducer = (state = {product:{}},action) =>{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {...state, loading: true}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, product: action.payload}
        default:
            return state;
    }
}
