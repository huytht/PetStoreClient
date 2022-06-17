import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducer, productListHotReducer, productListNewReducer, productListReducer, productListRelatedReducer } from "./Reducers/ProductReducers";
import { userLoginReducer, userRegisterReducer,userDetailsReducer } from "./Reducers/UserReducers";

const reducer = combineReducers({
   productListNew: productListNewReducer,
   productListHot: productListHotReducer,
   productList: productListReducer,
   productDetails: productDetailsReducer,
   productListRelated: productListRelatedReducer,
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer

})

//login
const userFromLocalStorage = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: null;

const initialState = {
  userLogin:{user: userFromLocalStorage},
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store