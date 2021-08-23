import React from 'react';
import { StyledInfoCard } from './InfoCardStyle';

const InfoCard = (props) => {
    return(
        <StyledInfoCard className={props.className}>{props.children}</StyledInfoCard>
    );
}

export default InfoCard;