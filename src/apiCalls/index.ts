import Axios from './Axios';
import {MenuType, Payment} from "../types";
import {AxiosResponse} from "axios";

export const getCoupons = async () => {
   const { data }  = await Axios.get('/coupons')
    return data;
}

export const getMenus = () => {
    return Axios.get('/menus');
}

export const postPayment = async(payment: Payment) => {
    const { data }  = await  Axios.post('/payment', payment)
    return data;
}