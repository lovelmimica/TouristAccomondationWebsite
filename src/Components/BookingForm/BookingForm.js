import React, { useEffect } from 'react';
import { StyledFormSection, StyledBookingForm, StyledInput, StyledInputBox, StyledIcon, StyledInputFields, StyledButtonWrapper } from './BookingFormStyle';
import Aos from 'aos';
import 'aos/dist/aos.css';

//Components
import Button from '../Button/Button';

//Assets
import keyIcon from '../../Assets/Images/key.png';
import calendarIcon from '../../Assets/Images/calendar.png';
import groupIcon from '../../Assets/Images/group.png';

const BookingForm = (props) => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return(
        <StyledFormSection id={props.id}>
            <StyledBookingForm data-aos="fade-up" className={props.className}>
                <StyledInputFields>
                    <StyledInputBox>
                        <StyledInput placeholder='Room'></StyledInput>                            <StyledIcon src={keyIcon}></StyledIcon>
                    </StyledInputBox>
                    <StyledInputBox>
                        <StyledInput placeholder='Check in'></StyledInput>
                        <StyledIcon src={calendarIcon}></StyledIcon>
                    </StyledInputBox>
                    <StyledInputBox>                            
                        <StyledInput placeholder='Check out'></StyledInput>
                        <StyledIcon src={calendarIcon}></StyledIcon>
                    </StyledInputBox>
                    <StyledInputBox>
                        <StyledInput placeholder='Persons'></StyledInput>
                        <StyledIcon src={groupIcon}></StyledIcon>
                    </StyledInputBox>                
                    <Button>Check</Button>
                </StyledInputFields>
            </StyledBookingForm>
        </StyledFormSection>

    );
}

export default BookingForm;