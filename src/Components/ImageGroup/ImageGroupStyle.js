import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledImageGroup = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2%;
`;

export const StyledImageBox = styled.div`
    width: 37%;
    height: fit-content;
    &:first-child, &:last-child{
            padding-top: 20%;
            width: 25%;   
    }
    @media( min-width: ${DevicesMinSizes.tablet} ){
        width: 29%;
            &:first-child, &:last-child{
            padding-top: 0;
        }
    }
`;

export const StyledImage = styled.img`
    width: 100%;
    height: fit-content;
    border-radius: 7px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
`;