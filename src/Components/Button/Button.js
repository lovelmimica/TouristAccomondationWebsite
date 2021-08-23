import React from 'react';
import { StyledButton } from './ButtonStyle';

const Button = (props) =>{
    return(
        <StyledButton color={props.color} backgroundColor={props.backgorundColor} marginLeft={props.marginLeft} marginTop={props.marginTop} width={props.width}>{props.children}</StyledButton>
    );
}

export default Button;