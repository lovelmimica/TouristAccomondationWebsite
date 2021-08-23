import React from 'react';
import { StyledContactForm, StyledInput, StyledTextarea, StyledLabel, StyledInputFieldsBox } from './ContactFormStyle';

//Components
import Button from '../Button/Button';

const ContactForm = () => {
    return(
        <StyledContactForm>
            <StyledInputFieldsBox>
                <StyledLabel>Full Name</StyledLabel>
                <StyledInput></StyledInput>
                <StyledLabel>Phone Number</StyledLabel>
                <StyledInput></StyledInput>
                <StyledLabel>Email Address</StyledLabel>
                <StyledInput></StyledInput>
            </StyledInputFieldsBox>
            <StyledInputFieldsBox>
                <StyledLabel>Message</StyledLabel>
                <StyledTextarea></StyledTextarea>
                <Button width="max-content" marginTop="auto" marginLeft="auto">Send Message</Button>
            </StyledInputFieldsBox>
        </StyledContactForm>
    );
}

export default ContactForm;