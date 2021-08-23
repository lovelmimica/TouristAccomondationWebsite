import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledLink = styled.a`
    text-align: ${props => props.align};
    font-size: 16px;
    font-weight: normal;
    color: ${props => props.color ? props.color : '#707070'};
    text-align: center;
    display: block;
    font-weight: 600;
    margin-top: ${props => props.marginTop ? props.marginTop : 'auto'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 'auto'};
    text-decoration: none;
    @media( min-width: ${DevicesMinSizes.tablet} ){
        font-size: 22px;
        margin-top: 35px;
    }
    @media( min-width: ${DevicesMinSizes.laptop} ){
        font-size: 28px;
    }

    .section__oportunity &{
        color: white;
        margin-top: 40px;
        font-size: 28px;
    }

    @media( min-width: ${DevicesMinSizes.tablet} ){
        .section__oportunity &{
            color: white;
            margin-top: auto;
        }
    }
`;