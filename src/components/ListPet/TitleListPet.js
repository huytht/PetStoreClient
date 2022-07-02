import React, {useEffect,useState} from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import { listProduct } from "../redux/Actions/ProductActions"
import { useDispatch,useSelector } from "react-redux"
import { addToCart } from "../redux/Actions/CartActions"
import toast from "react-hot-toast"
  const TitleListPet = () => {
    const dispatch = useDispatch()
    const productListHot = useSelector((state)=> state.productListHot)
    useEffect(()=>{
      dispatch(listProduct("hot",0,2,0,8))
    },[dispatch])
    const { cartItems } = useSelector((state) => state.cart);
    const {value,setValue} = useState(1)
    // const handleAddToCart = (id) => {

    //         if(cartItems.find((x) => x.product === id.product)){
    //             dispatch(addToCart(id,1))
    //         }        
    // }
    return (
      <>
          {productListHot.productsHot?.map((productItems) => {
            return (
              <div className='box'>
                <div className='product mtop'>
                  <div className='img'>
                    <span className='discount'>New</span>
                    <img className="img-product"src= { `${process.env.REACT_APP_API_ENDPOINT}${productItems.imagePath} `} alt='' /> 
                    
                  </div>
                  <div className='product-details'>
                  <Link  to = {`/product/${productItems.id}`}><h3>{productItems.name}</h3></Link>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <div className='price'>
                      <h4>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productItems.price)}</h4>
                      {/* step : 3  
                       if hami le button ma click garryo bahne 
                      */}
                      {productItems.amount>0 ? 
                      (<>
                          <button onClick={()=>dispatch(addToCart(productItems.id,1))}>
                            <i className='fa fa-plus'></i>
                          </button>
                      </>)
                      :
                      (<>
                           <button onClick={()=>toast.error("Sản phẩm đã hết hàng")}>
                            <i className='fa fa-plus'></i>
                          </button>
                      </>)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </>
    )
  }
  
  export default TitleListPet
  