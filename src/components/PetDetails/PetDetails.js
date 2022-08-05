import {useEffect, useState} from 'react'
import "./PetDetails.css"
import {  listProductDetails } from '../redux/Actions/ProductActions'
import {useDispatch, useSelector} from "react-redux"
import { useParams } from 'react-router-dom'
import Loading from '../LoadingError/Loading'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import Accordion from "../Accordion/Accordion";
import { Helmet } from 'react-helmet'
import { FacebookIcon, FacebookShareButton,FacebookMessengerShareButton,FacebookMessengerIcon } from 'react-share'
import React from 'react';
import { ReactSEOMetaTags } from 'react-seo-meta-tags'


const PetDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, product } = productDetails;
  const [siteMetadata, setSiteMetadata] = useState({})
  useEffect(()=>{
    dispatch(listProductDetails(id))
  }, [id, dispatch])
  const [qtyNum, setQty] = useState(1)
  const AddToCart = (e) => {
    e.preventDefault();
    navigate(`/cart?id=${id}&qty=${qtyNum}`)
    toast.success("Sản phẩm đã thêm vào giỏ hàng")

  }
  const { categories } = useSelector((state) => state.categoryList);
  const convertURL= (str)=>{
		// Chuyển hết sang chữ thường
		str = str?.toLowerCase();     
	 
		// xóa dấu
		str = str?.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
		str = str?.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
		str = str?.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
		str = str?.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
		str = str?.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
		str = str?.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
		str = str?.replace(/(đ)/g, 'd');
	 
		// Xóa ký tự đặc biệt
		str = str?.replace(/([^0-9a-z-\s])/g, '');
	 
		// Xóa khoảng trắng thay bằng ký tự -
		str = str?.replace(/(\s+)/g, '-');
	 
		// xóa phần dự - ở đầu
		str = str?.replace(/^-+/g, '');
	 
		// xóa phần dư - ở cuối
		str = str?.replace(/-+$/g, '');
	 
		// return
		return str;
	}
  const shareUrl = `${process.env.REACT_APP_CLIENT_ENDPOINT}/product/${convertURL(product?.name)}-${product.id}`
    useEffect(()=>{
      if(product!==undefined){
        setSiteMetadata({
          title: product.name,
          description: product.description,
          image: process.env.REACT_APP_API_ENDPOINT+product?.imagePath?.find((value,index)=>index===0),
          url: shareUrl
        })
        // document.querySelector('meta[property="og:image"]').setAttribute("content", process.env.REACT_APP_API_ENDPOINT+product?.imagePath?.find((value,index)=>index===0) );
        // document.querySelector('meta[property="og:url"]').setAttribute("content", `${process.env.REACT_APP_CLIENT_ENDPOINT}/product/${convertURL(product?.name)}-${product.id}`);
        // document.querySelector('meta[property="og:title"]').setAttribute("content", product.name );
        // document.querySelector('meta[property="og:description"]').setAttribute("content", product.description);
      }
    },[product, shareUrl])
  return (
    
    <div className='box-details'>
        <ReactSEOMetaTags
          render={(el: React.ReactNode) => <Helmet>{el}</Helmet>}
          website={{ ...siteMetadata }}
        />
        {/* <Helmet>
          <title>{product.name}</title>
          <meta property='og:image' content={`${process.env.REACT_APP_API_ENDPOINT}${product?.imagePath?.find((value,index)=>index===0)} `}/>
          <meta property='og:title' content={product.name}/>
          <meta property='og:url' content={shareUrl}/>
          <meta property='og:description' content={product.description}/>
        </Helmet> */}
       
      { (loading === undefined || loading === true) ? (
            <div className="mb-5 "><Loading/></div>
        ) : (
          <>
          <div class="product-category mtop">
          <h3 class="title">Danh mục sản phẩm</h3>
          <ul>
            {categories?.map((category) => (
              <Accordion category={category} />
            ))}
          </ul>
        </div>
            <section className='pdetails container mtop heading f_flex'>
              <div className='box-img-detail'>
                <div className='single-img'  >
                  <img className='big-img' src={`${process.env.REACT_APP_API_ENDPOINT}${product.imagePath[0]} `} alt=''/>
                    <div className='small-img-group f_flex '>
                      {product.imagePath.map((image) => (
                        <div className='small-img-col '>
                          <img className='small-img' src={`${process.env.REACT_APP_API_ENDPOINT}${image} `}   alt=''/>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
                <div className='single-detail'>
                  <h1>{product?.name==null ? '-':product.name}</h1>
                  <h2>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product?.price)}</h2>
                  {product?.age !== null && <h3>Tuổi: <span>  {product.age}</span> tháng tuổi</h3> }
                  {product?.gender !== null && <h3>Giới tính: <span> {product?.gender === 0 ? 'Đực' : 'Cái'}</span> </h3> }
                  {product.origins.length > 0 && <h3>Xuất xứ: <span>{product?.origins.map(origin => origin.name).join(', ')}</span> </h3>}
                  {product.breed !== null && <h3>Chủng loại: <span>{product.breed.name}</span>  </h3>}
                  <div className='amount'>
                    {product.amount > 0 ? (
                      <>
                        <h3>Số lượng: </h3>
                          <div className='amount-box f_flex'>
                            <button className='de' onClick={()=>setQty(qtyNum-1)} disabled={product.amount-qtyNum<0?false:true}>-</button>
                              <input className='intput'type="text" value={qtyNum} onChange={(e)=>setQty(e.target.value)}/>
                            <button className='in' onClick={()=>setQty(qtyNum+1)}  disabled={product.amount-qtyNum>0?false:true}>+</button>
                          </div>
                          <div className='amount-index f_flex'> 
                            <div className='box-amount-index'>
                              Số lượng còn {product?.amount}
                            </div>
                            <div className='box-share'>
                              <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={40} round={true}/>
                              </FacebookShareButton>
                            </div>
                            
                          </div>
                      </>
                      ):(
                        <>   
                          <h3>Số lượng: </h3>
                          <div className='amount-index f_flex'>
                            <div className='box-amount-index'> 
                              Số lượng còn {product?.amount}
                            </div>
                            <div className='box-share'>
                              <div className='fb-share'>
                                <FacebookShareButton url={shareUrl}>
                                  <FacebookIcon size={40} round={true}/>
                                </FacebookShareButton>
                              </div>
                            </div>
                          </div>
                         
                        </>
                    )}
                    
                  </div>
                  <br/>
                  {product.amount > 0 ? 
                  (<>
                    <button onClick={AddToCart} type="button" className='btn-add-to-cart' >Mua hàng</button>
                  </>):
                  (<>
                    <button type="button" className='btn-add-to-cart' disabled>Hết sản phẩm</button>
                  </>)}

                </div>
            </section> 
          </>
        )
      
      }
    </div>
    
  )
}

export default PetDetails