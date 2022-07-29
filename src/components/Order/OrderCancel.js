import React, { useEffect } from 'react'
import { Collapse, Grid, Text, Avatar,Divider } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderListCancel, getOrderListDelivering } from '../redux/Actions/PaymentAction';
import { OrderList } from './OrderList';
const OrderCancel= () => {
  
  const { loading, orderedList } = useSelector((state) => state.orderListCancel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderListCancel());
  }, []);

  return (
    <>
      <OrderList loading={loading} orderedList={orderedList} />
    </>
  )
}

export default OrderCancel