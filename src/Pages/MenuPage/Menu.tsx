import React, {useEffect} from 'react';
import {MenuType} from "../../types";
import styled from 'styled-components';
import useAddDeleteMenuMethods from "./hooks/useAddDeleteSelectedMenu";
import getCurrencyStr from "../../utills/getCurrencyStr";


const Wrapper = styled.div`
  width: 30%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 20px;
  
  :hover{
    background-color: gray;
  }
`;




const Menu = ({ menu }: { menu: MenuType}) => {
    const {addSelectedMenu} = useAddDeleteMenuMethods()

    return (
        <Wrapper role="menu" onClick={() => addSelectedMenu(menu.id)}>
            <h2>{menu.name}</h2>
            <h3>{getCurrencyStr(menu.price)}원</h3>
        </Wrapper>
    )
}

export default Menu;