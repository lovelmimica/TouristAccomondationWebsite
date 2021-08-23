import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

//Assets
import bookingScoreImage from '../../Assets/Images/booking-score.png';

export const StyledBookingScore = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    align-items: center;

    @media( min-width: ${DevicesMinSizes.tablet} ){
        grid-column: span 3;
        justify-self: end;
    }
`;

export const StyledRate = styled.span`
    background-image: url(${bookingScoreImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 15px;
    color: #707070;
    font-size: 30px;
`;