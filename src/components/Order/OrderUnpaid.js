import React, { useEffect } from 'react'
import { Collapse, Grid, Text, Avatar,Divider } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderListUnpaid } from '../redux/Actions/PaymentAction';
import { MdExpandLess } from 'react-icons/md';
import { FaCcPaypal } from 'react-icons/fa';

const OrderUnpaid = () => {
    
  const { loading, orderedList } = useSelector((state) => state.orderListUnpaid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderListUnpaid());
  }, []);

  return (
    <Grid.Container gap={3}>
      <Grid>
        <Collapse.Group splitted>
          {!loading &&
            orderedList?.data?.content.map((item, index) => 
              <Collapse
                title={
                  <span className="box-title-order">
                    <span className="id-order">{item.orderTrackingNumber}</span>
                    <span className="status-order">{item.orderStatus.name.toUpperCase()}</span>
                  </span>
                }
                arrowIcon={<div className="icon-collapse"><MdExpandLess /></div>}
                subtitle={`${item.totalQuantity} sản phẩm`}
                contentLeft={
                  <Avatar
                    size="lg"
                    src="https://thumbs.dreamstime.com/z/order-red-stamp-text-white-44561786.jpg"
                    color="secondary"
                    squared
                  />
                }
              >
                {item.orderItems.map(orderItem => 
                  <>
                    <Divider css={{ marginBottom: "2%" }} />
                    <div className="box-item-order f_flex">
                      <Avatar
                        size="lg"
                        src={`${process.env.REACT_APP_API_ENDPOINT}${orderItem.imageUrl}`}
                        color="secondary"
                        squared
                      />
                      <div className="item-main-content">
                        <div className="item-content f_flex">
                          <div className="item-name">{orderItem.name}</div>
                          <div className="item-price">
                            {Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(orderItem.price)}
                          </div>
                        </div>
                        <div className="item-amount">x{orderItem.quantity}</div>
                      </div>
                    </div>
                  </>
                )}
                <Divider css={{ marginTop: "2%", marginBottom: "2%" }} />
                <div className="footer-order">
                  <table>
                    <tr>
                      <td><b>Hình thức thanh toán: &nbsp;</b></td>
                      <td style={{ textAlign: "left" }}>
                        {
                          item.paymentId === 1 ? 
                          (<><FaCcPaypal style={{ color: "#00457C", fontSize: 30 }} /></>)
                          : 
                          (<>
                            <img
                              class="method-icon"
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
                              width="32"
                              height="32"
                              alt="icon"
                            />
                          </>)
                        }
                      </td>
                    </tr>
                    <tr>
                      <td><b>Tổng số tiền: &nbsp;</b></td>
                      <td> 
                        {Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.totalPrice)}
                      </td>
                    </tr>
                  </table>
                  <div className="box-button">
                    {item.orderStatus.id === 1 && <button class="btn-pay-order">Thanh toán</button>}
                    {item.orderStatus.id < 3 && <button class="btn-cancel-order">Hủy đơn</button>}
                  </div>
                </div>
              </Collapse>
            )
          }
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}

export default OrderUnpaid