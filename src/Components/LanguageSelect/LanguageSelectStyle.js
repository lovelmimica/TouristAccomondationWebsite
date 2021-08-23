import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledLanguageSelect = styled.select`
    font-size: 16px;
    font-weight: normal;
    display: block;
    position: absolute;
    top: 2%;
    right: 2%;
    margin: 0 0 0 auto;
    border: none;
    color: #707070;
    cursor: pointer;
    background-color: transparent;
    @media( min-width: ${DevicesMinSizes.tablet} ){
        font-size: 24px;
    }
`;

export const StyledLanguageOption = styled.option`
    background-color: transparent;
`;