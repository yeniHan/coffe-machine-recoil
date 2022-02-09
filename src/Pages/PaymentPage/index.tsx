import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {
    paymentState, selectedCouponState,
    selectedMenusState,
} from "../../recoil";
import getCurrencyStr from "../../utills/getCurrencyStr";
import BackButton from "../../Components/Backbutton";
import {postPayment} from "../../apiCalls";
import {Spinner} from "../../Components/LoadingPage";


const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #c7c7d2;
  height: calc(100vh - 60px);
`;

const PaymentInfo = styled.div`
  background-color: white;
  width: 650px;
  padding: 0 20px;
`;


const Devider = styled.div`
  background-color: black;
  width: 100%;
  height: 2px;
`;


const PaymentPage = () => {
    const payment = useRecoilValue(paymentState)
    const selectedCoupon = useRecoilValue(selectedCouponState)
    const selectedMenus = useRecoilValue(selectedMenusState)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const id = setTimeout(() => {
            postPayment(payment)
                .then(() => {
                    setIsLoading(false)
                })
        }, 5000)
        return () => {
            clearTimeout(id)
        }
    }, [])

    useEffect(() => {
        let id: ReturnType<typeof setTimeout>;
        if(!isLoading) {
            id = setTimeout(() => {
                // recoil state 전부 reset 필요
                window.location.href = '/'
            }, 3000)
        }
        return () => {
            if(id) clearTimeout(id)
        }
    }, [isLoading])


    return (
        <Wrapper>
            <h1>{isLoading ? '선택하신 상품으로 결제가 진행중입니다.' : '결제가 완료되었습니다. 메뉴가 대기중 입니다.'}</h1>
            <PaymentInfo>
                {
                    selectedMenus?.map((v) => (
                        <h2 key={v.id}>{v.name}({v.amount})</h2>
                    ))
                }
                <Devider />
                {selectedCoupon && <h3>선택된 쿠폰: {selectedCoupon.name}</h3>}
                <h3>총 금액: {getCurrencyStr(payment.totalPrice)}원</h3>
            </PaymentInfo>
            {isLoading && <Spinner />}
            {isLoading && <BackButton />}
        </Wrapper>
    )
}


export default PaymentPage;