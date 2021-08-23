import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledCardsWrapper = styled.div`
    .section__feature &{
        display: grid;
        grid-template-columns: 100%;
    }
     
    @media( min-width: ${DevicesMinSizes.tablet} ){
        .section__feature &{
            grid-template-columns: 40% 60%;
            gap: 30px;
            align-items: center;
        }
    }
    @media( min-width: ${DevicesMinSizes.tablet} ){
        .section__oportunity &{
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
        }
    }

    &.card-wrapper__rooms{
        @media( min-width: ${DevicesMinSizes.tablet} ){
            grid-template-columns: 65% 35%;
        }
    }

    &.card-wrapper__facilities{
        margin-top: 80px;
        display: grid;
        grid-template-columns: 100%;
        gap: 60px;
        align-items: center;
        justify-content: space-evenly;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            grid-template-columns: 40% 40%;
        }
    }

    &.card-wrapper__reviews{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 20px;

        
        @media( min-width: ${DevicesMinSizes.tablet} ){
            display: grid;
            grid-template-columns: 40% 60%;
        }
    }
`; 