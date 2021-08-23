import React from 'react';
import {StyledSubheading, StyledIcon} from './SubheadingStyle';

const Subheading = (props) => {
    return(
        <StyledSubheading className={props.className} color={props.color}>
            {props.icon && 
                <StyledIcon src={props.icon}></StyledIcon>
            }
            {props.children}
            </StyledSubheading>
    );
}

export default Subheading;