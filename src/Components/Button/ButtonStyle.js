import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledButton = styled.button`
    border: none;
    text-align: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#208cce'};
    color: ${props => props.color ? props.color : 'white'};
    border-radius: 7px;
    max-height: 55px;
    width: ${props => props.width ? props.width : '100%'};
    padding: 12px 30px 12px 30px;
    font-size: 24px;
    @media( min-width: ${DevicesMinSizes.laptop} ){
        font-size: 24px;
    }
    margin-top: ${props => props.marginTop ? props.marginTop : 0};
    margin-left: ${props => props.marginLeft ? props.marginLeft : 0};

    &:hover{
        opacity: 0.8;
        cursor: pointer;
        transform: scale(0.8);
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transition-duration: 0.3s;
    }
`;