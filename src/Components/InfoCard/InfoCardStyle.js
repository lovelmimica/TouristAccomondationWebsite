import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledInfoCard = styled.div`
    .section__feature &{
        background-color: white;
        box-shadow: 9px 9px 16px rgba(0, 0, 0, 0.18);
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        margin-top: -15%;
        padding: 3% 10% 5% 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 250px;
        border-radius: 7px;
        z-index: 10;
        position: relative;
    
        @media( min-width: ${DevicesMinSizes.tablet} ){
            box-shadow: none;
            margin: 0;
            height: 500px;
            min-height: auto;
        }
    }

    .section__oportunity &{
        position: relative;
        z-index: 10;
        margin-top: auto;

        @media( min-width: ${DevicesMinSizes.tablet} ){
            margin-top: 0;
        }
    }

    &.info-card__rooms{
        width: 80%;
        background-color: #208cce;
        color: white;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            width: auto;
            max-width: 140%;
            margin-left: -50%;
            height: fit-content;
        }
    }
`;