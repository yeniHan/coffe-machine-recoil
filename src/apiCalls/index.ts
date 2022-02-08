import Axios from './Axios';
import {MenuType, PaymentType} from "../types";
import {AxiosResponse} from "axios";

export const getCoupons = async () => {
   return await Axios.get('/coupons')
}

export const getMenus = () => {
    return Axios.get('/menus');
}

export const getPaymentMethods = () => {
    return Axios.get('/paymentMethods');
}

export const postPayment = async(payment: PaymentType) => {
    return await  Axios.post('/payment', payment)
}