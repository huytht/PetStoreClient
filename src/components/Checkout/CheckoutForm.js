import React from 'react'
import "./style.css"
import {FaCcPaypal,FaShoppingCart} from 'react-icons/fa'
const CheckoutForm = () => {
  return (
    <>
        <h1 className='title-checkout mtop'>Thanh toán</h1>
        <div className="box-checkout-form">
  <div class="box-main-checkout">
    <div class="container-checkout">
      <form >
      
        <div className="box-checkout-form">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input className='input-checkout-form'  type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label  for="email"><i class="fa fa-envelope"></i> Email</label>
            <input className='input-checkout-form' type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input className='input-checkout-form' type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input className='input-checkout-form' type="text" id="city" name="city" placeholder="New York"/>

            <div className="row">
              <div className="col-50">
                <label for="state">State</label>
                <input className='input-checkout-form' type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label for="zip">Zip</label>
                <input className='input-checkout-form' type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
             <FaCcPaypal/>
            </div>
            <label for="cname">Name on Card</label>
            <input className='input-checkout-form' type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input className='input-checkout-form' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input className='input-checkout-form' type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div className="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input className='input-checkout-form' type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input className='input-checkout-form' type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <input className='btn-checkout-form' type="submit" value="Continue to checkout"/>
      </form>
    </div>
  </div>
  <div className="col-25">
    <div className="container-checkout">
      <h4>Cart <span class="header-price"><FaShoppingCart/> <b>4</b></span></h4>
      <br/>
      <p><a href="#">Product 1</a> <span class="price">$1</span></p>
      <p><a href="#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p>
      <br/>
      <hr/>
      <p>Total <span className="price"><b>$30</b></span></p>
    </div>
  </div>
</div>
    </>      
  )
}

export default CheckoutForm