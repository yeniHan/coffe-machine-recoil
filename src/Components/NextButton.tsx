import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const StyledNextButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  font-size: 30px;

`

const NextButton = ({ path }: { path: string}) => {
    const navigator = useNavigate()

    return (
        <StyledNextButton onClick={() => navigator(path)}>다음으로</StyledNextButton>
    )
}

export default NextButton;