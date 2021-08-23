import React from 'react';
import { StyledIconCardWrapper } from './IconCardWrapperStyle';

const IconCardWrapper = (props) => {
    return(
        <StyledIconCardWrapper>{props.children}</StyledIconCardWrapper>
    );
}

export default IconCardWrapper;