import React, { useEffect } from 'react'
import { Collapse, Grid, Text, Avatar,Divider } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { createPayment, getOrderListUnpaid } from '../redux/Actions/PaymentAction';
import { MdExpandLess } from 'react-icons/md';
import { FaCcPaypal } from 'react-icons/fa';
import { OrderList } from './OrderList';

const OrderUnpaid = () => {
    
  const { loading, orderedList } = useSelector((state) => state.orderListUnpaid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderListUnpaid());
  }, []);

  return (
    <>
      <OrderList loading={loading} orderedList={orderedList} />
    </>
  )
}

export default OrderUnpaid