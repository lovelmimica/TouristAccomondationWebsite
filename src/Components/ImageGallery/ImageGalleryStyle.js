import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledImageGallery = styled.div`    
    /*grid-template-columns: 50% 50%;*/

    /*box-shadow: 9px 9px 16px rgba(0, 0, 0, 0.16);*/
    & .alice-carousel__wrapper{
        height: 300px;
        cursor: pointer;
        border-radius: 7px;
        box-shadow: 9px 9px 16px rgba(0, 0, 0, 0.16);
    }
    & .alice-carousel__wrapper img{
        width: 100%;
        height: 100%;
    }
    
`;

export const StyledImage = styled.img`
    width: 100%;

    &:first-child{
            border-top-left-radius: 7px;
    }

    &:nth-child(2){
        border-top-right-radius: 7px;
    }

    &:nth-child(3){
        border-bottom-left-radius: 7px;
    }

    &:last-child{
        border-bottom-right-radius: 7px;
    }

    @media( min-width: ${DevicesMinSizes.tablet} ){
        width: 25%;

        &:first-child{
            border-top-left-radius: 7px;
            border-bottom-left-radius: 7px;
        }

        &:nth-child(2){
            border-top-right-radius: 0px;
        }

        &:nth-child(3){
            border-bottom-left-radius: 0px;
        }

        &:last-child{
            border-bottom-right-radius: 7px;
            border-top-right-radius: 7px;
        }
    }


`;
