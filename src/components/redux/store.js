import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducer, productListHotReducer, productListNewReducer, productListReducer, productListRelatedReducer } from "./Reducers/ProductReducers";
import { userLoginReducer } from "./Reducers/UserReducers";



const reducer = combineReducers({
   productListNew: productListNewReducer,
   productListHot: productListHotReducer,
   productList: productListReducer,
   productDetails: productDetailsReducer,
   productListRelated: productListRelatedReducer,
   userLogin: userLoginReducer

})

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
  userLogin:{userInfo: userInfoFromLocalStorage},
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store