import { Link } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/Actions/CartActions";
import "./style.css"

export const ProductList = ({ productList, name }) => {
  const dispatch = useDispatch();
  const navigate =useNavigate();

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
              <div className="product-details">
                <h3 onClick={()=>navigate(`/product/${productItems.id}`)}>{productItems.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{productItems.price} VNĐ</h4>
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
