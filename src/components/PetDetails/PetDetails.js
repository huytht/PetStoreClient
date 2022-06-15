import {useEffect} from 'react'
import "./PetDetails.css"
import {  listProductDetails } from '../redux/Actions/ProductActions'
import {useDispatch, useSelector} from "react-redux"
import { useParams } from 'react-router-dom'
import Loading from '../LoadingError/Loading'


const PetDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, product } = productDetails;
  useEffect(()=>{
    dispatch(listProductDetails(id))
  }, [id, dispatch])
  return (
    <div className='box-details'>
      { (loading === undefined || loading === true) ? (
            <div className="mb-5 "><Loading/></div>
        ) : (
          <>
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
                  <h2>{product?.price}</h2>
                  <h4>Tuổi: <span>{product?.age===null ? '-': product.age}</span> tháng tuổi</h4>
                  <h4>Giới tính: <span>{product?.gender === null ? '-':product?.gender === 0 ? 'Đực' : 'Cái'}</span> </h4>
                  <h4>Xuất xứ: <span>{product.origins.map(origin => origin.name).lenght===[] ? '-' :product?.origins.map(origin => origin.name).join(', ')}</span> </h4>
                  <h4>Chủng loại: <span>{product.breed === null ? '-':product.breed.name }</span>  </h4>
                  <div className='amount'>
                    <h3>Số lượng: </h3>
                    <div className='amount-box f_flex'>
                      <button className='de'>-</button><input className='intput'type="text" value="1"/><button className='in'>+</button>
                    </div>
                    <div className='amount-index'> 
                      Số lượng còn {product?.amount}
                    </div>
                  </div>
                  <br/>
                  <button className='btn-add-to-cart'>Mua hàng</button>
                 
                </div>
            </section>
          </>
        )
      
      }
    </div>
  )
}

export default PetDetails