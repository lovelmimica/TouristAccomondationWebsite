import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledSection = styled.section`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    background-image: url(${props => props.backgroundImage ? props.backgroundImage : ''});
    background-size: cover;
    min-height: ${props => props.minHeight ? props.minHeight : ''};
    padding: 8% 5% 8% 5%;
    @media( min-width: ${DevicesMinSizes.tablet} ){
        padding: 5% 10% 10% 10%;
        background-color: ${props => props.backgroundColorTablet ? props.backgroundColorTablet : ""};
    }

    &.section__oportunity{
        margin-top: 30%;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            margin-top: 0;
        }
    }

    &.section__gallery{
        padding: 1% 5% 8% 5%;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            padding: 1% 5% 5% 5%;
        }
    }

    &.section__map{
        @media( min-width: ${DevicesMinSizes.tablet} ){
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }

    &.section__footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 0;
        padding-top: 8%;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            padding-top: 10%;
        }

        @media( max-width: ${DevicesMinSizes.tablet} ){
            padding-top: ${props => props.paddingTopMobile ? props.paddingTopMobile : '' }
        }
    }
`