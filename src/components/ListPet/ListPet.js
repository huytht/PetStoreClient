import React from "react"
import TitleListPet from "./TitleListPet"
import TitleListProduct from "./TitleListProduct"
import "./style.css"

const ListPet = () => {
  return (
    <>
      <section className='shop background'>
        <div className='container '>

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Thú cưng nổi bật</h2>
              </div>
              <div className='heading-right row '>
                <span >View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <TitleListPet />
            </div>
          </div>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Thú cưng quá trời</h2>
              </div>
              <div className='heading-right row '>
                <span >View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <TitleListProduct/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ListPet
