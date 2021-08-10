import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledSubheading = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
    font-size: 25px;
    font-weight: normal;
    color: ${props => props.color ? props.color : '#707070'};
    @media( min-width: ${DevicesMinSizes.tablet} ){
        font-size: 35px;
    }

    @media( min-width: ${DevicesMinSizes.laptop} ){
        font-size: 50px;
    }
    &.subheading__rooms{
        @media( min-width: ${DevicesMinSizes.tablet} ){
            display: none;
        }
    }
`;

export const StyledIcon = styled.img`
    height: 50px;
    padding-right: 5px;

    @media( min-width: ${DevicesMinSizes.tablet} ){
        height: 60px;
        padding-right: 10px;
    }
`;