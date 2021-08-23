import React from 'react';
import {StyledSection} from './SectionStyle';

const Section = (props) => {
    return(
        <StyledSection className={props.className} backgroundColor={props.backgroundColor} backgroundImage={props.backgroundImage} minHeight={props.minHeight} backgroundColorTablet={props.backgroundColorTablet} paddingTopMobile={props.paddingTopMobile}>{props.children}</StyledSection>
    );
}

export default Section;