import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>OkaKoro Store</h1>
            <p>Nơi đây có bán pet. Pet các loại: pet nhập khẩu, pet nhà nuôi. Cảm ơn quý khách đã xem và ủng hộ shop.</p>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>280 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh </li>
              <li>Email: contactkawaii@gmail.com</li>
              <li>Phone: +1 233456789</li>
              <div className='icon d_flex'>
                <div className='img d_flex'>
                    <i class='fa-brands fa-paypal'></i>
                    <span>Paypal</span>
                </div>
              </div>
              
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
