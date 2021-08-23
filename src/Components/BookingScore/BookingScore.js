import React from 'react';
import { StyledBookingScore, StyledRate } from './BookingScoreStyle';

//Components
import Subheading from '../Subheading/Subheading';



const BookingScore = () => {
    return(
        <StyledBookingScore>
            <Subheading color='white'>Booking score</Subheading>
            <StyledRate>9.3</StyledRate>
        </StyledBookingScore>
    );
}

export default BookingScore;