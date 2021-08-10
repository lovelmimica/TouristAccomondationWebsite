import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

export const StyledContactForm = styled.form`
    display: grid;
    grid-template-columns: 100%;
    border-radius: 7px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto; 
    @media( min-width: ${DevicesMinSizes.tablet} ){
        grid-template-columns: 28% 68%;
        gap: 4%;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
        padding: 5%;
    }
`; 

export const StyledInput = styled.input`
    margin-bottom: 16px;
    border-radius: 7px;
    font-size: 16px;
    color: #707070;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    border: solid 1px #bfd6eb;
    @media( min-width: ${DevicesMinSizes.tablet} ){
        font-size: 20px;
    }
`;

export const StyledTextarea = styled.textarea`
    margin-bottom: 20px;
    border-radius: 7px;
    font-size: 16px;
    color: #707070;
    height: 12em;
    border: solid 1px #bfd6eb;
    padding: 10px;
`;

export const StyledLabel = styled.label`
    font-size: 16px;
    color: #707070;
    padding-bottom: 5px;
`;

export const StyledInputFieldsBox = styled.div`
    display: flex;
    flex-direction: column;
`;