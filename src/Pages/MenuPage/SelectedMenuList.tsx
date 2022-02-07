import React from 'react';
import { selectedMenuInfoState, selectedMenusState} from "../../recoil";
import {useRecoilState, useRecoilValue} from 'recoil'
import styled from "styled-components";
import useAddDeleteSelectedMenu from "./hooks/useAddDeleteSelectedMenu";


const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 30px;
  background-color: #c7c7d2;
  width: 100%;
  height: 240px;
`;


const SelectedMenuList = () => {
    const selectedMenus = useRecoilValue(selectedMenusState)
    const [selectedMenuInfos, setSelectedMenuInfos] = useRecoilState(selectedMenuInfoState)
    const { deleteSelectedMenu } = useAddDeleteSelectedMenu()

    const setSelectedMenuAmount = (menuId: string, amount: number) => {
        if(amount < 0) return;
        setSelectedMenuInfos(selectedMenuInfos.map((v) => {
            if(v.menuId === menuId) return { ...v, amount }
            return v;
        }))
    }

    return (
        <Wrapper>
            {selectedMenus?.map((v) => (
                <h3>
                    <button onClick={() => setSelectedMenuAmount(v.id, v.amount - 1)}>-</button>
                    {v.name}({v.amount})
                    <button onClick={() => setSelectedMenuAmount(v.id, v.amount + 1)}>+</button>
                    <button onClick={() => deleteSelectedMenu(v.id)}>X</button>
                </h3>
            ))}
        </Wrapper>
    )
}

export default SelectedMenuList;