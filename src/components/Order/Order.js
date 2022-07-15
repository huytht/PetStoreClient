import React,{useState} from 'react'
import OrderAll from './OrderAll';
import OrderConfirm from './OrderConfirm';
import OrderDelivered from './OrderDelivered';
import OrderDelivering from './OrderDelivering';
import OrderPay from './OrderPay';
import "./style.css"
export const Order = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <div className="order container">
    <div className="order-bloc-tabs">
      <button
        className={toggleState === 1 ? "order-tabs order-active-tabs" : "order-tabs"}
        onClick={() => toggleTab(1)}
      >
        Tất cả
      </button>
      <button
        className={toggleState === 2 ? "order-tabs order-active-tabs" : "order-tabs"}
        onClick={() => toggleTab(2)}
      >
        Chờ thanh toán
      </button>
      <button
        className={toggleState === 3 ? "order-tabs order-active-tabs" : "order-tabs"}
        onClick={() => toggleTab(3)}
      >
        Chờ xác nhận
      </button>
      <button
        className={toggleState === 4 ? "order-tabs order-active-tabs" : "order-tabs"}
        onClick={() => toggleTab(4)}
      >
        Đang giao
      </button>
      <button
        className={toggleState === 5 ? "order-tabs order-active-tabs" : "order-tabs"}
        onClick={() => toggleTab(5)}
      >
        Đã giao
      </button>
      
    </div>
    <div className="order-content-tabs">
      <div
        className={toggleState === 1 ? "order-content order-active-content" : "order-content"}
      >
        <OrderAll/>
      </div>
      <div
        className={toggleState === 2 ? "order-content  order-active-content" : "order-content"}
      >
       <OrderPay/>
      </div>
      <div
        className={toggleState === 3 ? "order-content  order-active-content" : "order-content"}
      >
        <OrderConfirm/>
      </div>
      <div
        className={toggleState === 4 ? "order-content  order-active-content" : "order-content"}
      >
       <OrderDelivering/>
      </div>
      <div
        className={toggleState === 5 ? "order-content  order-active-content" : "order-content"}
      >
       <OrderDelivered/>
      </div>
    </div>
  </div>
  )
}

export default Order;
