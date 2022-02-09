import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {paymentMethodsState, paymentState, selectedPaymentMethodState} from "../../recoil";
import NextButton from "../../Components/NextButton";
import styled from "styled-components";
import BackButton from "../../Components/Backbutton";
import SelectedMenuList from "../../Components/SelectedMenuList";


const Wrapper = styled.div`
  padding: 30px;
  overflow-y: scroll;
  height: calc(100vh - 367px);
`;

const PaymentMethodsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const PaymentMethod = styled.div`
  width: 30%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 20px;

  ${({ selected }: { selected: boolean }) => selected && `background-color: gray;`}
`;


const PaymentMethodPage = () => {
    const paymentMethods = useRecoilValue(paymentMethodsState)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useRecoilState(selectedPaymentMethodState)

    return (
        <Wrapper>
            <h1>결제수단을 선택하세요.</h1>
            <h3>현금결제시, 추가 5%할인 적용</h3>
            <PaymentMethodsList>
                {paymentMethods?.map((v) => {
                    const isSelected = v.id === selectedPaymentMethod?.id
                    return (
                        <PaymentMethod
                            key={v.id}
                            selected={isSelected}
                            onClick={() => setSelectedPaymentMethod(isSelected? null : v)}>
                            <h2>{v.text}</h2>
                        </PaymentMethod>
                    )
                })}
            </PaymentMethodsList>
            <SelectedMenuList />
            {selectedPaymentMethod && <NextButton path='/payment' />}
            <BackButton />
        </Wrapper>
    )
}

export default PaymentMethodPage;