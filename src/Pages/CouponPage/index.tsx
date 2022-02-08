import React from 'react';
import styled from "styled-components";
import {useRecoilValue, useRecoilState} from "recoil";
import {couponsState, paymentState, selectedCouponState} from "../../recoil";
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


const CouponPage = () => {
    const coupons = useRecoilValue(couponsState)
    const [selectedCoupon, setSelectedCoupon] = useRecoilState(selectedCouponState)
    const payment = useRecoilValue(paymentState)

    return (
        <Wrapper>
            <h1>쿠폰을 선택하세요.</h1>
            <CouponList>
                {coupons?.map((v) => {
                    const isSelected = v.id === selectedCoupon?.id
                    return (
                        <Coupon
                            key={v.id}
                            selected={isSelected}
                            onClick={() => setSelectedCoupon(isSelected? null : v)}>
                            <h2>{v.name}</h2>
                        </Coupon>
                    )
                })}
                </CouponList>
            <h3>총 {getCurrencyStr(payment.totalPrice)}원</h3>
            <NextButton path='/payment' />
        </Wrapper>
    )
}

export default CouponPage;