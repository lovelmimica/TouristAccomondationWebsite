import React from 'react';
import { StyledHeading } from './HeadingStyle';

const Heading = (props) => {
    return(
        <StyledHeading>{props.children}</StyledHeading>
    );
}

export default Heading;