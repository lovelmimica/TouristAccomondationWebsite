import React from 'react';
import {StyledParagraph} from './ParagraphStyle';

const Paragraph = (props) => {
    console.log(props.align);
    return(
        <StyledParagraph color={props.color} align={props.align}>{props.children}</StyledParagraph>
    );
}

export default Paragraph;