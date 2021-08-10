import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledParagraph = styled.p`
    text-align: ${props => props.align ? props.align : 'left'};
    font-size: 16px;
    font-weight: normal;
    margin: 0;
    color: ${props => props.color ? props.color : '#707070' };
    @media( min-width: ${DevicesMinSizes.tablet} ){
        font-size: 20px;
    }
    @media( min-width: ${DevicesMinSizes.laptop} ){
        font-size: 28px;
    }
`;