import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'


const StyledBackButton = styled.button`
  position: fixed;
  left: 30px;
  bottom: 30px;
  font-size: 30px;
  cursor: pointer;
`

const BackButton = () => {
    const navigator = useNavigate()
    return (
        <StyledBackButton onClick={() => navigator(-1)}>뒤로</StyledBackButton>
    )
}

export default BackButton;