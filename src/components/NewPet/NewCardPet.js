import React,{useEffect} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { listProduct } from "../redux/Actions/ProductActions"
import { useDispatch,useSelector } from "react-redux"

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    )
  }
  const NewCardPet = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
  const dispatch = useDispatch();
  const productListNew =useSelector((state)=> state.productListNew)
  useEffect(()=>{
    dispatch(listProduct("new",0,1,0,8))
  },[dispatch])
  
    return (
      <>
        <Slider {...settings}>
          {productListNew.productsNew?.map((productItems) => {
            return (
              <div className='box'>
                <div className='product mtop'>
                  <div className='img'>
                    <span className='discount'>New</span>
                    <img src= { `${process.env.REACT_APP_API_ENDPOINT}${productItems.imagePath[0]} `} alt='' /> 
                  </div>
                  <div className='product-details'>
                    <h3>{productItems.name}</h3>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <div className='price'>
                      <h4>{productItems.price} VNĐ </h4>
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
        </Slider>
      </>
    )
  }
  
  export default NewCardPet
  