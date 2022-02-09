import React from 'react';
import {menusState, selectedMenuInfoState} from "../../recoil";
import {useRecoilValue} from 'recoil'
import Menu from './Menu';
import styled from "styled-components";
import SelectedMenuList from "../../Components/SelectedMenuList";
import NextButton from "../../Components/NextButton";

const Wrapper = styled.div`
  padding: 30px;
  overflow-y: scroll;
  height: calc(100vh - 367px);
`;

const MenuList = styled.div`
  display: flex;
  flex-wrap: wrap;
`


const MenuPage = () => {
    const menus = useRecoilValue(menusState)
    const isSelectedMenuInfoExist = useRecoilValue(selectedMenuInfoState)?.length > 0

    return (
        <Wrapper>
            <h1>메뉴를 선택하세요.</h1>
                <MenuList>
                    {menus?.map((v) => <Menu key={v.id} menu={v} />)}
                </MenuList>
            <SelectedMenuList />
            {isSelectedMenuInfoExist && <NextButton path="/coupons" />}
        </Wrapper>
    )
}

export default MenuPage;