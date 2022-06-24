import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { categoryListReducer, currentNameListReducer, productDetailsReducer, productListHotReducer, productListNewReducer, productListReducer, productListRelatedReducer, productListSuggestReducer } from "./Reducers/ProductReducers";
import { userLoginReducer, userRegisterReducer,userDetailsReducer, changePasswordReducer, } from "./Reducers/UserReducers";
import { cartReducer } from "./Reducers/CartReducers";

const reducer = combineReducers({
   productListNew: productListNewReducer,
   productListHot: productListHotReducer,
   productList: productListReducer,
   productDetails: productDetailsReducer,
   productListRelated: productListRelatedReducer,
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   changePwd: changePasswordReducer,
   productListSuggest: productListSuggestReducer,
   cart: cartReducer,
   categoryList: categoryListReducer,
   currentNameList: currentNameListReducer

})

//login
const userFromLocalStorage = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: null;
//cart 
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];
const initialState = {
  userLogin:{user: userFromLocalStorage},
  cart: {
    cartItems: cartItemsFromLocalStorage,
  }
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));
},1000);
export default store