import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledHeading = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    color: white;
    @media( min-width: ${DevicesMinSizes.tablet} ){
        font-size: 40px;
    }

    @media( min-width: ${DevicesMinSizes.laptop} ){
        font-size: 60px;
    }

    .imageWrapper &{
        display: block;
        color: white;
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;

        @media( min-width: ${DevicesMinSizes.tablet} ){
            display: none;
        }
    }

    .section__oportunity__info-card &{
        display: none;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            display: block;
        }
    }
`;