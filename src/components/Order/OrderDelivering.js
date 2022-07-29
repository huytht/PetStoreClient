import React, { useEffect } from 'react'
import { Collapse, Grid, Text, Avatar,Divider } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderListDelivering } from '../redux/Actions/PaymentAction';
import { OrderList } from './OrderList';
const OrderDelivering= () => {
  
  const { loading, orderedList } = useSelector((state) => state.orderListDelivering);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderListDelivering());
  }, []);

  return (
    <>
      <OrderList loading={loading} orderedList={orderedList} />
    </>
  )
}

export default OrderDelivering