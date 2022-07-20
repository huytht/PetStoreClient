import { PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "../Constants/PaymentConstant";
import { axiosClient } from './../../services/api';
import * as cryptojs from 'crypto-js';

export const createPayment = (amount, paymentMethod) => async (dispatch) => {
  dispatch({ type: PAYMENT_REQUEST });
  
  try {
    const response = await axiosClient.post(paymentMethod === "Momo" ? `/pay/momo?amount=${amount}` : `/pay/paypal?amount=${amount * 0.00004263}`);
    // window.location.href = response.data.data;
    window.open(response.data.data, '_blank').focus();
    dispatch({ type: PAYMENT_SUCCESS, payload: response });
  } catch (error) {
    console.log(error)
    dispatch({ type: PAYMENT_FAIL, payload: error.response });
  }
};
