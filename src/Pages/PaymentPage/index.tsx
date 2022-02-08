import React from 'react';
import styled from "styled-components";
import {useRecoilValue, useRecoilState} from "recoil";
import {
    couponsState,
    paymentMethodsState,
    paymentState,
    selectedCouponState,
    selectedPaymentMethodState
} from "../../recoil";
import getCurrencyStr from "../../utills/getCurrencyStr";
import NextButton from "../../Components/NextButton";


const Wrapper = styled.div`
  padding: 30px;
  overflow-y: scroll;
`;

const CouponList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const Coupon = styled.div`
  width: 30%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  
  ${({ selected }: { selected: boolean }) => selected && `background-color: gray;`}
`;


const PaymentPage = () => {


    return (
        <Wrapper>
        </Wrapper>
    )
}


export default PaymentPage;