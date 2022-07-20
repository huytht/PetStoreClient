import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { addWishListReducer, categoryListReducer, currentNameListReducer, productDetailsReducer, productListHotReducer, productListNewReducer, productListPageReducer, productListReducer, productListRelatedReducer, productListSuggestReducer, searchProductListReducer, wishListReducer } from "./Reducers/ProductReducers";
import { userLoginReducer, userRegisterReducer,userDetailsReducer, changePasswordReducer, } from "./Reducers/UserReducers";
import { cartReducer } from "./Reducers/CartReducers";
import { DistrictReducer, ProvinceReducer, ProvincesReducer } from "./Reducers/AddressReducer";

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
   currentNameList: currentNameListReducer,
   productListPage: productListPageReducer,
   wishList: wishListReducer,
   addWishList: addWishListReducer,
  provinces: ProvincesReducer,
  province: ProvinceReducer,
  district: DistrictReducer
})

//login
const userFromLocalStorage = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: null;
//cart 
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];
//wishlist
const wishListFromLocalStorage = localStorage.getItem("products")
? JSON.parse(localStorage.getItem("products"))
: [];
const initialState = {
  userLogin:{user: userFromLocalStorage},
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
  wishList:{
    products: wishListFromLocalStorage
  }
}
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));
},1000);

store.subscribe(() => {
  localStorage.setItem('products', JSON.stringify(store.getState().wishList.products));
  
},50);
export default store