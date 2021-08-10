import React from 'react';
import { StyledLanguageSelect, StyledLanguageOption } from './LanguageSelectStyle';

const LanguageSelect = () => {
    return(
        <StyledLanguageSelect>
            <StyledLanguageOption>English</StyledLanguageOption>
            <StyledLanguageOption>Hrvatski</StyledLanguageOption>
        </StyledLanguageSelect>
    );
}

export default LanguageSelect;