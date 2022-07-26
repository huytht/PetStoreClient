import React, { useEffect } from 'react'
import { Collapse, Grid, Text, Avatar,Divider } from "@nextui-org/react";
import { useSelector, useDispatch } from 'react-redux';
import { getOrderListProcessing } from '../redux/Actions/PaymentAction';
import { MdExpandLess } from 'react-icons/md';
import { FaCcPaypal } from 'react-icons/fa';
import { OrderList } from './OrderList';
const OrderConfirm = () => {
    
  const { loading, orderedList } = useSelector((state) => state.orderListProcessing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderListProcessing());
  }, []);

  return (
    <>
      <OrderList loading={loading} orderedList={orderedList} />
    </>
  )
}

export default OrderConfirm