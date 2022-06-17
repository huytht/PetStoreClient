import React, {useEffect} from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import { listProduct } from "../redux/Actions/ProductActions"
import { useDispatch,useSelector } from "react-redux"

  const TitleListPet = () => {
    const dispatch = useDispatch()
    const productListHot = useSelector((state)=> state.productListHot)
    useEffect(()=>{
      dispatch(listProduct("hot",0,2,0,8))
    },[dispatch])
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
                      <h4>${productItems.price}.00 </h4>
                      {/* step : 3  
                       if hami le button ma click garryo bahne 
                      */}
                      <button>
                        <i className='fa fa-plus'></i>
                      </button>
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
  