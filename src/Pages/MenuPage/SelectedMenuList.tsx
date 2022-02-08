import React from 'react';
import {paymentState, selectedMenuInfoState, selectedMenusState} from "../../recoil";
import {useRecoilState, useRecoilValue} from 'recoil'
import styled from "styled-components";
import useAddDeleteSelectedMenu from "./hooks/useAddDeleteSelectedMenu";
import getCurrencyStr from "../../utills/getCurrencyStr";


const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 30px;
  background-color: #c7c7d2;
  width: 100%;
  height: 240px;
`;

const SelectedList = styled.div`
  overflow-y: scroll;
  height: 138px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
`

const SelectedMenu = styled.h3`
  width: calc(50% - 60px);
`
const XButton = styled.button`
    margin-left: 5px;
`;


const SelectedMenuList = () => {
    const selectedMenus = useRecoilValue(selectedMenusState)
    const payment = useRecoilValue(paymentState)
    const [selectedMenuInfos, setSelectedMenuInfos] = useRecoilState(selectedMenuInfoState)
    const { deleteSelectedMenu } = useAddDeleteSelectedMenu()

    const setSelectedMenuAmount = (menuId: string, amount: number) => {
        if(amount <= 0) return;
        setSelectedMenuInfos(selectedMenuInfos.map((v) => {
            if(v.menuId === menuId) return { ...v, amount }
            return v;
        }))
    }

    return (
        <Wrapper>
            <SelectedList>
            {selectedMenus?.map((v) => (
                <SelectedMenu>
                    <button onClick={() => setSelectedMenuAmount(v.id, v.amount - 1)}>-</button>
                    {v.name}({v.amount})
                    <button onClick={() => setSelectedMenuAmount(v.id, v.amount + 1)}>+</button>
                    <XButton onClick={() => deleteSelectedMenu(v.id)}>X</XButton>
                </SelectedMenu>
            ))}
            </SelectedList>
            <h3>총 {getCurrencyStr(payment.totalPrice)}원</h3>
        </Wrapper>
    )
}

export default SelectedMenuList;