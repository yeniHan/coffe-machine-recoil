import React, {useEffect} from 'react';
import {MenuType} from "../../types";
import styled from 'styled-components';
import {useSetRecoilState} from "recoil";
import {selectedMenuInfoState} from "../../recoil";
import useAddDeleteMenuMethods from "./hooks/useAddDeleteSelectedMenu";


const Wrapper = styled.div`
  width: 30%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  
  :hover{
    background-color: gray;
  }
`;




const Menu = ({ menu }: { menu: MenuType}) => {
    const setSelectedMenuInfoState = useSetRecoilState(selectedMenuInfoState)
    const {addSelectedMenu} = useAddDeleteMenuMethods()

    return (
        <Wrapper onClick={() => addSelectedMenu(menu.id)}>
            <h2>{menu.name}</h2>
        </Wrapper>
    )
}

export default Menu;