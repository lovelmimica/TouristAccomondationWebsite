import React from 'react';
import { StyledCardsWrapper } from './CardsWrapperStyle';

const CardsWrapper = (props) => {
    return (
        <StyledCardsWrapper className={props.className}>{props.children}</StyledCardsWrapper>
    );
}

export default CardsWrapper;