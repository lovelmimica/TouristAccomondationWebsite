import React from 'react';
import { StyledDashedWrapper } from './DashedWrapperStyle';



const DashedWrapper = (props) => {
    return(
        <StyledDashedWrapper>{props.children}</StyledDashedWrapper>
    );
}

export default DashedWrapper;