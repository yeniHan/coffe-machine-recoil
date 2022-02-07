import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


const StyledNextButton = styled(Link)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  font-size: 30px;
`

const NextButton = ({ path }: { path: string}) => {
    return (
        <StyledNextButton to={path}>다음으로</StyledNextButton>
    )
}

export default NextButton;