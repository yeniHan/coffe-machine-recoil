import React from 'react';
import {paymentState, selectedMenuInfoState, selectedMenusState} from "../recoil";
import {useRecoilState, useRecoilValue} from 'recoil'
import styled from "styled-components";
import useAddDeleteSelectedMenu from "../Pages/MenuPage/hooks/useAddDeleteSelectedMenu";
import getCurrencyStr from "../utills/getCurrencyStr";
import {useLocation} from "react-router-dom";


const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 30px;
  background-color: #c7c7d2;
  width: 100%;
  height: 247px;
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
  ${({notShow}:{notShow: boolean}) => notShow && 'display: none'};
`;

const Button = styled.button`
  ${({notShow}:{notShow: boolean}) => notShow && 'display: none'};
`


const SelectedMenuList = () => {
    const selectedMenus = useRecoilValue(selectedMenusState)
    const payment = useRecoilValue(paymentState)
    const [selectedMenuInfos, setSelectedMenuInfos] = useRecoilState(selectedMenuInfoState)
    const { deleteSelectedMenu } = useAddDeleteSelectedMenu()
    const isNotMenuPage = useLocation().pathname !== '/'

    const setSelectedMenuAmount = (menuId: string, amount: number) => {
        if(amount <= 0) return;
        setSelectedMenuInfos(selectedMenuInfos.map((v) => {
            if(v.menuId === menuId) return { ...v, amount }
            return v;
        }))
    }

    return (
        <Wrapper>
            <SelectedList role="selected-menu-list">
            {selectedMenus?.map((v) => (
                <SelectedMenu key={v.id}>
                    <Button notShow={isNotMenuPage} onClick={() => setSelectedMenuAmount(v.id, v.amount - 1)}>-</Button>
                    {v.name}({v.amount})
                    <Button notShow={isNotMenuPage} onClick={() => setSelectedMenuAmount(v.id, v.amount + 1)}>+</Button>
                    <XButton notShow={isNotMenuPage} onClick={() => deleteSelectedMenu(v.id)}>X</XButton>
                </SelectedMenu>
            ))}
            </SelectedList>
            <h3>총 {getCurrencyStr(payment.totalPrice)}원</h3>
        </Wrapper>
    )
}

export default SelectedMenuList;