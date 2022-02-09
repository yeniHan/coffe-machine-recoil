import React from 'react';
import styled from "styled-components";
import {useRecoilValue, useRecoilState} from "recoil";
import {couponsState, selectedCouponState} from "../../recoil";
import NextButton from "../../Components/NextButton";
import BackButton from "../../Components/Backbutton";
import SelectedMenuList from "../../Components/SelectedMenuList";


const Wrapper = styled.div`
  padding: 30px;
  overflow-y: scroll;
  height: calc(100vh - 367px);
`;

const CouponList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const Coupon = styled.div`
  width: 30%;
  height: 142px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 20px;

  ${({ selected }: { selected: boolean }) => selected && `background-color: gray;`}
`;


const CouponPage = () => {
    const coupons = useRecoilValue(couponsState)
    const [selectedCoupon, setSelectedCoupon] = useRecoilState(selectedCouponState)

    return (
        <Wrapper>
            <h2>쿠폰을 선택하세요.</h2>
            <h5>*Takeout 메뉴는 쿠폰 적용 불가</h5>
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
            <SelectedMenuList />
            <NextButton path='/paymentMethod' />
            <BackButton />
        </Wrapper>
    )
}

export default CouponPage;