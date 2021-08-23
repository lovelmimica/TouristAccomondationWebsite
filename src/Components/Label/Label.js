import React from 'react';
import { StyledLabel } from './LabelStyle';

const Label = (props) => {
    return(
        <StyledLabel className={props.className} align={props.align} color={props.color}>{props.children}</StyledLabel>
    );
}

export default Label;