import React, { useEffect, useState } from "react";
import { Collapse, Grid, Avatar, Divider } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderListAll } from "../redux/Actions/PaymentAction";
import { MdExpandLess } from "react-icons/md";
import { FaCcPaypal } from "react-icons/fa";
import { createPayment } from './../redux/Actions/PaymentAction';
import { OrderList } from "./OrderList";
const OrderAll = () => {
  const { loading, orderedList } = useSelector((state) => state.orderListAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderListAll());
  }, []);

  return (
    <>
      <OrderList loading={loading} orderedList={orderedList} />
    </>
  )
};

export default OrderAll;
