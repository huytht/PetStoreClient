import { useState } from "react";
import { Link } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/Actions/CartActions";
import Heart from "react-animated-heart";
import { addWishListProductPage } from "../redux/Actions/ProductActions";
import "./style.css"

export const ProductList = ({ productList, name }) => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const [isClick,setClick] = useState(false)
  // const handleAddWishList = (id)=>{

  //     dispatch(addWishListProductPage(id))
  //     setClick(!isClick)
  // }
  return (
    <>
      {productList.products?.content?.map((productItems) => {
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">New</span>
                <img
                  src={`${process.env.REACT_APP_API_ENDPOINT}${productItems.imagePath} `}
                  alt=""
                />
              </div>
              <div className='product-like'>
                <Heart isClick={isClick}  onClick={() =>setClick(!isClick)} />
              </div>
              <div className="product-details">
                <h3 className="name-product" onClick={()=>navigate(`/product/${productItems.id}`)}>{productItems.name}</h3>
                <div className='rate'>
                      {productItems.rate === null ? <span className="rated">Chưa có đánh giá </span>: (<> {[...Array(productItems.rate)].map((star) => {        
                          return (         
                            <i className="fa fa-star"></i>        
                          );
                        })}
                      </>)}
                    </div>
                <div className="price">
                  <h4>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productItems.price)} </h4>
                  {/* step : 3  
                         if hami le button ma click garryo bahne 
                        */}
                  {productItems.amount > 0 ? (
                    <>
                      <button
                        onClick={() => dispatch(addToCart(productItems.id, 1))}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => toast.error("Sản phẩm đã hết hàng")}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
