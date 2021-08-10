import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledFormSection = styled.section`
    width: 80%;
    margin-left: auto; 
    margin-right: auto;
    display: block;
`;

export const StyledBookingForm = styled.form`
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    @media( min-width: ${DevicesMinSizes.laptop} ){
        max-width: 100%;
    }
    display: flex;
    flex-direction: column;
    @media( min-width: ${DevicesMinSizes.tablet} ){
        flex-direction: row;
    }
    justify-content: space-between;
    align-items: center;
    
    background-color: white;
    padding: 0 20px 0 20px;
    border-radius: 7px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
    border: 0.5px solid #eaf0f6;
    position: relative;
    &.booking-form__top{
        margin-top: -20px;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            margin-top: -60px;
        }
    }

    &.booking-form__bottom{
        margin-bottom: -20px;
        @media( min-width: ${DevicesMinSizes.tablet} ){
            margin-bottom: -60px;
        }
    }
`;

export const StyledInputFields = styled.div`
    max-width: 280px;
    padding: 35px 0px 35px 0px;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    height: 320px;
    flex-direction: column;
    align-items: stretch;
    @media( min-width: ${DevicesMinSizes.laptop} ){
        grid-template-columns: 19% 19% 19% 19% 19%;
        padding: 35px 20px 35px 20px;
        height: auto;
        max-width: none;
    }
    gap: 1%;
    margin-right: auto;
    margin-left: auto;
`;

export const StyledButtonWrapper = styled.div`
    padding: 0px 0px 35px 0px;
    @media( min-width: ${DevicesMinSizes.laptop} ){
        gap: 30px;
        padding: 35px 20px 35px 0px;
    }
    width: 50%;
    @media( min-width: ${DevicesMinSizes.tablet} ){
        width: 20%;
        padding: 35px 20px 35px 5px;
    }
    text-align: right;
`;

export const StyledInputBox = styled.span`
    height: 30px;
    border: solid 1px #bfd6eb;
    padding: 10px;
    @media( min-width: ${DevicesMinSizes.tablet} ){
        width: 90%;
        padding: 10px;
    }
    border-radius: 7px;
    display: flex;
`;

export const StyledInput = styled.input`
    height: 100%;
    border: none;
    width: 90%;
    font-size: 14px;
    @media( min-width: ${DevicesMinSizes.laptop} ){
        font-size: 24px;
    }

    &:focus-visible{
        outline: none;
    }
`;

export const StyledIcon = styled.img`

`;

