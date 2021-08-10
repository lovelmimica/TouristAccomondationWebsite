import React from 'react';
import { StyledIconCard, StyledIconCardBox } from './IconCardStyle';

//Components
import Subheading from '../Subheading/Subheading';

const IconCard = (props) => {
    return(
        <StyledIconCardBox>
            <StyledIconCard src={props.src}></StyledIconCard>
            <Subheading>{props.title}</Subheading>
        </StyledIconCardBox>
        
    );
}

export default IconCard;