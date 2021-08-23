import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledImageCard = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 7px;
    box-shadow: 9px 9px 16px rgba(0, 0, 0, 0.18);
    @media( min-width: ${DevicesMinSizes.tablet} ){
        height: 100%;
    }

    .section__oportunity &{
        margin-top: -40%;
    }
    @media( min-width: ${DevicesMinSizes.tablet} ){
        .section__oportunity &{
            margin-top: auto;
        }
    }

    &.image__rooms{
        width: 90%;
        margin-left: auto;
        margin-right: auto;

        @media( min-width: ${DevicesMinSizes.tablet} ){
            height: 110%
        }
    }
`;

export const StyledImgWrapper = styled.div`
    position: relative;
`;