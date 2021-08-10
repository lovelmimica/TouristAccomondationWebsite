import styled from 'styled-components';
import { DevicesMinSizes } from '../../Sizes';

//Assets
import dashedBorder from '../../Assets/Images/dashed-border.png';

export const StyledDashedWrapper = styled.div`
    background-image: url(${dashedBorder});
    background-position: center;
    background-size: 99% 99%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    padding: 0 30px 40px 30px;

    @media( min-width: ${DevicesMinSizes.laptop} ){
        max-width: 400px;
        padding: 10px 40px 50px 40px;
    }
`;