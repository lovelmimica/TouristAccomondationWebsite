import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';


export const StyledLabel = styled.span`
    font-weight: lighter;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    font-size: 16px;
    color: ${props => props.color ? props.color : '#707070' };
    text-align: ${props => props.align ? props.align : '' };
    @media( min-width: ${DevicesMinSizes.tablet} ){
        font-size: 20px;
    }
    @media( min-width: ${DevicesMinSizes.laptop} ){
        font-size: 28px;
    }

    &.label__privacy-notice{
        padding-top: 30px;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            padding-top: 50px;
        }
        @media( min-width: ${DevicesMinSizes.laptop} ){
            padding-top: 100px;
        }
    }
`;